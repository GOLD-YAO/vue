<template>
    <div class="product-list-modules">
        <div class="no-product-in-type" v-if='!products.length && loaded'>
            <span><i class="fa fa-shopping-bag fa-3x"></i></span>
            <p class="no-product-tips">目前还没有商品~</p>
        </div>
        <ul class="product-list-container"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            infinite-scroll-immediate-check="false"
            v-else
        >
            <li class="product-item" v-for='(product, index) in products'>
                <router-link class='product-info-container clearfix' :to="{path: '/detail', query: {pid: product.id}}">
                    <div class="info-thumb-cotainer fl">
                        <img :src="product.thumb" alt="" class="info-thumb">
                    </div>
                    <div class="info-main-container fl">
                        <h3 class="info-title single-ellipsis">{{product.title}}</h3>
                        <p class="info-description single-ellipsis">{{product.description}}</p>
                        <p class="info-other clearfix">
                            <span class="price fl">价格：{{product.price}}</span>
                            <span class="user fr">
                                <i class="fa fa-user fa-x" style="color:#999"></i>使用人数：{{product.userNum}}
                            </span>
                        </p>
                    </div>
                </router-link>
                <div class="add-cart-container">
                    <span class="multi-btn opration-btn" v-if='cartIds.indexOf(product.id) !== -1' @click='switchCart($event)' data-switch='-1' :data-index="index"><img class='opration-icon' src="../assets/images/multi.png" alt=""></span>
                    <span class="productnum-in-cart" v-if='cartIds.indexOf(product.id) !== -1'>{{getCartCount(cartIds.indexOf(product.id))}}</span>
                    <span class="add-btn opration-btn" @click='switchCart($event)' data-switch='1' :data-index="index" :data-thumb='product.thumb'><img class='opration-icon' src="../assets/images/plus.png" alt=""></span>
                </div>
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
    import { assignObj } from '../lib/util'
    import '../assets/js/jquery'
    import '../assets/js/fly'

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
            cartIds () {
                return this.shopCart.map(function (item) {
                    return item.id
                })
            },
            offset () {
                return this.products.length
            },
            ...mapGetters({
                'products': 'getProductList',
                'hasMore': 'hasMoreProduct',
                'shopCart': 'shopCart',
                'userinfo': 'userCenterInfo'
            })
        },
        mounted () {
            this.type = this.$route.query.type
            this.initData()
        },
        methods: {
            initData () {
                this.query.offset = 0
                this.$store.dispatch('initProductList', this.query)
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
            },
            getCartCount (value) {
                return this.shopCart[value].count
            },
            switchCart (e) {
                if (!this.userinfo) {
                    this.$router.push('/login')
                    return
                }
                var target = e.target
                if (target.classList.contains('opration-icon')) target = target.parentNode
                var product = this.products[+target.getAttribute('data-index')]
                var count = +target.getAttribute('data-switch')
                var data = {
                    id: '',
                    title: '',
                    description: '',
                    thumb: '',
                    price: '',
                    count: +target.getAttribute('data-switch')
                }
                var result = assignObj(data, product)
                this.$store.dispatch('switchShopCart', result)
                    .then(() => {
                        if (count === 1) {
                            this.addAnimation(e, target)
                        }
                    })
            },
            addAnimation (e, target) {
                var flyer = window.$("<img class='cart-add-animation'/>").attr('src', target.getAttribute('data-thumb'))
                flyer.fly({
                    start: {
                        left: e.pageX,
                        top: (e.pageY - window.$('body').scrollTop())
                    },
                    end: {
                        left: 3 * window.innerWidth / 4 - 30,
                        top: window.innerHeight - 40,
                        width: 0,
                        height: 0
                    },
                    onEnd: function () {
                        this.destory()
                    }
                })
            }
        }
    }
</script>

<style lang="stylus">
    .product-list-container
        background #eee
        .product-item
            position relative
            height 80px
            padding 10px 0px
            margin-bottom 1px
            background #fff
            .product-info-container
                display block
                height 100%
                .info-thumb-cotainer
                    margin 0 10px 0
                    .info-thumb
                        width 80px
                        height 80px
                .info-main-container
                    width 50%
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
                        font-size 12px
                        .price
                            color #fe2400
                            font-weight blod
                        .user
                            color #333
                            .fa
                                margin-right 5px
            .add-cart-container
                position absolute
                top 50%
                right 3%
                transform translateY(-50%)
                .productnum-in-cart
                    margin 0 6px
                    font-size 14px
                .opration-btn
                    box-sizing border-box
                    display inline-block
                    width 26px
                    height 26px
                    background transparent
                    vertical-align middle
                    overflow hidden
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
    .no-product-in-type
        padding-top 40px
        text-align center
        font-size 16px
        color #999
        background #fff
        .no-product-tips
            margin-top 10px
    .cart-add-animation
        position fixed
        display block
        width 60px
        height 60px
        border-radius 100%
        z-index 9999
</style>