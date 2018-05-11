import * as types from './types'
import * as cookie from '../lib/cookie'
import Api from '../api/index'

//首页餐厅列表的展示
export const initFoodShop = ({ commit }) => {
    return Api.getFoodShopList()
            .then(function (response) {
                commit(types.INIT_SHOP_LIST, response.data)
            })
}

//商家详情信息
export const initShopDetailInfo = ({ commit }, data) => {
    return Api.getShopDetail(data)
            .then(function (response) {
                commit(types.INIT_SHOP_DETAIL_INFO, response.data)
            })
}

//进入商家更新sid
export const switchSid = ({ commit }, data) => {
    return new Promise(function (reslove) {
        commit(types.SWITCH_SID, data)
        reslove()
    })
}

//购物车修改
export const switchShopCart = ({ commit }, data) => {
    return new Promise(function (reslove, reject) {
        if (!cookie.hasCookie('userinfo_' + cookie.getCookie('skiId'))) {
            reject()
        } else {
            commit(types.SWITCH_FOOD_IN_CART, data)
            reslove()
        }
    })
}

//删除购物车
export const deleteShopCart = ({ commit }, data) => {
    return new Promise(function (reslove) {
        commit(types.DELETE_FOOD_IN_CART, data)
        reslove()
    })
}

//登录重新刷新购物车
export const loginRefreshCart = ({ commit }) => {
    return new Promise(function (reslove) {
        commit(types.LOGING_REFRESH_FOOD_CART)
        reslove()
    })
}

//餐具的选择
export const selectWare = ({ commit }, data) => {
    return new Promise(function (reslove) {
        commit(types.INIT_WARE_INFO, data)
        reslove()
    })
}

//餐桌选择
export const selectTable = ({ commit }, data) => {
    return new Promise(function (reslove) {
        commit(types.SWITCH_TABLE_NUMBER, data)
        reslove()
    })
}

//登录操作
export const login = ({ commit }, data) => {
    return Api.login(data)
            .then(function (response) {
                if (response.data.success) {
                    commit(types.INIT_LOGING_USER, response.data.userinfo)
                    return {
                        success: true,
                        redirectUrl: response.data.redirectUrl
                    }
                } else {
                    return {
                        success: false,
                        errorMsg: response.data.errorMsg
                    }
                }
            })
}

//退出登录
export const logout = ({ commit }) => {
    return new Promise(function (reslove) {
        commit(types.USER_LOGOUT_ACTION)
        reslove()
    })
}

//获取订单列表
export const getOrderList = ({ commit }, data) => {
    return Api.getOrderList(data)
            .then(function (response) {
                commit(types.INIT_ORDER_LIST, response.data)
            })
}

//清空订单列表
export const clearOrderList = ({ commit }) => {
    return new Promise(function (reslove) {
        commit(types.CLEAR_ORDER_LIST)
        reslove()
    })
}

//订单办理押金
export const orderDeposit = ({ commit }, data) => {
    return new Promise(function (reslove) {
        commit(types.DEPOSIT_ORDER_INFO, data)
        reslove()
    })
}

export const clearDeposit = ({ commit }) => {
    return new Promise(function (reslove) {
        commit(types.CLEAR_DEPOSIT_INFO)
        reslove()
    })
}


//订单列表状态改变的时候
export const orderTabChange = ({ commit }, data) => {
    return new Promise(function (reslove) {
        commit(types.SWITCH_ORDER_TYPE, data)
        reslove()
    })
}
