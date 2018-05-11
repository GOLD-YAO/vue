import { INIT_SHOP_DETAIL_INFO } from '../types'

const state = {
    shopInfo: ''
}

const mutations = {
    [INIT_SHOP_DETAIL_INFO] (state, info) {
        state.shopInfo = info
    }
}

export default {
    state,
    mutations
}