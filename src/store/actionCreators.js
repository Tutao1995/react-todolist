import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'  //解决单词写错不报错，复用性差

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