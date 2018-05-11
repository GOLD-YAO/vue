<template>
    <div class="shop-header">
        <div class="content-wrapper clearfix">
            <div class="avatar fl">
                <img width="64" height="64" :src="sellerInfo.thumb">
            </div>
            <div class="content fl">
                <div class="title single-ellipsis">{{sellerInfo.title}}</div>
                <div class="description single-ellipsis">{{sellerInfo.description}}</div>
            </div>
        </div>
        <div class="background">
            <img :src="sellerInfo.thumb" width="100%" height="100%">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            sellerInfo: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang='stylus'>
    .shop-header
        position: relative
        overflow: hidden
        color: #fff
        background: rgba(7, 17, 27, 0.5)
        .content-wrapper
            position: relative
            padding: 24px 12px 18px 24px
            font-size: 0
            .avatar
                vertical-align: top
                img
                  border-radius: 2px
            .content
                width: calc(100% - 80px)
                margin-left: 16px
                .title
                    margin: 2px 0 8px 6px
                    font-size: 16px
                    line-height: 18px
                    font-weight: bold
            .description
                margin-top: 20px
                line-height: 12px
                font-size: 12px
        .background
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: -1
            filter: blur(10px)
</style>