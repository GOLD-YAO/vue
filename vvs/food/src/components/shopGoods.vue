<template>
    <div class="shop-container">
        <div class="shop-goods-container">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul class="menu-ul-container">
                    <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)" ref="menuList">
                        <span class="text border-1px">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodsWrapper">
                <ul class="food-ul-container">
                    <li v-for="item in goods" class="food-list" ref="foodList">
                        <h1 class="title">{{item.name}}</h1>
                        <ul>
                            <li v-for="food in item.foods" @click="selectFood(food,$event)" class="food-item border-1px">
                                <div class="icon">
                                    <img width="57" height="57" :src="food.icon">
                                </div>
                                <div class="content">
                                    <h2 class="name">{{food.name}}</h2>
                                    <p class="desc">{{food.description}}</p>
                                    <div class="price">
                                        <span class="now">￥{{food.price}}</span>
                                    </div>
                                    <div class="cartcontrol-wrapper">
                                        <shop-cart-controller @add='addFood' :food='food' :count="getCartCount(food.id)"></shop-cart-controller>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <shop-cart ref="shopcart" :seller='seller'></shop-cart>
        </div>
        <shop-food @add='addFood' ref="food" :food='selectedFood'></shop-food>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import shopCartController from './shopCartController'
    import shopFood from './shopFood'
    import shopCart from './shopCart'
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                listHeight: [],
                scrollY: 0,
                selectedFood: {},
                index: ''
            }
        },
        props: {
            goods: {
                required: true,
                type: Array
            },
            seller: {
                required: true,
                type: Object
            }
        },
        computed: {
            currentIndex () {
                for (let i = 0; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i]
                    let height2 = this.listHeight[i + 1]
                    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                        this._followScroll(i)
                        return i
                    }
                }
                return 0
            },
            foodIds () {
                return this.shopcart.map(function (item) {
                    return item.id
                })
            },
            ...mapGetters({
                'shopcart': 'getShopCart'
            })
        },
        mounted () {
            this.$nextTick(() => {
                this._initScroll()
                this._calculateHeight()
            })
        },
        methods: {
            _initScroll () {
                this.meunScroll = new BScroll(this.$refs.menuWrapper, {
                    click: true
                })
                this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                    click: true,
                    probeType: 3
                })
                this.foodsScroll.on('scroll', (pos) => {
                    /* 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮） */
                    if (pos.y <= 0) {
                        this.scrollY = Math.abs(Math.round(pos.y))
                    }
                })
                this.foodsScroll.on('scrollEnd', (pos) => {
                    var index = this.index
                    if (index && Math.abs(pos.y) < this.listHeight[index]) {
                        this.scrollY = this.listHeight[index]
                    }
                    this.index = ''
                })
            },
            _calculateHeight () {
                let foodList = this.$refs.foodList
                let height = 0
                this.listHeight.push(height)
                for (let i = 0; i < foodList.length; i++) {
                    let item = foodList[i]
                    height += item.clientHeight
                    this.listHeight.push(height)
                }
            },
            _followScroll (index) {
                let menuList = this.$refs.menuList
                let el = menuList[index]
                this.meunScroll.scrollToElement(el, 300, 0, -100)
            },
            _drop (target) {
                this.$nextTick(() => {
                    this.$refs.shopcart.drop(target)
                })
            },
            selectMenu (index, event) {
                if (!event._constructed) {
                    return
                }
                let foodList = this.$refs.foodList
                let el = foodList[index]
                this.index = index
                this.foodsScroll.scrollToElement(el, 600)
            },
            selectFood (food, event) {
                if (!event._constructed) {
                    return
                }
                this.selectedFood = food
                this.$refs.food.show()
            },
            getCartCount (id) {
                var index = this.foodIds.indexOf(id)
                return index === -1 ? 0 : this.shopcart[index].count
            },
            addFood (target) {
                this._drop(target)
            }
        },
        components: {
            shopCartController,
            shopFood,
            shopCart
        }
    }
</script>

<style lang='stylus'>
    @import "../assets/stylus/mixin.styl"

    .shop-goods-container
        display flex
        position absolute
        top 106px
        bottom 48px
        left 0
        right 0
        overflow hidden
        .menu-wrapper
            flex 0 0 80px
            width 80px
            background #f3f5f7
            .menu-item
                display: table
                height: 54px
                width: 56px
                padding: 0 12px
                line-height: 14px
                &.current
                    position: relative
                    z-index: 10
                    margin-top: -1px
                    background: #fff
                    font-weight: 700
                    .text
                        border-none()
                .text
                    display: table-cell
                    width: 56px
                    vertical-align: middle
                    border-1px(rgba(7, 17, 27, 0.1))
                    font-size: 12px
        .foods-wrapper
            flex 1
            .title
                padding-left: 14px
                height: 26px
                line-height: 26px
                border-left: 2px solid #d9dde1
                font-size: 12px
                color: rgb(147, 153, 159)
                background: #f3f5f7
            .food-item
                display: flex
                margin: 18px
                padding-bottom: 18px
                border-1px(rgba(7, 17, 27, 0.1))
                &:last-child
                    border-none()
                    margin-bottom: 0
                .icon
                    flex: 0 0 57px
                    margin-right: 10px
                .content
                    flex 1
                    .name
                        margin: 2px 0 8px 0
                        height: 14px
                        line-height: 14px
                        font-size: 14px
                        color: rgb(7, 17, 27)
                    .desc
                        line-height: 12px
                        margin-bottom: 8px
                        font-size: 10px
                        color: rgb(147, 153, 159)
                    .price
                        font-weight: 700
                        line-height: 24px
                        .now
                            margin-right: 8px
                            font-size: 14px
                            color: rgb(240, 20, 20)
                    .cartcontrol-wrapper
                        position: absolute
                        right: 0
                        bottom: 12px
</style>