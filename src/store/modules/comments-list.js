// 产品列表状态
import * as types from '../mutation-types'

const state = {
    commentsList: [],
}
const getters = {
    comments:(state)=>{
        return state.commentsList
    },
}
const actions = {
    
}
const mutations = {
    [types.GET_COMMENTS_LIST] (state,getInfo) {
        //小于0 发布 ,大于0 回复
        if(getInfo.reviewIndex < 0){
            getInfo.reviewList = []
            state.commentsList.push(getInfo)
        }else{
            const index = getInfo.reviewIndex
            state.commentsList[index].reviewCount++
            state.commentsList[index].reviewList.push(getInfo)
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}