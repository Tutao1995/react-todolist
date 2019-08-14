import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'  //解决单词写错不报错，复用性差
import axios from 'axios'
import store from "./index";


export const inputChangeAction = (value) => ({
    type:CHANGE_INPUT,
    value
});
export const addItemAction = () => ({
    type:ADD_ITEM,
});
export const deleteItemAction = (index) => ({
    type:DELETE_ITEM,
    index
});
//调用了redux-thunk Middleware   处理挂载时异步加载数据更新到store仓库中
//处理的时候返回一个函数  以前直接是一个对象。在函数中需要调用dispatch方法将内容更新到store
export const getListAction = () => {
    return () => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data.data.list;
            const action =  {
                type:GET_LIST,
                data
            };
            store.dispatch(action)
        })
    }
};