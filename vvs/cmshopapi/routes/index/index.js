var express = require('express')

var fs = require('fs')

var router = express.Router()

router.get('/swipe', function (req, res) {
    console.log(req)
    fs.readFile(__dirname + '/file/swipe.json', 'utf-8', function (err, data) {
        res.json(JSON.parse(data))
    })
})

router.get('/product', function (req,res) {
    fs.readFile(__dirname + '/file/product.json', 'utf-8', function (err, data) {
        var limit = parseInt(req.query.limit) || 10
        var offset = parseInt(req.query.offset) || 0
        var type = req.query.type || ''
        var result = JSON.parse(data)
        var product = []
        if (type) {
            for (var i =0;i<result.length;i++) {
                if (result[i].type == type) product.push(result[i])
            }
        } else {
            product = result
        }
        var list = product.slice(offset, offset + limit)
        var hasMore = true
        if (offset + limit >= product.length) {
            hasMore = false
        }
        var obj = {
            hasMore: hasMore,
            product: list
        }
        res.json(obj)
    })
})


router.get('/detail', function (req, res) {
    fs.readFile(__dirname + '/file/detail.json', 'utf-8', function (err, data) {
        var details = JSON.parse(data)
        var pid = +req.query.pid
        var result
        details.forEach(function (detail) {
            if (detail.id == pid) {
                result = detail
            }
        })
        res.json(result)
    })
})

router.get('/category', function (req, res) {
    fs.readFile(__dirname + '/file/category.json', 'utf-8', function (err, data) {
        res.json(JSON.parse(data))
    })
})

router.post('/sendqrcode', function (req, res) {
    console.log(req.body)
    var flag = true
    /* 发送短信操作 */
    res.json({
        success: flag
    })
})

router.post('/login', function (req, res) {
    var data = {username: req.body.telephone, thumb: '/static/images/header.jpg', userId:2}
    res.cookie('userinfo', JSON.stringify(data), {
        expires: new Date(Date.now() + 10000 * 60 * 60 * 24 * 7)
    });
    var flag = true
    res.json({
        success: flag,
        userinfo: data
    })
})

router.get('/search', function (req, res) {
    console.log(req.query.keyword)
    fs.readFile(__dirname + '/file/search.json', 'utf-8', function (err, data) {
        var result = JSON.parse(data)
        res.json(result)
    })
})


//关联订单
router.post('/assocaite', function (req, res) {
    console.log(req.body.assocaiteOrder)
    // res.json({
    //     success: false,
    //     errorMsg: '没有该消费码'
    // })

    res.json({
        success: true
    })
})

router.post('/payDeposit', function (req, res) {
    console.log(req.body)
    res.json({
        success: true,
        jsParams: {
            timeStamp: '1231'
        }
    })
})

router.get('/qrcode', function (req, res) {
    var orderId = req.query.orderId
    fs.readFile(__dirname + '/file/qrcode.json', 'utf-8', function (err, data) {
        var result
        JSON.parse(data).forEach(function (item) {
            if (item.orderid == orderId) result = item
        })
        res.json(result)
    })
})

router.post('/remark', function (req, res) {
    console.log(req.body.orderId)
    console.log(req.body.qrcodeId)
    console.log(req.body.remark)
    res.json({
        success: true
    })
})

router.post('/logout', function (req, res) {
    res.json({
        success: true
    })
})


router.post('/pay', function(req, res) {
    console.log(req.body.payInfo)
    res.json({
        success: true,
        jsParamters: {
            "timeStamp": 123
        }
    })
})


router.post('/deleteOrder', function (req, res) {
    console.log(req.body.orderId)
    res.json({
        success: true
    })
})


router.post('/payBack', function (req, res) {
    console.log(req.body.orderId)
    res.json({
        success: true
    })
})

router.post('/unbindOrder', function (req, res) {
    console.log(req.body.orderId)
    res.json({
        success: true
    })
})

module.exports = router