import * as types from '../mutation-types'
const state = {
    
}

const getters = {
    
}

const mutations = {
    [types.GET_PRO_DETAIL] (state,productInfo) {
        state.productInfo = productInfo
        console.log('详情 存了')
    }
}

export default{
    state,
    mutations
}