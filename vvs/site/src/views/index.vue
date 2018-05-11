<template>
    <div class="index-container" :class="{'no-fixed-search': !swipes.length}">
        <div class="search-contianer" ref='search'>
            <router-link class='search-rotuer' :to="{path: '/search'}">
                <div class="search-content-container">
                    <span class="search-icon"><i class="fa fa-search"></i></span><span class="search-placeholder">搜索文章，相册</span>
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
            <site-category></site-category>
            <site-list></site-list>
        </div>
        <site-footer :type='0'></site-footer>
    </div>
</template>

<script>
    import siteFooter from '../components/footer'
    import siteList from '../components/siteList'
    import siteCategory from '../components/siteCategory'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                'swipes': 'getSwipe'
            })
        },
        mounted () {
            this.initSwipe()
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
                this.$refs.search.style.background = `rgba(66,66,66,${opacity})`
            },
            ...mapActions([
                'initSwipe'
            ])
        },
        beforeRouteLeave (to, from, next) {
            document.removeEventListener('scroll', this.scrollRgb)
            next()
        },
        components: {
            siteFooter,
            siteList,
            siteCategory
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
        &.no-fixed-search
            padding-top 40px
</style>