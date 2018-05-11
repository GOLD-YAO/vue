<template>
    <div class="index-container">
        <site-header title='餐厅列表'></site-header>
        <ul class="shop-ul-container">
            <li class="shop-item" v-for='shop in shops'>
                <router-link class='shop-link clearfix' :to="{path: '/shop', query:{sid: shop.sid}}">
                    <div class="shop-thumb-cotainer fl">
                        <img :src="shop.thumb" alt="" class="shop-thumb">
                    </div>
                    <div class="shop-main-container fl">
                        <h3 class="shop-title single-ellipsis">{{shop.title}}</h3>
                        <p class="shop-description single-ellipsis">{{shop.description}}</p>
                    </div>
                    <div class="shop-more-info fr" v-if='!shop.isRest'><i class="fa fa-angle-right"></i></div>
                </router-link>
                <div class="shop-item-rest" v-if='shop.isRest'>
                    <div class="rest-thumb"><img src="../assets/images/rest.png" alt=""></div>
                </div>
            </li>
        </ul>
        <site-footer></site-footer>
    </div>
</template>

<script>
    import siteHeader from '../components/header'
    import siteFooter from '../components/footer'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: mapGetters({
            'shops': 'getShopLists'
        }),
        mounted () {
            this.initFoodShop()
        },
        methods: {
            ...mapActions([
                'initFoodShop'
            ])
        },
        components: {
            siteHeader,
            siteFooter
        }
    }
</script>

<style lang='stylus'>
    .index-container
        padding 50px 0
        background #eee
        background-clip content-box
        .shop-item
            position relative
            margin-bottom 1px
            background #fff
            .shop-link
                display block
                padding 10px
                color #333
                .shop-thumb-cotainer
                    width 70px
                    height 70px
                    margin-right 10px
                    border 1px solid #eee
                    .shop-thumb
                        width 70px
                        height 70px
                .shop-main-container
                    box-sizing border-box
                    max-width 60%
                    padding-right 10px            
                    .shop-title
                        padding 3px 0px
                        color #000
                        font-size 16px
                        font-weight normal
                    .shop-description
                        margin-top 20px
                        padding 3px 0
                        font-size 14px
                        color #666
                .shop-more-info
                    display flex
                    height 70px
                    padding 0 16px
                    align-items center
                    font-size 22px
            .shop-item-rest
                position absolute
                top 0
                left 0
                right 0
                bottom 0
                background rgba(255,255,255,.6)
                .rest-thumb
                    position absolute
                    right 15px
                    top 50%
                    width 60px
                    height 60px
                    transform translateY(-50%)
</style>