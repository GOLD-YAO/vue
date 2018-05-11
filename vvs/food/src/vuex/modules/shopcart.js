import { SWITCH_FOOD_IN_CART, DELETE_FOOD_IN_CART, LOGING_REFRESH_FOOD_CART, INIT_WARE_INFO, SWITCH_WARE_COUNT, SWITCH_TABLE_NUMBER, SWITCH_SID } from '../types'
import * as cookie from '../../lib/cookie'

/* 获取userinfo的tag */
function getSkiTag () {
    return cookie.hasCookie('skiId') ? 'userinfo_' + cookie.getCookie('skiId') : false
}

/* 获取cookieTag */
function getShopCartTag () {
    var tag = getSkiTag()
    if (!tag) return false
    if (cookie.hasCookie(tag)) {
        var userId = cookie.getCookie(tag).userId
        var skiId = cookie.getCookie('skiId')
        return `food_shopcart_${skiId}_${userId}`
    }
    return false
}

/* 从cookie中获取购物车 */
function getshopcartFromCookie () {
    var userShop = getShopCartTag()
    if (userShop && cookie.hasCookie(userShop)) {
        return cookie.getCookie(userShop)
    }
    return false
}

const state = {
    sid: '',
    shopcart: getshopcartFromCookie() || {},
    ware: '',
    tableNum: ''
}

const mutations = {
    [SWITCH_SID] (state, sid) {
        state.sid = sid
    },
    [SWITCH_FOOD_IN_CART] (state, info) {
        var arr = state.shopcart[info.sid]
        if (!arr) {
            var obj = {}
            obj[info.sid] = []
            state.shopcart = Object.assign({}, state.shopcart, obj)
            arr = state.shopcart[info.sid]
        }
        var addCart = true
        var multiCart = false
        var multiIndex = -1
        arr.forEach(function (item, i) {
            if (item.id == info.food.id) {
                addCart = false
                item.count += info.food.count
                if (!item.count) {
                    multiCart = true
                    multiIndex = i
                }
            }
        })
        if (addCart) {
            arr.push(info.food)
        }
        if (multiCart) {
            arr.splice(multiIndex, 1)
        }
        cookie.delCookie(getShopCartTag())
        cookie.setCookie(getShopCartTag(), state.shopcart)
    },
    [DELETE_FOOD_IN_CART] (state, info) {
        state.shopcart[info.sid] = []
        cookie.delCookie(getShopCartTag())
        cookie.setCookie(getShopCartTag(), state.shopcart)
        if (info.ware) state.ware = ''
    },
    [LOGING_REFRESH_FOOD_CART] (state) {
        var shopcart = getshopcartFromCookie() || {}
        state.shopcart = shopcart
    },
    [INIT_WARE_INFO] (state, info) {
        state.ware = info
    },
    [SWITCH_WARE_COUNT] (state, count) {
        if (state.ware) state.ware.count = count
    },
    [SWITCH_TABLE_NUMBER] (state, num) {
        state.tableNum = num
    }
}

export default {
    state,
    mutations
}