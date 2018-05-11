import axios from 'axios'

function config(query) {
    const config = {
        baseURL: 'http://192.168.1.30:8001',
        timeout: 5000
    }
    if (query) {
        config.params = query
    }
    return config
}

export default {
    getFoodShopList: function () {
        return axios.get('/shop/list', config())
    },
    getShopDetail: function (data) {
        return axios.get('/shop/detail', config(data))
    },
    payFood: function (data) {
        return axios.post('/shop/pay', data, config())
    },
    getFoodOrder: function (data) {
        return axios.get('/shop/order', config(data))
    },
    deleteFoodOrder: function (data) {
        return axios.post('/shop/deleteOrder', data, config())
    },
    getFoodOrderDetail: function (data) {
        return axios.get('/shop/orderDetail', config(data))
    },
    sendQrcode: function (data) {
        return axios.post('/index/sendqrcode', data, config())
    },
    login: function (data) {
        return axios.post('/index/login', data, config())
    },
    getOrderList: function (data) {
        return axios.get('/order/list', config(data))
    },
    getOrderDetail: function (data) {
        return axios.get('/order/detail', config(data))
    },
    assocaiteOrder: function (data) {
        return axios.post('/index/assocaite', data, config())
    },
    payDeposit: function (data) {
        return axios.post('/index/payDeposit', data, config())
    },
    getQrcodeInfo: function (data) {
        return axios.get('/index/qrcode', config(data))
    },
    getPayJsParameters: function (data) {
        return axios.post('/index/pay', data, config())
    },
    remark: function (data) {
        return axios.post('/index/remark', data, config())
    },
    deleteOrder: function (data) {
        return axios.post('/index/deleteOrder', data, config())
    },
    payBack: function (data) {
        return axios.post('/index/payBack', data, config())
    },
    unbindOrder: function (data) {
        return axios.post('/index/unbindOrder', data, config())
    },
    getUserField: function (data) {
        return axios.get('/user/info', config(data))
    },
    saveUserInfo: function (data) {
        return axios.post('/user/save', data, config())
    },
    getQrcodeNeedInfo: function (data) {
        return axios.get('/user/qrcode', config())
    },
    saveQrocdeInfo: function (data) {
        return axios.post('/user/saveQrcode', data, config())
    }
}