<template>
    <div class="content-detail-container">
        <div class="detail-main-container" v-if="detail.type === 'photo'">
            <div class="detail-header-container">
                <h3 class="content-title">{{detail.title}}</h3>
                <p class="content-description">{{detail.description}}</p>
            </div>
            <ul class="photo-detail-container">
                <li class="photo-detail-item" v-for='thumb in detail.thumbs' @click='showFullScreen=true'>
                    <img class='photo-detail-thumb' :src="thumb.url" alt="">
                    <p class="photo-detail-description single-ellipsis">{{thumb.memo}}</p>
                </li>
            </ul>
        </div>
        <div class="detail-main-container" v-else>
            <div class="detail-header-container">
                <h3 class="content-title">{{detail.title}}</h3>
                <div class="content-time-author clearfix">
                    <span class="content-time fl">{{detail.createTime}}</span>
                    <span class="content-author fr">{{detail.author}}</span>
                </div>
            </div>
            <div class="wangEditor-container">
                <div class="wangEditor-txt" v-html='detail.content'></div>
            </div>
        </div>
        <transition name='scale-to-full'>
            <div class="show-photo-full-screen" v-if='showFullScreen'>
                <mt-swipe :auto='0' :showIndicators='false' :continuous='false' class='swipe-container'>
                    <mt-swipe-item v-for='(thumb, index) in detail.thumbs' :key='index'>
                        <img :src="thumb.url" alt="">
                    </mt-swipe-item>
                </mt-swipe>
                <div class="close-full-screen-btn" @click='showFullScreen=false'><i class="fa fa-close"></i></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                cid: '',
                cateid: '',
                count: 1,
                showFullScreen: false
            }
        },
        computed: {
            ...mapGetters({
                'detail': 'contentDetail'
            })
        },
        mounted () {
            this.cid = this.$route.query.cid
            this.cateid = this.$route.query.cateid
            this.$store.dispatch('getContentDetail', { cid: this.cid, cateid: this.cateid })
        },
        methods: {
            goBack () {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="stylus">
    .detail-header-container
        margin-top 20px
        padding 0 15px
        .content-title
            font-size 16px
            line-height 36px
            text-align center
        .content-time-author
            font-size 14px
            line-height 28px
            color #666
        .content-description
            font-size 14px
            line-height 1.75em
    .photo-detail-container
        margin-top 20px
        padding 0 15px
        .photo-detail-item
            position relative
            margin-bottom 10px
            .photo-detail-description
                position absolute
                left 0
                right 0
                bottom 0
                padding 0 10px
                line-height 36px
                font-size 14px
                color #fff
                background rgba(0,0,0,.6)
    .wangEditor-container
        border none
        a
            color #333
            text-decoration underline
    .show-photo-full-screen
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background #000
        z-index 999
        .swipe-container
            height 100vw
            margin-top calc(50vh - 50vw)
        .close-full-screen-btn
            position absolute
            left 50%
            bottom 60px
            width 40px
            border-radius 100%
            text-align center
            line-height 40px
            color #fff
            background rgba(255,255,255,.6)
            transform translateX(-50%)
    .scale-to-full-enter, .scale-to-full-leave-to
        transform scale(0)
        opacity 0
    .scale-to-full-enter-active, .scale-to-full-leave-active
        transition all 0.6s
</style>