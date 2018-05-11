var express = require('express')

var fs = require('fs')

var router = express.Router()

router.get('/list', function (req, res) {
    var type = +req.query.type  //订单状态
    var third = +req.query.fromThird
    fs.readFile(__dirname + '/file/order.json', 'utf-8', function (err, data) {
        var data = JSON.parse(data)
        var result = []
        data.forEach(function (item) {
            if (item.fromThird === third) result.push(item)
        })
        if (type === 0) {
            res.json(result)
        } else {
            var finall = []
            result.forEach(function (item) {
                if (item.type === type) finall.push(item)
            })
            res.json(finall)
        }
    })
})

router.get('/pay', function (req, res) {
    var orderId = req.query.orderId
    fs.readFile(__dirname + '/file/order.json', 'utf-8', function (err, data) {
        var data = JSON.parse(data)
        var result
        data.forEach(function (item) {
            if (item.orderid == orderId) result = item
        })
        res.json(result)
    })
})

router.get('/detail', function (req, res) {
    var orderId = req.query.orderId
    console.log(orderId)
    var verfi = req.query.verification
    fs.readFile(__dirname + '/file/order.json', 'utf-8', function (err, data) {
        var data = JSON.parse(data)
        var result
        data.forEach(function (item) {
            if (item.orderid == orderId) result = item
        })
        res.json(result)
    })
})

module.exports = router