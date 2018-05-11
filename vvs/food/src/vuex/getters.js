//商家列表
export const getShopLists = (state) => state.shoplist.shops

export const getShopDetailInfo = (state) => state.detail.shopInfo

//获取购物车。商家购物车
export const getShopCart = (state) => {
    return state.shopcart.shopcart[state.shopcart.sid] ? state.shopcart.shopcart[state.shopcart.sid] : []
}

export const getSid = (state) => state.shopcart.sid

export const getWareInfo = (state) => state.shopcart.ware

export const getTableNum = (state) => state.shopcart.tableNum

//获取用户信息
export const userCenterInfo = (state) => state.user.userinfo

//获取订单列表
export const getOrderList = (state) => state.order.orderList

//订单列表状态
export const getOrderType = (state) => state.order.orderType

//获取办理押金的信息
export const depositInfo = (state) => state.deposit.info

