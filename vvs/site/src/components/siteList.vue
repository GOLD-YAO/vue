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
                <a class="category-list-info-container clearfix" :href="item.link" v-if='item.link'>
                    <div class="info-thumb-cotainer fl">
                        <img :src="item.thumb" alt="" class="info-thumb">
                    </div>
                    <div class="info-main-container fl">
                        <h3 class="info-title single-ellipsis">{{item.title}}</h3>
                        <p class="info-description single-ellipsis">{{item.description}}</p>
                        <p class="info-other clearfix">
                            <span class="author fl"><i class="fa fa-user"></i>{{item.author}}</span>
                            <span class="create-time fr">
                                <i class="fa fa-clock-o"></i>{{item.createTime}}
                            </span>
                        </p>
                    </div>
                </a>
                <router-link class='category-list-info-container clearfix' :to="{path: '/detail', query:{cid: item.id, cateid: item.cateid}}" v-else>
                    <div class="info-thumb-cotainer fl">
                        <img :src="item.thumb" alt="" class="info-thumb">
                    </div>
                    <div class="info-main-container fl">
                        <h3 class="info-title single-ellipsis">{{item.title}}</h3>
                        <p class="info-description single-ellipsis">{{item.description}}</p>
                        <p class="info-other clearfix">
                            <span class="author fl"><i class="fa fa-user"></i>{{item.author}}</span>
                            <span class="create-time fr">
                                <i class="fa fa-clock-o"></i>{{item.createTime}}
                            </span>
                        </p>
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
    .category-list-container
        background #eee
        .category-list-item
            position relative
            height 80px
            padding 10px 0px
            margin-bottom 1px
            background #fff
            .category-list-info-container
                display block
                height 100%
                .info-thumb-cotainer
                    margin 0 10px 0
                    .info-thumb
                        width 80px
                        height 80px
                .info-main-container
                    box-sizing border-box
                    width calc(100vw - 100px)
                    padding-right 10px
                    .info-title
                        padding 3px 0px
                        color #000
                        font-size 16px
                        font-weight normal
                    .info-description
                        padding 3px 0
                        font-size 14px
                        color #666
                    .info-other
                        margin-top 10px
                        padding-right 20px
                        font-size 12px
                        color #999
                        .fa
                            margin-right 5px
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
    .no-category-in-type
        margin-top 40px
        text-align center
        font-size 16px
        color #999
        .no-category-tips
            margin-top 10px
</style>