<template>
    <div class="category-modules" v-if='categorys.length'>
        <ul class="category-ul-container clearfix">
            <li class="category-item fl" v-for='category in categorys'>
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
        .category-ul-container
            display flex
            padding 10px 0
            flex-wrap nowrap
            width 100%
            overflow-x auto
            .category-item
                box-sizing border-box
                flex 0 0 20%
                text-align center
                .category-item-link
                    display block
                .category-item-thumb
                    display inline-block
                    box-sizing border-box
                    width 50px
                    height 50px
                .category-title
                    margin-top 6px
                    color #666
</style>