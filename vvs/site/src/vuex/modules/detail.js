import { INIT_CONTENT_INFO } from '../types'

const state = {
    info: {}
}

const mutations = {
    [INIT_CONTENT_INFO] (state, info) {
        state.info = info
    }
}

export default {
    state,
    mutations
}