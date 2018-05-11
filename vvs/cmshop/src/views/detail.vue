<template>
    <div class="product-detail-container">
        <shop-header title='商品详情'>
            <span slot='left' @click='goBack()'><i class="fa fa-angle-left fa-2x"></i></span>
        </shop-header>
        <div class="detail-main-container">
            <div class="detail-info-container">
                <div class="detail-info-thumb" v-if='detail.thumb'>
                    <a class="block" :href="detail.thumb.linkUrl" v-if='detail.thumb.linkUrl'>
                        <img class='detail-thumb' :src="detail.thumb.thumbUrl" alt="">
                    </a>
                    <img class='detail-thumb' :src="detail.thumb.thumbUrl" alt="" v-else>
                </div>
                <div class="detail-info-msg">
                    <h3 class="info-msg-title">{{detail.title}}</h3>
                    <div class="detail-row">
                        <span class="detail-row-title">价格：</span><span class="detail-row-content price">￥ {{detail.price}}</span>
                    </div>
                    <div class="detail-row" v-for='(value, key) in detail.parameters'>
                        <span class="detail-row-title">{{key}}：</span><span class="detail-row-content">{{value}}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-row-title">购买数量：</span>
                        <div class="opration-container">
                            <input class='pro-num' type="num" :value="count" @blur='swtichCartNum($event)'>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="detail-content-title">产品内容</h3>
            <div class="wangEditor-container">
                <div class="wangEditor-txt" v-html='detail.content'></div>
            </div>
        </div>
        <div class="add-product-to-cart"@click='addCart()'>加入购物车</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { isPositiveNum, assignObj } from '../lib/util'
    import { Toast, MessageBox } from 'mint-ui'
    import * as tips from '../lib/tips'
    import shopHeader from '../components/header'

    export default {
        data () {
            return {
                pid: '',
                count: 1
            }
        },
        computed: {
            ...mapGetters({
                'detail': 'productDetail',
                'userinfo': 'userCenterInfo'
            })
        },
        mounted () {
            this.pid = this.$route.query.pid
            this.$store.dispatch('getProductDetail', { pid: this.pid })
        },
        methods: {
            swtichCartNum (e) {
                var target = e.target
                if (!isPositiveNum(target.value)) {
                    Toast({
                        message: tips.NOT_POSITIVE_NUMBER,
                        position: 'middle',
                        duration: 1500
                    })
                    target.value = this.count
                    return
                }
                this.count = target.value
            },
            addCart () {
                if (!this.userinfo) {
                    this.$router.push('/login')
                    return
                }
                var data = {
                    id: '',
                    title: '',
                    description: '',
                    price: '',
                    count: +this.count
                }
                var product = assignObj(data, this.detail)
                product.thumb = this.detail.thumb.thumbUrl
                this.$store.dispatch('switchShopCart', product)
                    .then(() => {
                        MessageBox.alert('已加入购物车!')
                            .then(() => {
                                this.$router.push('/shopcart')
                            })
                    })
            },
            goBack () {
                this.$router.go(-1)
            }
        },
        components: {
            shopHeader
        }
    }
</script>

<style lang="stylus">
    @import "../assets/css/global"
    .product-detail-container
        padding 50px 0
        .detail-main-container
            padding-bottom 40px
            .detail-category
                padding 10px 15px
                font-size 16px
                color #000
                background #f0f2f5
            .detail-info-container
                padding 0 10px
                margin-top 10px
                .detail-info-thumb
                    width calc(100vw - 20px)
                    height calc(100vw - 20px)
                    .block
                        height 100%
                    .detail-thumb
                        width 100%
                        height 100%
                .detail-info-msg
                    margin-top 10px
                    .info-msg-title
                        padding 5px 0
                        font-size 16px
                        color #000
                    .detail-row
                        padding 8px 0
                        font-size 14px
                        color #000
                        .detail-row-title
                            display inline-block
                            min-width 80px
                        .detail-row-content
                            color #333
                            &.price
                                color $globalFontColor
                        .opration-container
                            display inline-block
                            margin-right 8px
                            vertical-align middle
                            .opration-btn
                                display inline-block
                                width 26px
                                height 26px
                                vertical-align middle
                                &.multi
                                    margin-right 3px
                                &.plus
                                    margin-left 3px
                            input
                                width 36px
                                height 18px
                                border-bottom 1px solid #eee
                                border-radius 3px
                                text-align center
            .detail-content-title
                margin-top 10px
                padding-left 15px
                line-height 40px
                color #000
                background #eee
            .wangEditor-container
                border none
        .add-product-to-cart
            position fixed
            left 0
            right 0
            bottom 0px
            z-index 10
            text-align center
            line-height 48px
            color #fff
            font-size 18px
            background $globalColor
</style>