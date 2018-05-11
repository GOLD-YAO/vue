import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import shoplist from './modules/shoplist'
import shopcart from './modules/shopcart'
import detail from './modules/detail'
import user from './modules/user'
import order from './modules/order'
import deposit from './modules/deposit'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        shoplist,
        detail,
        user,
        order,
        deposit,
        shopcart
    }
})

export default store
