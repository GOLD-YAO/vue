<template>
    <div id="menu" ref='menu' class="edge-left">
        <nav class="menu">
            <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
            <label class="menu-open-button" for="menu-open">
                <span class="hamburger hamburger-1"></span>
                <span class="hamburger hamburger-2"></span>
                <span class="hamburger hamburger-3"></span>
            </label>
            <router-link :to="{path: '/usercenter'}" class='menu-item'><i class="fa fa-user fa-lg"></i></router-link>
            <!-- <a :href="foodUrl" class='menu-item'><i class="fa fa-cutlery fa-lg"></i></a> -->
            <a :href="shopUrl" class='menu-item'><i class="fa fa-shopping-bag fa-lg"></i></a>
            <router-link :to="{path: '/'}" class='menu-item'><i class="fa fa-home fa-lg"></i></i></router-link> 
        </nav>
    </div>
</template>

<script>
    import Intertia from '../lib/inertia'
    import { shopUrl, foodUrl } from '../lib/config'

    export default {
        data () {
            return {
                ele: '',
                shopUrl: shopUrl,
                foodUrl: foodUrl
            }
        },
        mounted () {
            if (window.localStorage.Inertia_menu) {
                let ele = document.getElementById('menu')
                let strStoreDistance = window.localStorage['Inertia_' + ele.id].split(',')
                if (strStoreDistance[0] > (window.innerWidth / 2)) {
                    ele.classList.remove('edge-left')
                    ele.classList.add('edge-right')
                } else {
                    ele.classList.remove('edge-right')
                    ele.classList.add('edge-left')
                }
            }
            this.ele = this.$refs.menu
            Intertia(this.ele)
        },
        methods: {
            openMenu () {
                let checkbox = this.ele.querySelectorAll("input[type='checkbox']")[0]
                if (!checkbox.classList.contains('no-move')) {
                    checkbox.checked = !checkbox.checked
                }
            }
        }
    }
</script>

<style lang='stylus'>
    @import "../assets/css/global"
    $hamburger-spacing = 9px
    .ball
        background $globalColor
        border-radius 50%
        width 50px
        height 50px
        position absolute
        color white
        text-align center
        line-height 50px
        transform translate3d(0,0,0)
        transition transform ease-out 200ms
        z-index 9
        .fa
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
    #menu 
        position fixed
        width 50px
        height 50px
        left 23px
        top 80%
        font-size 20px
        color #fff
        margin-left -22px
        margin-top -22px
        z-index 999
        .menu
            width 50px
            height 50px
            .menu-open
                display none
            .menu-open:checked + .menu-open-button
                transition-timing-function linear
                transition-duration 200ms
                transform scale(0.8,0.8) translate3d(0,0,0)
                .hamburger-1
                    transform translate3d(0,0,0) rotate(45deg)
                .hamburger-2
                    transform translate3d(0,0,0) scale(0.1,1)
                .hamburger-3
                    transform translate3d(0,0,0) rotate(-45deg)
            .menu-open-button
                @extend .ball
                z-index 100
                transition-timing-function cubic-bezier(0.175, 0.885, 0.320, 1.275)
                transition-duration 400ms
                .hamburger
                    width 28px
                    height 3px
                    background #fff
                    display block
                    position absolute
                    top 50%
                    left 50%
                    margin-left -14px
                    margin-top -1.5px
                    transition tranform 200ms
                    &.hamburger-1
                        transform translate3d(0,- $hamburger-spacing,0)
                    &.hamburger-2
                        transform translate3d(0,0,0)
                    &.hamburger-3
                        transform translate3d(0,$hamburger-spacing,0)
            .menu-item
                @extend .ball
                for nth in $menu-items
                    &:nth-child({nth+2})
                        transition-duration: 180ms
            .menu-open:checked ~ .menu-item
                transition-timing-function cubic-bezier(0.935, 0, 0.34, 1.33)
                &:nth-child(3)
                    transition-duration 160ms
                &:nth-child(4)
                    transition-duration 240ms
                &:nth-child(5)
                    transition-duration 320ms
                &:nth-child(6)
                    transition-duration 400ms
                &:nth-child(7)
                    transition-duration 480ms
                &:nth-child(8)
                    transition-duration 560ms
        &.edge-left
            .menu-open:checked ~ .menu-item
                &:nth-child(3)
                    transform translate3d(7.98667px, 79.60033px, 0)
                &:nth-child(4)
                    transform translate3d(70.55662px, 37.70627px, 0)
                &:nth-child(5)
                    transform translate3d(70.61659px, -37.59385px, 0)
                &:nth-child(6)
                    transform translate3d(8.11344px, -79.58751px, 0)
        &.edge-right
            .menu-open:checked ~ .menu-item
                &:nth-child(3)
                    transform translate3d(-7.98667px, 79.60033px, 0)
                &:nth-child(4)
                    transform translate3d(-70.55662px, 37.70627px, 0)
                &:nth-child(5)
                    transform translate3d(-70.61659px, -37.59385px, 0)
                &:nth-child(6)
                    transform translate3d(-8.11344px, -79.58751px, 0)
</style>