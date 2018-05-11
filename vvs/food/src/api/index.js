import axios from 'axios'

function config(query) {
    const config = {}
    if (query) {
        config.params = query
    }
    return config
}

export default {
    getFoodShopList: function () {
        return axios.get('/api/getFoodShopList', config())
    },
    getShopDetail: function (data) {
        return axios.get('/api/getShopDetail', config(data))
    },
    payFood: function (data) {
        return axios.post('/api/payFood', data, config())
    },
    getFoodOrder: function (data) {
        return axios.get('/api/getFoodOrder', config(data))
    },
    deleteFoodOrder: function (data) {
        return axios.post('/api/deleteFoodOrder', data, config())
    },
    getFoodOrderDetail: function (data) {
        return axios.get('/api/getFoodOrderDetail', config(data))
    },
    sendQrcode: function (data) {
        return axios.post('/api/sendQrcode', data, config())
    },
    login: function (data) {
        return axios.post('/api/login', data, config())
    },
    getOrderList: function (data) {
        return axios.get('/api/getOrderList', config(data))
    },
    getOrderDetail: function (data) {
        return axios.get('/api/getOrderDetail', config(data))
    },
    assocaiteOrder: function (data) {
        return axios.post('/api/assocaiteOrder', data, config())
    },
    payDeposit: function (data) {
        return axios.post('/api/payDeposit', data, config())
    },
    getQrcodeInfo: function (data) {
        return axios.get('/api/getQrcodeInfo', config(data))
    },
    getPayJsParameters: function (data) {
        return axios.post('/api/getPayJsParameters', data, config())
    },
    remark: function (data) {
        return axios.post('/api/remark', data, config())
    },
    deleteOrder: function (data) {
        return axios.post('/api/deleteOrder', data, config())
    },
    payBack: function (data) {
        return axios.post('/api/payBack', data, config())
    },
    unbindOrder: function (data) {
        return axios.post('/api/unbindOrder', data, config())
    },
    getUserField: function (data) {
        return axios.get('/api/getUserField', config(data))
    },
    saveUserInfo: function (data) {
        return axios.post('/api/saveUserInfo', data, config())
    },
    getQrcodeNeedInfo: function (data) {
        return axios.get('/api/getQrcodeNeedInfo', config())
    },
    saveQrocdeInfo: function (data) {
        return axios.post('/api/saveQrocdeInfo', data, config())
    }
}