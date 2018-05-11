<template>
    <div class="index-container" :class="{'no-fixed-search': !swipes.length}">
        <div class="search-contianer" ref='search'>
            <router-link class='search-rotuer' :to="{path: '/search'}">
                <div class="search-content-container">
                    <span class="search-icon"><i class="fa fa-search"></i></span><span class="search-placeholder">搜索票务、酒店</span>
                </div>
            </router-link>
        </div>
        <div class="index-main-container">
            <div class="slider-modules" v-if='swipes.length'>
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for='swipe in swipes' :key='swipe.pid'>
                        <a class='block' :href="swipe.url"><img :src="swipe.thumb" alt="" width='100%' height="180px" :pid="swipe.pid"></a>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="category-modules" v-if='categorys.length > 1'>
                <ul class="category-ul-container">
                    <li class="category-item" v-for='category in categorys'>
                        <router-link class='category-item-link' :to="{path:`/category`, query: {type:category.type}}">
                            <div class="category-item-thumb">
                                <img class='category-thumb inline' :src="category.icon" alt="">
                            </div>
                            <p class="category-title">{{category.title}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <shop-product-list></shop-product-list>
        </div>
        <shop-footer :type='1'></shop-footer>
    </div>
</template>

<script>
    import shopFooter from '../components/footer'
    import shopProductList from '../components/productlist'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                'swipes': 'getSwipe',
                'categorys': 'getCategory'
            })
        },
        mounted () {
            this.initSwipe()
            this.initCategory()
            this.initScrollEvent()
        },
        methods: {
            initScrollEvent () {
                this.$nextTick(() => {
                    document.addEventListener('scroll', this.scrollRgb)
                })
            },
            scrollRgb () {
                var scrollTop = document.body.scrollTop
                var opacity
                if (scrollTop > 144) {
                    opacity = 1
                } else {
                    opacity = (scrollTop / 144).toFixed(2)
                }
                this.$refs.search.style.background = `rgba(240,240,240,${opacity})`
            },
            ...mapActions([
                'initSwipe',
                'initCategory'
            ])
        },
        beforeRouteLeave (to, from, next) {
            document.removeEventListener('scroll', this.scrollRgb)
            next()
        },
        components: {
            shopFooter,
            shopProductList
        }
    }
</script>

<style lang='stylus'>
    .index-container
        padding-bottom 50px
        background #eee
        background-clip content-box
        .search-contianer
            box-sizing border-box
            position fixed
            top 0
            left 0
            right 0
            z-index 999
            height 40px
            color #666
            text-align center
            .search-rotuer
                display block
                padding 7px 0
            .search-content-container
                box-sizing border-box
                display inline-block
                width 60%
                padding-left 12px
                border-radius 12px
                line-height 26px
                text-align left
                color #333
                background rgba(255,255,255,.8)
                .search-icon
                    margin-right 5px
        .slider-modules
            height 180px
        .category-modules
            margin-bottom 10px
            background #fff
            .category-ul-container
                display flex
                padding 10px 0
                flex-wrap nowrap
                width 100%
                overflow-x auto
                .category-item
                    box-sizing border-box
                    flex 0 0 20%
                    text-align center
                    .category-item-link
                        display block
                    .category-item-thumb
                        display inline-block
                        box-sizing border-box
                        width 50px
                        height 50px
                    .category-title
                        margin-top 6px
                        color #666
        &.no-fixed-search
            padding-top 40px
</style>