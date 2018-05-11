<template>
    <transition name="move">
        <div v-if='showFlag' class="food" ref="food">
            <div class="food-content">
                <div class="image-header">
                    <img :src="food.icon">
                    <div class="back" @click="hide">
                        <i class="icon-arrow_lift"></i>
                    </div>
                </div>
                <div class="content">
                    <h1 class="title">{{food.name}}</h1>
                    <p class="description">{{food.description}}</p>
                    <div class="price">
                        <span class="now">￥{{food.price}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                        <shop-cart-controller @add="addFood" :food='food' :count='count'></shop-cart-controller>
                    </div>
                    <transition name="fade">
                        <div @click.stop.prevent="addFirst" class="buy" v-show="count===0">加入购物车</div>
                    </transition>
                </div>
            </div>
      </div>
    </transition>
</template>

<script>
    import shopCartController from './shopCartController'
    import { mapGetters } from 'vuex'
    import { assignObj } from '../lib/util'

    export default {
        data () {
            return {
                showFlag: false
            }
        },
        props: {
            food: {
                required: true,
                type: Object
            }
        },
        computed: {
            count () {
                var foodCount
                this.shopcart.forEach((food) => {
                    if (food.id === this.food.id) foodCount = food.count
                })
                return !foodCount ? 0 : foodCount
            },
            ...mapGetters({
                'shopcart': 'getShopCart'
            })
        },
        methods: {
            show () {
                this.showFlag = true
            },
            hide () {
                this.showFlag = false
            },
            addFood (target) {
                this.$emit('add', target)
            },
            addFirst (event) {
                var data = {
                    id: '',
                    name: '',
                    price: ''
                }
                var info = assignObj(data, this.food)
                info.count = 1
                this.$store.dispatch('switchShopCart', info)
                    .then(() => {
                        this.$emit('add', event.target)
                    })
                    .catch(() => {
                        this.$router.push('/login')
                    })
            }
        },
        components: {
            shopCartController
        }
    }
</script>

<style lang='stylus'>
    @import "../assets/stylus/mixin.styl"

    .food
        position: fixed
        left: 0
        top: 0
        bottom: 48px
        z-index: 30
        width: 100%
        background: #fff
        transform: translate3d(0, 0, 0)
        &.move-enter-active, &.move-leave-active
            transition: all 0.2s linear
        &.move-enter, &.move-leave-active
            transform: translate3d(100%, 0, 0)
        .image-header
            position: relative
            width: 100%
            height: 0
            padding-top: 100%
            img
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
            .back
                position: absolute
                top: 10px
                left: 0
                .icon-arrow_lift
                    display: block
                    padding: 10px
                    font-size: 20px
                    color: #fff
        .content
            position: relative
            padding: 18px
            .title
                line-height: 14px
                margin-bottom: 8px
                font-size: 14px
                font-weight: 700
                color: rgb(7, 17, 27)
            .price
                font-weight: 700
                line-height: 24px
                .now
                    margin-right: 8px
                    font-size: 14px
                    color: rgb(240, 20, 20)
            .cartcontrol-wrapper
                position: absolute
                right: 12px
                bottom: 12px
            .buy
                position: absolute
                right: 18px
                bottom: 18px
                z-index: 10
                height: 24px
                line-height: 24px
                padding: 0 12px
                box-sizing: border-box
                border-radius: 12px
                font-size: 10px
                color: #fff
                background: rgb(0, 160, 220)
                opacity: 1
                &.fade-enter-active, &.fade-leave-active
                    transition: all 0.2s
                &.fade-enter, &.fade-leave-active
                    opacity: 0
                    z-index: -1
</style>