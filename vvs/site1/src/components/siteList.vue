<template>
    <div class="category-list-modules">
        <div class="no-category-in-type" v-if='!list.length && loaded'>
            <span><i class="fa fa-file-o fa-3x"></i></span>
            <p class="no-category-tips">该分类下没有内容</p>
        </div>
        <ul class="category-list-container"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            infinite-scroll-immediate-check="false"
            v-else
        >
            <li class="category-list-item" v-for='(item, index) in list'>
                <div class="info-thumb-cotainer">
                    <img :src="item.thumb" alt="" class="info-thumb">
                </div>
                <div class="info-main-container">
                    <h3 class="info-title single-ellipsis">{{item.title}}</h3>
                    <p class="info-description">{{item.description}}</p>
                    <p class="info-other">
                        <span class="author"><i class="fa fa-user"></i>{{item.author}}</span>
                        <span class="create-time">
                            <i class="fa fa-clock-o"></i>{{item.createTime}}
                        </span>
                    </p>
                    <p class="read-more-container">
                        <a class="read-more" :href="item.link" v-if='item.link'>>>查看详情</a>
                        <router-link v-else class='read-more' :to="{path: '/detail', query: {cid: item.id, cateid: item.cateid}}">>>查看详情</router-link>
                    </p>
                </div>
            </li>
        </ul>
        <div class="loading-more-container" v-if='loading'>
            <mt-spinner type="fading-circle" color='#000' :size='24'></mt-spinner><span class="loading-tips">正在加载中...</span>
        </div>
        <div class="loaded-all" v-if='!hasMore && onceLoadMore'>
            <span class="last-line">我是有底线的...</span>
        </div>
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
    .category-list-container
        padding-top 10px
        background #fff
        .category-list-item
            position relative
            margin 0 15px 10px
            padding-bottom 10px
            border 1px solid #eee
            background #fff
            .info-main-container
                padding 0 15px
                .info-title
                    padding 8px 0px
                    color #000
                    font-size 18px
                    font-weight normal
                .info-description
                    font-size 14px
                    line-height 1.75em
                    color #666
                .info-other
                    display flex
                    justify-content space-between
                    margin-top 10px
                    font-size 12px
                    color #999
                    .fa
                        margin-right 5px
                .read-more-container
                    margin-top 16px
                    text-align center
                    .read-more
                        display inline-block
                        font-size 16px
                        border-bottom 1px solid #999
                        color #999
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
        position relative
        height 40px
        width 100vw
        color #000
        text-align center
        background #fff
        .last-line
            position absolute
            top 0
            left 50%
            z-index 2
            padding 0 10px
            line-height 40px
            font-size 14px
            background #fff
            transform translateX(-50%)
        &:after
            content ''
            position absolute
            top 50%
            left 15px
            right 15px
            height 2px
            z-index 1
            transform translateY(-50%)
            background #ccc
    .no-category-in-type
        margin-top 40px
        text-align center
        font-size 16px
        color #999
        .no-category-tips
            margin-top 10px
</style>