// 异步的action放在这里，尽量避免使用action，只有当某个异步取数据的操作
// 被多个地方使用，又不方便规划到某一单一组件（例如两个页面公用一组数据，但页面释放掉就无法调用查询）
//产品列表
// export const actions = {
//     getProlist({ commit },{ productslist }){
//         commit(types.SAVE_PRO_LIST,productslist)
//     }
// }

//产品详情
// export const proDetailActions = {

// }