//reducer can only receive state,can't change it
//Redux 中负责相应action并修改数据的角色就是reducer
//本身是一个函数，包含两个参数preciousState   action ，并返回一个newState对象。
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import { handleChangeInput, handleAddItem, handleDeleteItem, handleGetList } from './handleActionType'
const defaultState = {
    placeHolder:'Write something',
    inputValue:'',
    list:[
        // '早上4点起床，锻炼身体',
        // '中午下班游泳一小时'
    ]
};

export default (state = defaultState,action) => {
    switch(action.type){
        case CHANGE_INPUT:
            return handleChangeInput(state,action);
        case ADD_ITEM:
            return handleAddItem(state,action);
        case DELETE_ITEM :
            return handleDeleteItem(state,action);
        case GET_LIST :
            return handleGetList(state,action);
        default:
            return state;
    }
}
