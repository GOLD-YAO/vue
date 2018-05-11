import * as types from './types'
import Api from '../api/index'

//首页轮播图
export const initSwipe = ({ commit }) => {
    return Api.initSwipe()
            .then(function (response) {
                commit(types.INIT_SWIPE, response.data)
            })
}

//首页分类菜单
export const initCategory = ({ commit }) => {
    return Api.getIndexCategory()
            .then(function (response) {
                commit(types.INIT_CATEGORY, response.data)
            })
}

//分类列表
export const initCategoryList = ({ commit }, data) => {
    return Api.getCategoryList(data)
            .then(function (response) {
                var result = response.data
                commit(types.INIT_CATEGORY_LIST, result.list)
                commit(types.HAS_MORE_LIST, result.hasMore)
            })
}

//无限加载列表
export const loadMoreProduct = ({ commit }, data) => {
    return Api.getCategoryList(data)
            .then(function (response) {
                var result = response.data
                commit(types.LOAD_MORE_LIST, result.list)
                commit(types.HAS_MORE_LIST, result.hasMore)
            })
}

//获取内容详情
export const getContentDetail = ({ commit }, data) => {
    return Api.getContentDetail(data)
            .then(function (response) {
                commit(types.INIT_CONTENT_INFO, response.data)
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

//搜索
export const search = ({ commit }, data) => {
    return Api.search(data)
        .then((response) => {
            commit(types.SWITCH_SEARCH_RESULT, response.data)
            commit(types.SWITCH_SEARCH_KEYWORD, data.keyword)
        })
}

//清空搜索结果
export const clearSearch = ({ commit }) => {
    return new Promise(function (reslove) {
        commit(types.SWITCH_SEARCH_RESULT, [])
        commit(types.SWITCH_SEARCH_KEYWORD, '')
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

