<template>
    <div class="category-modules" v-if='categorys.length'>
        <ul class="category-ul-container clearfix">
            <li class="category-item fl" v-for='category in makeCategory'>
                <router-link class='category-item-link' :to="{path: '/category', query:{type:category.type}}" v-if='category && !category.link'>
                    <div class="category-item-thumb">
                        <img class='category-thumb inline' :src="category.icon" alt="">
                    </div>
                    <div class="category-title">{{category.title}}</div>
                </router-link>
                <a class='category-item-link' :href="category.link" v-if='category && category.link'>
                    <div class="category-item-thumb">
                        <img class='category-thumb inline' :src="category.icon" alt="">
                    </div>
                    <div class="category-title">{{category.title}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            makeCategory () {
                var count = 4 - (this.categorys.length % 4)
                if (count === 4) {
                    return this.categorys
                } else {
                    var falseArr = Array(count).map(function () {
                        return false
                    })
                    return this.categorys.concat(falseArr)
                }
            },
            ...mapGetters({
                'categorys': 'getCategory'
            })
        },
        mounted () {
            this.initCategory()
        },
        methods: {
            ...mapActions([
                'initCategory'
            ])
        }
    }
</script>

<style lang='stylus'>
    .category-modules
        background #fff
        .category-item
            box-sizing border-box
            width 25%
            height 96px
            border-right 1px solid #eee
            border-bottom 1px solid #eee
            text-align center
            line-height 0
            .category-item-link
                display block
                padding 10px 0
                .category-item-thumb
                    display inline-block
                    box-sizing border-box
                    width 50px
                    height 50px
                .category-title
                    line-height 26px
                    color #666
            &:nth-child(4n)
                border-right none
</style>