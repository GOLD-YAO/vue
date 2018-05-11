<template>
    <div class="shop-container">
        <shop-header :sellerInfo='shopInfo.seller' v-if='shopInfo'></shop-header>
        <shop-goods :goods='shopInfo.goods' :seller='shopInfo.seller' v-if='shopInfo'></shop-goods>
    </div>
</template>

<script>
    import shopHeader from '../components/shopHeader'
    import shopGoods from '../components/shopGoods'
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                sid: ''
            }
        },
        computed: {
            ...mapGetters({
                'shopInfo': 'getShopDetailInfo'
            })
        },
        mounted () {
            this.sid = this.$route.query.sid
            this.$store.dispatch('switchSid', this.sid)
                .then(() => {
                    this.$store.dispatch('initShopDetailInfo', { sid: this.sid })
                })
        },
        components: {
            shopHeader,
            shopGoods
        }
    }
</script>

<style lang='stylus'> 
</style>