<template>
    <div class="category-container">
        <site-header title='内容列表'>
            <span slot='left' @click='goBack()'><i class="fa fa-angle-left fa-2x"></i></span>
        </site-header>
        <site-photo-list v-if="listType === 'photo'"></site-photo-list>
        <site-list v-else></site-list>
        <site-footer></site-footer>
    </div>
</template>

<script>
    import siteList from '../components/siteList'
    import siteFooter from '../components/footer'
    import siteHeader from '../components/header'
    import sitePhotoList from '../components/sitePhotoList'

    export default {
        data () {
            return {
                listType: ''
            }
        },
        mounted () {
            this.listType = this.$route.query.type
        },
        methods: {
            goBack () {
                this.$router.go(-1)
            }
        },
        components: {
            siteList,
            siteFooter,
            siteHeader,
            sitePhotoList
        }
    }
</script>

<style lang='stylus'>
    .category-container
        padding-top 50px
</style>