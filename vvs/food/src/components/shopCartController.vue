<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="count>0" @click.stop.prevent='switchCart($event, -1)'>
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-count" v-show="count>0">{{count}}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevent='switchCart($event, 1)'></div>
    </div>
</template>

<script>
    import { assignObj } from '../lib/util'
    import { mapGetters } from 'vuex'

    export default {
        props: {
            food: {
                required: true,
                type: Object
            },
            count: {
                required: true,
                type: Number
            }
        },
        computed: {
            ...mapGetters({
                'sid': 'getSid'
            })
        },
        methods: {
            switchCart (event, switchNum) {
                var data = {
                    id: '',
                    name: '',
                    price: ''
                }
                var info = assignObj(data, this.food)
                info.count = switchNum
                var final = {
                    sid: this.sid,
                    food: info
                }
                this.$store.dispatch('switchShopCart', final)
                    .then(() => {
                        if (switchNum > 0) {
                            this.$emit('add', event.target)
                        }
                    })
                    .catch(() => {
                        this.$router.push('/login')
                    })
            }
        }
    }
</script>

<style lang='stylus'>
    .cartcontrol
        font-size 0
        .cart-decrease
            display: inline-block
            padding: 6px
            opacity: 1
            transform: translate3d(0, 0, 0)
            .inner
                display: inline-block
                line-height: 24px
                font-size: 24px
                color: rgb(0, 160, 220)
                transition: all 0.4s linear
                transform: rotate(0)
            &.move-enter-active, &.move-leave-active
                transition: all 0.4s linear
            &.move-enter, &.move-leave-active
                opacity: 0
                transform: translate3d(24px, 0, 0)
                .inner
                    transform: rotate(180deg)
        .cart-count
            display: inline-block
            vertical-align: top
            width: 12px
            padding-top: 6px
            line-height: 24px
            text-align: center
            font-size: 10px
            color: rgb(147, 153, 159)
        .cart-add
            display: inline-block
            padding: 6px
            line-height: 24px
            font-size: 24px
            color: rgb(0, 160, 220)
</style>