import { deepCloneObj } from "../common/common";
export const handleChangeInput = (state,action) => {
    let newState = deepCloneObj(state);//deepClone  obj
    newState.inputValue = action.value;
    return newState
};
export const handleAddItem = (state,action) => {
    let newState = deepCloneObj(state);
    newState.list.push(newState.inputValue); //push新的内容到列表中去
    newState.inputValue = '';
    return newState
};
export const handleDeleteItem = (state,action) => {
    let newState = deepCloneObj(state);
    newState.list.splice(action.index,1);
    return newState
};
export const handleGetList = (state,action) => {
    let newState = deepCloneObj(state);
    newState.list = action.data;
    return newState
};