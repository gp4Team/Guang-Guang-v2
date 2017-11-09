// 产品列表状态
import * as types from '../mutation-types'

const state = {
    cartList : []
}
const getters = {
    list:(state)=>{
        
    },
    cartCount: (state) => {
        let count = 0
        state.cartList.map((item)=>count += Number(item.count))
        return count;
    }
}
const actions = {
   
}
const mutations = {
    [types.SAVE_CART_LIST] (state,cartInfo) {
        let isHas = state.cartList.find(item => item.goodsId  == cartInfo.goodsId )
        if(!isHas){
            state.cartList.push(cartInfo)
        }else{
            for(let i in state.cartList){
                if(state.cartList[i].goodsId == cartInfo.goodsId){
                    if(state.cartList[i].size == cartInfo.size && state.cartList[i].color == cartInfo.color){
                        state.cartList[i].count = Number(state.cartList[i].count) + Number(cartInfo.count)
                        break;
                    }else if(state.cartList[i].size != cartInfo.size || state.cartList[i].color != cartInfo.color){
                        state.cartList.push(cartInfo)
                        break;
                    }
                }
            }
        }



        // let isHas = state.cartList.find(item => item.goodsId  == cartInfo.goodsId )
        // if(!isHas){
        //     state.cartList.push(cartInfo)
        // }else{
        //     debugger
        //     let info = state.cartList.filter((item)=>{
        //         if (item.goodsId  == cartInfo.goodsId){
        //             return item;
        //         }
        //     })
        //     for(let i in info) {
        //         if(info[i].size == cartInfo.size && info[i].color == cartInfo.color){
        //             info[i].count = Number(info[i].count) + Number(cartInfo.count)
        //         }else{
        //             state.cartList.push(cartInfo)
        //         }
        //     }
            
        // }
        console.log('加入购物车')
        console.log(state.cartList)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}