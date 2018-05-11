<template>
    <div class="photo-list-modules">
        <div class="no-photo-in-type" v-if='!list.length && loaded'>
            <span><i class="fa fa-file-o fa-3x"></i></span>
            <p class="no-photo-tips">该分类下没有内容</p>
        </div>
        <ul class="photo-list-container"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            infinite-scroll-immediate-check="false"
            v-else
        >
            <li class="photo-item" v-for='(item, index) in list'>
                <router-link class='block' :to="{path: '/detail',query: {cid: item.id, cateid: item.cateid}}">
                    <div class="photo-thubm-container">
                        <img class='photo-thumb' :src="item.thumb" alt="">
                    </div>
                    <div class="photo-item-info clearfix">
                        <span class="photo-item-description single-ellipsis fl">{{item.title}}</span>
                        <span class="photo-item-detail-link fr"><i class="fa fa-angle-right fa-2x"></i></span>
                    </div>
                </router-link>
            </li>
            <div class="loading-more-container" v-if='loading'>
                <mt-spinner type="fading-circle" color='#000' :size='24'></mt-spinner><span class="loading-tips">正在加载中...</span>
            </div>
            <div class="loaded-all" v-if='!hasMore && onceLoadMore'>
                <span>已加载全部数据...</span>
            </div>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                limit: 10,
                loading: false,
                type: '',
                onceLoadMore: false,
                loaded: false
            }
        },
        computed: {
            query () {
                return {
                    limit: this.limit,
                    offset: this.offset,
                    type: this.type || ''
                }
            },
            offset () {
                return this.list.length
            },
            ...mapGetters({
                'list': 'getCategoryList',
                'hasMore': 'hasMoreList'
            })
        },
        mounted () {
            this.type = this.$route.query.type
            this.initData()
        },
        methods: {
            initData () {
                this.query.offset = 0
                this.$store.dispatch('initCategoryList', this.query)
                    .then(() => {
                        this.loaded = true
                    })
            },
            loadMore () {
                if (!this.hasMore) return
                if (!this.onceLoadMore) this.onceLoadMore = true
                this.loading = true
                this.$store.dispatch('loadMoreProduct', this.query)
                    .then(() => {
                        this.loading = false
                    })
            }
        }
    }
</script>

<style lang="stylus">
    .photo-list-container
        padding 14px 10px
        background #fff
        .photo-item
            margin-bottom 20px
            padding 12px 8px 0
            border 1px solid #f5f5f5
            background #fff
            box-shadow 5px 6px 2px #999
            .photo-item-info
                color #333
                line-height 36px
                .photo-item-description
                    max-width 80%
            &:last-child
                margin-bottom 0
        .loading-more-container
            padding 6px 0
            text-align center
            background #fff
            color #000
            span
                display inline-block
                vertical-align middle
                &.loading-tips
                    margin-left 10px
                    font-size 14px
        .loaded-all
            padding 8px 0
            color #000
            text-align center
            background #fff
    .no-photo-in-type
        margin-top 40px
        text-align center
        font-size 16px
        color #999
        .no-photo-tips
            margin-top 10px
</style>