import { INIT_SHOP_LIST } from '../types'

const state = {
    shops: []
}

const mutations = {
    [INIT_SHOP_LIST] (state, shops) {
        state.shops = shops
    }
}

export default {
    state,
    mutations
}