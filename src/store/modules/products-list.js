// 产品列表状态
import * as types from '../mutation-types'

const state = {
    productsList : [],
    defaultlist: []
}
const getters = {
    realList:(state)=>{
        return (type) => {
            const data = state.productsList
            
            switch(type) {
                case 0:console.log('改了type'+type); return state.defaultlist;break;
                case 1:console.log('改了type'+type); return data.sort((a,b) => {return a.price - b.price});break;
                case 2:console.log('改了type'+type); return data.sort((a,b) => {return b.price - a.price});break;
                case 3:console.log('改了type'+type); return data.sort((a,b) => {return a.discount - b.discount});break;
                case 4:console.log('改了type'+type); return data.sort((a,b) => {return b.discount - a.discount});break;
            }
        }
    },
}
const actions = {
    getProlist({ commit },{ productslist }){
        commit(types.SAVE_PRO_LIST,productslist)
    }
}
const mutations = {
    [types.SAVE_PRO_LIST] (state,productslist) {
        state.productsList = productslist
        state.defaultlist = productslist
        console.log('列表 存了')
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}