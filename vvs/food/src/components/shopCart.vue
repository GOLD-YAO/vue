<template>
    <div>
        <div class="shopcart">
            <div class="content" @click="toggleList">
                <div class="content-left">
                    <div class="logo-wrapper">
                        <div class="logo" :class="{'highlight':totalCount>0}">
                            <div class="tableNum" v-if='tableNum'>{{tableNum}}<span class="units">桌</span></div>
                            <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}" v-else></i>
                        </div>
                        <div class="num" v-show="totalCount>0">{{totalCount}}</div>
                    </div>
                    <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
                </div>
                <div class="content-right" @click.stop.prevent="pay">
                    <div class="pay" :class='classPay'>去结算</div>
                </div>
            </div>
            <div class="ball-container">
                <div v-for="ball in balls">
                    <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                        <div class="ball" v-show="ball.show">
                            <div class="inner inner-hook"></div>
                        </div>
                    </transition>
                </div>
            </div>
            <transition name="fold">
                <div class="shopcart-list" v-show="listShow">
                    <div class="list-header clearfix">
                        <h1 class="title">购物车</h1>
                        <div class="table-num-container" v-if='this.seller.isNeedTableNum'>
                            <div class="table-final-num-edit" v-if='tableNum'>
                                <span class="table-final-num">{{tableNum}}号桌位</span>
                                <i class="fa fa-edit" @click='switchTable()'></i>
                            </div>
                            <input class='table-input' type="number" placeholder="请填写自己的桌号" v-else @change='selectTable($event)' ref='tableInput'>
                        </div>
                        <span class="empty" @click="empty">清空</span>
                    </div>
                    <div class="list-content" ref="listContent">
                        <ul>
                            <li class="food" v-for="food in shopcart">
                                <span class="name">{{food.name}}</span>
                                <div class="price">
                                    <span>￥{{food.price*food.count}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <shop-cart-controller @add='addFood' :food='food' :count='food.count'></shop-cart-controller>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
        <transition name="fade">
            <div class="list-mask" @click="hideList" v-show="listShow"></div>
        </transition>
        <shop-table-ware :type='1' :tableWarePrice='seller.tableWarePrice' v-if='selectWare' @close='selectWare = false'></shop-table-ware>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import shopCartController from './shopCartController'
    import shopTableWare from './shopTableWare'
    import { mapGetters } from 'vuex'
    import { Toast } from 'mint-ui'

    export default {
        data () {
            return {
                balls: [
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    }
                ],
                dropBalls: [],
                fold: true,
                selectWare: false
            }
        },
        computed: {
            totalPrice () {
                let total = 0
                this.shopcart.forEach((food) => {
                    total += food.price * food.count
                })
                return total
            },
            totalCount () {
                let count = 0
                this.shopcart.forEach((food) => {
                    count += food.count
                })
                return count
            },
            listShow () {
                if (!this.totalCount) {
                    this.fold = true
                    return false
                }
                let show = !this.fold
                if (show) {
                    this.$nextTick(() => {
                        if (!this.scroll) {
                            this.scroll = new BScroll(this.$refs.listContent, {
                                click: true
                            })
                        } else {
                            this.scroll.refresh()
                        }
                    })
                }
                return show
            },
            classPay () {
                return this.shopcart.length ? 'hasFood' : 'notFood'
            },
            ...mapGetters({
                'shopcart': 'getShopCart',
                'tableNum': 'getTableNum',
                'sid': 'getSid'
            })
        },
        props: {
            seller: {
                required: true,
                type: Object
            }
        },
        mounted () {
            /* 扫码进来的桌号自动填充 */
            var tableNum = this.$route.query.tableNum
            if (tableNum && this.seller.isNeedTableNum) {
                this.$store.dispatch('selectTable', tableNum)
            }
        },
        methods: {
            selectTable (e) {
                var tableNum = e.target.value
                this.$store.dispatch('selectTable', tableNum)
            },
            switchTable () {
                var beforeNum = this.tableNum
                this.$store.dispatch('selectTable', '')
                    .then(() => {
                        this.$refs.tableInput.value = beforeNum
                        this.$refs.tableInput.focus()
                    })
            },
            toggleList () {
                if (!this.totalCount) {
                    return
                }
                this.fold = !this.fold
            },
            showToggleList () {
                if (!this.totalCount) {
                    return
                }
                this.fold = false
                this.$nextTick(() => {
                    this.$refs.tableInput.focus()
                })
            },
            hideList () {
                this.fold = true
            },
            empty () {
                this.$store.dispatch('deleteShopCart', { sid: this.sid })
            },
            pay () {
                if (!this.shopcart.length) {
                    Toast({
                        message: '请选择要购买的食品',
                        position: 'middle',
                        duration: 1500
                    })
                    return
                }
                if (!this.tableNum && this.seller.isNeedTableNum) {
                    Toast({
                        message: '请填写桌号',
                        position: 'middle',
                        duration: 1500
                    })
                    this.showToggleList()
                    return
                }
                if (this.seller.tableWareFlag) {
                    this.selectWare = true
                } else {
                    this.$router.push('/payFood')
                }
            },
            addFood (target) {
                this.drop(target)
            },
            drop (el) {
                for (let i = 0; i < this.balls.length; i++) {
                    let ball = this.balls[i]
                    if (!ball.show) {
                        ball.show = true
                        ball.el = el
                        this.dropBalls.push(ball)
                        return
                    }
                }
            },
            beforeDrop (el) {
                let count = this.balls.length
                while (count--) {
                    let ball = this.balls[count]
                    if (ball.show) {
                        let rect = ball.el.getBoundingClientRect()
                        let x = rect.left - 32
                        let y = -(window.innerHeight - rect.top - 22)
                        el.style.display = ''
                        el.style.webkitTransform = `translate3d(0,${y}px,0)`
                        el.style.transform = `translate3d(0,${y}px,0)`
                        let inner = el.getElementsByClassName('inner-hook')[0]
                        inner.style.webkitTransform = `translate3d(${x}px,0,0)`
                        inner.style.transform = `translate3d(${x}px,0,0)`
                    }
                }
            },
            dropping (el, done) {
                /* eslint-disable no-unused-vars */
                let rf = el.offsetHeight
                this.$nextTick(() => {
                    el.style.webkitTransform = 'translate3d(0,0,0)'
                    el.style.transform = 'translate3d(0,0,0)'
                    let inner = el.getElementsByClassName('inner-hook')[0]
                    inner.style.webkitTransform = 'translate3d(0,0,0)'
                    inner.style.transform = 'translate3d(0,0,0)'
                    el.addEventListener('transitionend', done)
                })
            },
            afterDrop (el) {
                let ball = this.dropBalls.shift()
                if (ball) {
                    ball.show = false
                    el.style.display = 'none'
                }
            }
        },
        components: {
            shopCartController,
            shopTableWare
        }
    }
</script>

<style lang='stylus'>
    @import "../assets/stylus/mixin.styl"
    .shopcart
        position: fixed
        left: 0
        bottom: 0
        z-index: 50
        width: 100%
        height: 48px
        .content
            display: flex
            background: #141d27
            font-size: 0
            color: rgba(255, 255, 255, 0.4)
            .content-left
                flex: 1
                .logo-wrapper
                    display: inline-block
                    vertical-align: top
                    position: relative
                    top: -10px
                    margin: 0 12px
                    padding: 6px
                    width: 56px
                    height: 56px
                    box-sizing: border-box
                    border-radius: 50%
                    background: #141d27
                    .logo
                        position relative
                        width: 100%
                        height: 100%
                        border-radius: 50%
                        text-align: center
                        background: #2b343c
                        &.highlight
                            background: rgb(0, 160, 220)
                        .icon-shopping_cart
                            line-height: 44px
                            font-size: 24px
                            color: #80858a
                            &.highlight
                                color: #fff
                        .tableNum
                            position absolute
                            top 50%
                            left 50%
                            font-size 18px
                            font-weight 500
                            color #fff
                            transform translate(-50%,-50%)
                            .units
                                font-size 14px
                    .num
                        position: absolute
                        top: 0
                        right: 0
                        width: 24px
                        height: 16px
                        line-height: 16px
                        text-align: center
                        border-radius: 16px
                        font-size: 9px
                        font-weight: 700
                        color: #fff
                        background: rgb(240, 20, 20)
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
                .price
                    display: inline-block
                    vertical-align: top
                    margin-top: 12px
                    line-height: 24px
                    padding-right: 12px
                    box-sizing: border-box
                    font-size: 16px
                    font-weight: 700
                    &.highlight
                        color: #fff
            .content-right
                flex: 0 0 105px
                width: 105px
                .pay
                    height: 48px
                    line-height: 48px
                    text-align: center
                    font-size: 12px
                    font-weight: 700
                    color: #fff
                    &.notFood
                        background: #2b333b
                    &.hasFood
                        background: #00b43c
                        color: #fff
        .ball-container
            .ball
                position: fixed
                left: 32px
                bottom: 22px
                z-index: 200
                transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
                .inner
                    width: 16px
                    height: 16px
                    border-radius: 50%
                    background: rgb(0, 160, 220)
                    transition: all 0.4s linear
        .shopcart-list
            position: absolute
            left: 0
            top: 0
            z-index: -1
            width: 100%
            transform: translate3d(0, -100%, 0)
            &.fold-enter-active, &.fold-leave-active
                transition: all 0.5s
            &.fold-enter, &.fold-leave-active
                transform: translate3d(0, 0, 0)
            .list-header
                height: 40px
                line-height: 40px
                padding: 0 18px
                background: #f3f5f7
                border-bottom: 1px solid rgba(7, 17, 27, 0.1)
                .title
                    float: left
                    font-size: 14px
                    color: rgb(7, 17, 27)
                .table-num-container
                    float: left
                    margin-left 20px
                    font-size 14px
                    color rgb(0, 160, 220)
                    .table-input
                        border none
                        background #f3f5f7
                    .fa
                        font-size 16px
                        vertical-align middle
                        margin-left 10px
                        color #666
                .empty
                    float: right
                    font-size: 12px
                    color: rgb(0, 160, 220)
            .list-content
                padding: 0 18px
                max-height: 217px
                overflow: hidden
                background: #fff
                .food
                    position: relative
                    padding: 12px 0
                    box-sizing: border-box
                    border-1px(rgba(7, 17, 27, 0.1))
                    .name
                        line-height: 24px
                        font-size: 14px
                        color: rgb(7, 17, 27)
                    .price
                        position: absolute
                        right: 90px
                        bottom: 12px
                        line-height: 24px
                        font-size: 14px
                        font-weight: 700
                        color: rgb(240, 20, 20)
                    .cartcontrol-wrapper
                        position: absolute
                        right: 0
                        bottom: 6px
    .list-mask
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 40
        backdrop-filter: blur(10px)
        opacity: 1
        background: rgba(7, 17, 27, 0.6)
        &.fade-enter-active, &.fade-leave-active
            transition: all 0.5s
        &.fade-enter, &.fade-leave-active
            opacity: 0
            background: rgba(7, 17, 27, 0)
</style>