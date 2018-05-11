//获取list
export const getSwipe = (state) => state.index.swipe

//获取分类列表
export const getCategory = (state) => state.index.category

//获取产品列表
export const getCategoryList = (state) => state.list.categoryList

//产品列表hasMore
export const hasMoreList = (state) => state.list.hasMore

//获取内容详情
export const contentDetail = (state) => state.detail.info

//获取用户信息
export const userCenterInfo = (state) => state.user.userinfo

//获取订单列表
export const getOrderList = (state) => state.order.orderList

//订单列表状态
export const getOrderType = (state) => state.order.orderType

//搜索页面
export const keyword = (state) => state.search.keyword

//搜索结果
export const searchResult = (state) => state.search.searchResult

//获取办理押金的信息
export const depositInfo = (state) => state.deposit.info

