<template>
    <div class="food-pay-container" v-if='foods.length || payInfo'>
        <shop-header title='订单详情'>
            <span slot='left' @click='goBack()'><i class="fa fa-angle-left fa-2x"></i></span>
        </shop-header>
        <div class="food-pay-info" v-if='payInfo'>
            <div class="food-other-info">
                <div class="food-ware-info" v-if='payInfo.ware'>
                    <span>餐具数量</span><span>{{payInfo.ware.wareCount}}<i class="fa fa-angle-right fa-lg"></i></span>
                </div>
                <div class="food-remark-info">
                    <span>备注</span>
                    <div class="remark-right">
                        <p class="remark single-ellipsis">{{remarkShow}}</p>
                        <i class="fa fa-angle-right fa-lg"></i>
                    </div>
                </div>
            </div>
            <ul class="food-ul-container">
                <li class="food-item" v-for='food in payInfo.foods'>
                    <span class="food-item-name">{{food.name}}</span>
                    <div class="food-item-other">
                        <span class="food-item-count">x {{food.count}}</span>
                        <span class="food-item-price">￥ {{food.price}}</span>
                    </div>
                </li>
                <li class="ware-item" v-if='ware'><span>餐盒费</span><span>￥ {{payInfo.ware.wareCount * payInfo.ware.warePrice}}</span></li>
            </ul>
            <div class="fee-all">总计：<span class="fee-price">￥ {{payInfo.allPrice}}</span></div>
        </div>
        <div class="food-pay-info" v-else>
            <div class="food-other-info">
                <div class="food-ware-info" v-if='ware' @click='selectWare = true'>
                    <span>餐具数量</span><span>{{ware.wareCount}}<i class="fa fa-angle-right fa-lg"></i></span>
                </div>
                <div class="food-remark-info" @click='showRemark=true'>
                    <span>备注</span>
                    <div class="remark-right">
                        <p class="remark single-ellipsis">{{remarkShow}}</p>
                        <i class="fa fa-angle-right fa-lg"></i>
                    </div>
                </div>
            </div>
            <ul class="food-ul-container">
                <li class="food-item" v-for='food in foods'>
                    <span class="food-item-name">{{food.name}}</span>
                    <div class="food-item-other">
                        <span class="food-item-count">x {{food.count}}</span>
                        <span class="food-item-price">￥ {{food.price}}</span>
                    </div>
                </li>
                <li class="ware-item" v-if='ware'><span>餐盒费</span><span>￥ {{ware.wareCount * ware.warePrice}}</span></li>
            </ul>
            <div class="fee-all">总计：<span class="fee-price">￥ {{allPrice}}</span></div>
        </div>
        <div class="fee-all-pay-container">
            <span class="comfirm-btn" @click='pay()'>确认支付</span>
        </div>
        <shop-table-ware :type='0' v-if='selectWare' @close='selectWare = false'></shop-table-ware>
        <shop-remark v-if='showRemark' @close='showRemark=false' @addRemark='addRemark' :initValue='remark'></shop-remark>
    </div>
</template>

<script>
    import shopHeader from '../../components/header'
    import shopTableWare from '../../components/shopTableWare'
    import shopRemark from '../../components/remark'
    import Api from '../../api/index'
    import * as tips from '../../lib/tips'
    import { mapGetters } from 'vuex'
    import { Toast } from 'mint-ui'
    import { payUrl, foodRedirectUrlSuccess, foodRedirectUrlFail } from '../../lib/config'

    export default {
        data () {
            return {
                orderId: '',
                remark: '',
                payInfo: '',
                selectWare: false,
                showRemark: false,
                payOnce: false
            }
        },
        computed: {
            allPrice () {
                var foodPrice = this.foods.reduce(function (pre, curr) {
                    return pre + curr.price * curr.count
                }, 0)
                var warePrice = this.ware ? this.ware.wareCount * this.ware.warePrice : 0
                return foodPrice + warePrice
            },
            remarkShow () {
                return this.payInfo ? this.payInfo.remark : this.remark ? this.remark : '忌口，或者特殊要求'
            },
            ...mapGetters({
                'foods': 'getShopCart',
                'ware': 'getWareInfo',
                'tableNum': 'getTableNum',
                'sid': 'getSid'
            })
        },
        mounted () {
            this.orderId = this.$route.query.orderId
            if (!this.foods.length && !this.orderId) this.$router.push('/usercenter')
            if (this.orderId) this.initFoodPay()
        },
        methods: {
            initFoodPay () {
                Api.getFoodOrderDetail({ orderId: this.orderId })
                    .then((response) => {
                        this.payInfo = response.data
                    })
            },
            pay () {
                if (this.payOnce) return
                this.payOnce = true
                var data = {
                    orderId: this.orderId,
                    foods: this.foods,
                    ware: this.ware,
                    tableNum: this.tableNum,
                    remark: this.remark
                }
                this.$store.dispatch('deleteShopCart', { sid: this.sid, ware: 1 })
                Api.payFood(data)
                    .then((response) => {
                        if (response.data.success) {
                            if (response.data.jsParamters === 0) {
                                Toast({
                                    message: tips.PAY_SUCCESS,
                                    position: 'middle',
                                    duration: 1500
                                })
                                setTimeout(() => {
                                    this.$router.push({path: '/order_food', query: {tab: 1}})
                                }, 1500)
                                return
                            }
                            window.location.href = payUrl + '?jsParamters=' + encodeURI(JSON.stringify(response.data.jsParamters)) + '&successUrl=' + foodRedirectUrlSuccess + '&failUrl=' + foodRedirectUrlFail
                        } else {
                            Toast({
                                message: response.data.errorMsg,
                                position: 'middle',
                                duration: 1500
                            })
                        }
                    })
                    .catch(() => {
                        Toast({
                            message: tips.ERROR_SERVER,
                            position: 'middle',
                            duration: 1500
                        })
                    })
            },
            goBack () {
                this.$router.go(-1)
            },
            addRemark (value) {
                this.showRemark = false
                this.remark = value
            }
        },
        components: {
            shopHeader,
            shopTableWare,
            shopRemark
        }
    }
</script>

<style lang='stylus'>
    .food-pay-container
        padding-top 50px
        background #f3f3f3
        .food-other-info
            margin-bottom 16px
            padding 0 15px
            background #fff
            line-height 50px
            font-size 16px
            .food-ware-info, .food-remark-info
                display flex
                justify-content space-between
                padding-right 5px
                border-bottom 1px solid #ccc
                .fa
                    margin-left 10px
                    color #999
                    vertical-align -1px
            .food-remark-info
                border-bottom none
                .remark-right
                    display flex
                    justify-content space-between
                    align-items center
                    .remark
                        width 200px
                        text-align right
                        display inline-block
                        margin-right 10px
                        color #999
        .food-ul-container
            padding 0 15px
            background #fff
            .food-item
                display flex
                justify-content space-between
                line-height 36px
                font-size 14px
                .food-item-price
                    display inline-block
                    width 100px
                    text-align right
            .ware-item
                display flex
                justify-content space-between
                border-top 1px solid #ccc
                line-height 36px
                font-size 14px
        .fee-all
            margin-top 16px
            font-size 16px
            text-align center
            line-height 40px
            background #fff
            .fee-price
                color #fe2400
        .fee-all-pay-container
            padding-top 30px
            background #fff
            .comfirm-btn
                display block
                width 96%
                margin 0 auto
                line-height 40px
                text-align center
                background #11b111
                color #fff
                font-size 16px
                border-radius 6px
</style>