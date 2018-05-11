import { INIT_CATEGORY_LIST, LOAD_MORE_LIST, HAS_MORE_LIST} from '../types'

const state = {
    categoryList: [],
    hasMore: false
}

const mutations = {
    [INIT_CATEGORY_LIST] (state, list) {
        state.categoryList = list
    },
    [LOAD_MORE_LIST] (state, more) {
        more.forEach(function (item) {
            state.categoryList.push(item)
        })
    },
    [HAS_MORE_LIST] (state, flag) {
        state.hasMore = flag
    }
}

export default {
    state,
    mutations
}