var express = require('express')

var fs = require('fs')

var router = express.Router()

router.get('/detail', function (req, res) {
    fs.readFile(__dirname + '/file/cart.json', 'utf-8', function (err, data) {
        res.json(JSON.parse(data))
    })
})

router.post('/add', function (req, res) {
    var pid = req.body.id  //产品id
    var count = req.body.count  //产品数量
    fs.readFile(__dirname + '../index/file/product.json', 'utf-8', function (err, data) {
        var product = JSON.parse(data)
        var addProduct
        product.forEach(function (item) {
            if (item.id == pid) {
                addProduct = item
            }
        })
    })
})

//购物车上结算
router.post('/verify', function (req, res) {
    console.log(req.body.products)
    // res.json({
    //     success: false,
    //     errorMsg: 'xxxx'
    // })

    res.json({
        success: true
    })
})

module.exports = router