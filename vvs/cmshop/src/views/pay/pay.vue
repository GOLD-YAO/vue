<template>
    <div class="product_pay_container" v-if='payInfo || selected.length'>
        <shop-header title='支付产品详情'>
            <span slot='left' @click='goBack()'><i class="fa fa-angle-left fa-2x"></i></span>
        </shop-header>
        <ul class='product_pay_ul' v-if='payInfo'>
            <li class="product_pay_item" v-for='product in payInfo.products'>
                <div class="product_title">{{product.title}}</div>
                <div class="product_count_price">
                    <span class="product_price flex-info">￥ {{product.price}}</span>
                    <span class="product_count flex-info">x {{product.count}}</span>
                </div>
            </li>
        </ul>
        <ul class='product_pay_ul' v-else>
            <li class="product_pay_item" v-for='product in selected'>
                <div class="product_title">{{product.title}}</div>
                <div class="product_count_price">
                    <span class="product_price flex-info">￥ {{product.price}}</span>
                    <span class="product_count flex-info">x {{product.count}}</span>
                </div>
            </li>
        </ul>
        <div class="pay_money_all" v-if='payInfo'><span class="pay_all_tip">总价：</span>￥ {{payInfo.allPrice.toFixed(2)}}</div>
        <div class="pay_money_all" v-else><span class="pay_all_tip">总价：</span>￥ {{allPrice.toFixed(2)}}</div>
        <div class="maky-pay-container"><span class="make_pay_btn" @click='pay()'>微信支付</span></div>
    </div>
</template>

<script>
    import Api from '../../api/index'
    import * as tips from '../../lib/tips'
    import { payUrl, payRedirectUrlSuccess, payRedirectUrlFail } from '../../lib/config'
    import { mapGetters } from 'vuex'
    import shopHeader from '../../components/header'
    import { Indicator, Toast } from 'mint-ui'

    export default {
        data () {
            return {
                orderId: '',
                payInfo: '',
                jsParamters: '',
                payOnce: false
            }
        },
        computed: {
            allPrice () {
                return this.selected.reduce(function (pre, curr) {
                    return pre + curr.price * curr.count
                }, 0)
            },
            ids () {
                return this.selected.map(function (item) {
                    return item.id
                })
            },
            ...mapGetters({
                'selected': 'getProductIndex'
            })
        },
        mounted () {
            this.orderId = this.$route.query.orderId
            if (!this.selected.length && !this.orderId) this.$router.push('/shopcart')
            if (this.orderId) this.initPayOrder()
        },
        methods: {
            /* 从订单号进来 */
            initPayOrder () {
                Api.getOrderDetail({ orderId: this.orderId, verification: false })
                    .then((response) => {
                        if (response.data.success) {
                            this.payInfo = response.data
                        } else {
                            this.$router.push('/usercenter')
                        }
                    })
            },
            pay () {
                if (this.payOnce) return
                this.payOnce = true
                Indicator.open()
                var products = this.payInfo ? this.payInfo.products : this.selected
                var payInfo = { products }
                payInfo.orderId = this.orderId
                if (this.ids.length) {
                    this.$store.dispatch('deleteShopCart', this.ids)
                    this.$store.dispatch('selectProductIndex', [])
                }
                Api.getPayJsParameters({ payInfo })
                    .then((response) => {
                        Indicator.close()
                        if (response.data.success) {
                            if (response.data.jsParamters === 0) {
                                Toast({
                                    message: tips.PAY_SUCCESS,
                                    position: 'middle',
                                    duration: 1500
                                })
                                setTimeout(() => {
                                    this.$router.push({path: '/order', query: {tab: 2}})
                                }, 1500)
                                return
                            }
                            window.location.href = payUrl + '?jsParamters=' + encodeURI(JSON.stringify(response.data.jsParamters)) + '&successUrl=' + payRedirectUrlSuccess + '&failUrl=' + payRedirectUrlFail
                        } else {
                            Toast({
                                message: response.data.errorMsg,
                                position: 'middle',
                                duration: 1500
                            })
                        }
                    })
                    .catch(() => {
                        Indicator.close()
                        Toast({
                            message: tips.ERROR_SERVER,
                            position: 'middle',
                            duration: 1500
                        })
                    })
            },
            goBack () {
                this.$router.go(-1)
            }
        },
        beforeRouteLeave (to, from, next) {
            to.query.type = true
            next()
        },
        components: {
            shopHeader
        }
    }
</script>

<style lang='stylus'>
    @import "../../assets/css/global"
    .product_pay_container
        padding-top 50px
        background #eee
        .product_pay_ul
            background #fff
            .product_pay_item
                display flex
                justify-content space-between
                align-items center
                height 50px
                padding 10px
                border-bottom 1px solid #f5f5f5
                .product_title
                    font-size 14px
                    color #000
                .product_count_price
                    display flex
                    flex-wrap wrap
                    font-size 14px
                    .flex-info
                        flex-basis 100%
                        text-align right
                        &.product_price
                            margin-bottom 10px
                            color $globalFontColor
        .pay_money_all
            margin-top 10px
            text-align center
            color $globalFontColor
            font-size 14px
            line-height 60px
            background #fff
            .pay_all_tip
                color #000
        .maky-pay-container
            background #fff
            .make_pay_btn
                display block
                width 96%
                margin 0 auto
                border-radius 4px
                line-height 46px
                text-align center
                color #fff
                font-size 18px
                background $globalColor
</style>