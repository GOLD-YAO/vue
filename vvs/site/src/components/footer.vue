<template>
    <div class="footer white-style">
        <ul class="footer-nav-container">
            <li class="footer-nav-item">
                <router-link :to="{path: '/'}" class='nav-item-link'>
                    <i class="fa fa-home fa-2x"></i><p class="nav-item-title">首页</p>
                </router-link>
            </li>
            <li class="footer-nav-item">
                <a :href="shopUrl" class="nav-item-link">
                    <i class="fa fa-shopping-bag fa-2x"></i><p class="nav-item-title">商城</p>
                </a>
            </li>
            <!-- <li class="footer-nav-item">
                <a :href="foodUrl" class="nav-item-link">
                    <i class="fa fa-cutlery fa-2x"></i><p class="nav-item-title">餐饮</p>
                </a>
            </li> -->
            <li class="footer-nav-item">
                <router-link :to="{path: '/usercenter'}" class='nav-item-link'>
                    <i class="fa fa-user fa-2x"></i><p class="nav-item-title">个人中心</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { shopUrl, foodUrl } from '../lib/config'
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                shopUrl: shopUrl,
                foodUrl: foodUrl
            }
        },
        props: {
            type: Number,
            required: true
        },
        mounted () {
            document.getElementsByClassName('nav-item-link')[this.type].classList.add('active')
        },
        computed: mapGetters({
            'count': 'shopCartCount'
        })
    }
</script>

<style lang="stylus">
    @import "../assets/css/global"
    .footer
        position fixed
        left 0
        right 0
        bottom 0
        z-index 10
        height 50px
        background #333
        .footer-nav-container
            display flex
            text-align center
            .footer-nav-item
                flex 1
                .nav-item-link
                    display block
                    width 100%
                    height 100%
                    color #fff
                    &.active .fa
                        color $globalColor
                .fa
                    display inline-block
                    margin-top 5px
                .nav-item-title
                    margin 0
                    margin-top 3px
        &.white-style
            background rgba(255,255,255,.9)
            border-top 1px solid #eee
            .footer-nav-container .nav-item-link
                color #777
</style>