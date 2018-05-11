<template>
    <div class="shop-table-ware-container">
        <div class="table-ware-selected-container">
            <div class="table-ware-header clearfix">
                <p class="table-ware-select-tip fl">选择需要的餐具数量</p>
                <span class="table-ware-close fr" @click='closeWare()'><i class="fa fa-close"></i></span>
            </div>
            <div class="table-ware-middle">
                <div class="table-ware-need-or-not">
                    <label class="checkbox-container" @click='select()'>
                        <input type="checkbox" class='checkbox-input' ref='checkbox'>
                        <span class="checkbox-core"></span>
                    </label>
                    <span class="checkbox-tip">需要湿巾筷子包</span>
                </div>
                <p class="table-ware-price-tip">提示：湿巾筷子包每人份收费{{price}}元</p>
            </div>
            <div class="table-ware-bottom">
                <ul class="clearfix" ref='wareContainer'>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(1)'>1人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(2)'>2人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(3)'>3人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(4)'>4人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(5)'>5人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(6)'>6人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(7)'>7人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(8)'>8人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(9)'>9人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(10)'>10人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(11)'>11人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(12)'>12人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(13)'>13人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(14)'>14人</li>
                    <li class="ware-num-item fl" :class='classType' @click='selectWare(15)'>15人</li>
                </ul>
            </div>
            <div class="comfir-ware-btn" @click='confirm()'>确定</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                selected: false,
                wareNum: 0
            }
        },
        computed: {
            classType () {
                return this.selected ? 'need' : 'no-need'
            },
            price () {
                return this.tableWarePrice ? this.tableWarePrice : this.ware.warePrice
            },
            ...mapGetters({
                'ware': 'getWareInfo'
            })
        },
        props: {
            tableWarePrice: {
                type: Number
            },
            type: {
                required: true,
                type: Number
            }
        },
        mounted () {
            if (this.ware) this.initWare()
        },
        methods: {
            initWare () {
                var flag = this.ware.wareCount > 0
                this.selected = flag
                this.$refs.checkbox.checked = flag
                this.$nextTick(() => {
                    this.selectWare(this.ware.wareCount)
                })
            },
            select () {
                this.$refs.checkbox.checked = !this.$refs.checkbox.checked
                this.selected = this.$refs.checkbox.checked
            },
            selectWare (count) {
                if (!this.selected) return
                var all = this.$refs.wareContainer.querySelectorAll('li')
                var allArr = [].slice.call(all)
                allArr.forEach(function (item) {
                    item.classList.remove('selected')
                })
                allArr[count - 1].classList.add('selected')
                this.wareNum = count
            },
            closeWare () {
                this.$emit('close')
            },
            confirm () {
                var data = {
                    warePrice: this.price,
                    wareCount: this.selected ? this.wareNum : 0
                }
                if (this.type) {
                    this.$store.dispatch('selectWare', data)
                        .then(() => {
                            this.$router.push('/payFood')
                        })
                } else {
                    this.$store.dispatch('selectWare', data)
                        .then(() => {
                            this.closeWare()
                        })
                }
            }
        }
    }
</script>

<style lang='stylus'>
    @import "../assets/css/global.styl"

    .shop-table-ware-container
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index 999
        background rgba(66,66,66,.2)
        .table-ware-selected-container
            position absolute
            top 50px
            bottom 50px
            left 40px
            right 40px
            border-radius 6px
            background #fff
            .table-ware-header
                padding 0 15px
                border-bottom 1px solid #eee
                color #000
                line-height 50px
                font-size 16px
                .table-ware-close
                    display inline-block
                    padding-left 16px
                    color #ccc
            .table-ware-middle
                padding 0 15px
                .table-ware-need-or-not
                    line-height 40px
                    .checkbox-container
                        vertical-align 2px
                    .checkbox-tip
                        margin-left 10px
                        font-size 14px
                .table-ware-price-tip
                    font-size 12px
                    color #e3000e
            .table-ware-bottom
                position relative
                padding 0 15px
                margin-top 14px
                .ware-num-item
                    box-sizing border-box
                    line-height 32px
                    width 30%
                    margin-right 5%
                    border-radius 6px
                    text-align center
                    margin-bottom 14px
                    &.no-need
                        background #d2d2d2
                        color #fff
                    &.need
                        background #fff
                        color #000
                        border 1px solid #ccc
                    &.selected
                        border 1px solid $globalColor
                        color $globalColor
                    &:nth-child(3n)
                        margin-right 0
            .comfir-ware-btn
                position absolute
                bottom 20px
                left 15px
                right 15px
                border-radius 8px
                line-height 40px
                text-align center
                background $globalColor
                color #fff
                font-size 16px
</style>