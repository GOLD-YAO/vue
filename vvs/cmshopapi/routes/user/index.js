var express = require('express')

var fs = require('fs')

var router = express.Router()

router.get('/info', function (req, res) {
    console.log(+req.query.detail)
    fs.readFile(__dirname + '/file/user.json', 'utf-8', function (err, data) {
        var data = JSON.parse(data)
        var result
        data.forEach(function (item) {
            if (item.detail == +req.query.detail) {
                result = item
                console.log(item)
            }
        })
        res.json(result)
    })
})


router.post('/save', function (req, res) {
    console.log(req.body)
    res.json({
        success: true
    })
})

/*二维码需要填写的信息*/
router.get('/qrcode', function (req, res) {
    fs.readFile(__dirname + '/file/qrcode.json', 'utf-8', function (err, data) {
        var data = JSON.parse(data)
        res.json(data)
    })
})


router.post('/saveQrcode', function (req, res) {
    console.log(req.body)
    res.json({
        success: true
    })
})


module.exports = router