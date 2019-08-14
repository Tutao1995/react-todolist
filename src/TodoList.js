import React,{Component} from 'react'
import store from './store'
import 'Antd/dist/antd.css'
import {message} from 'antd'
import { inputChangeAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
// import axios from 'axios'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.handleInputEnter = this.handleInputEnter.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        //每次对store 进行dispatch(action) 都会触发store.subscribe 所注册的函数回调。
        //监听全局store的监听
        store.subscribe(this.storeChange);//订阅Redux的状态
    }
    storeChange(){
        this.setState(store.getState())
    }
    handleInputChange(e){
        const action = inputChangeAction(e.target.value);
        store.dispatch(action)
    }
    clickBtn(){
        //action 代表用户的操作
        //包含一个type属性，且该属性唯一。相同的type，redux视为同一种操作，因为处理action的函数reducer只判断action的type属性.
        if(this.state.inputValue === ''){
            return message.error('There is nothing to add');
        }
        const action = addItemAction();
        store.dispatch(action)
    }
    handleInputEnter(e){
        if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
            this.clickBtn()
        }
    }
    deleteItem(index){
        const action = deleteItemAction(index);
        store.dispatch(action)
    }
    //挂在初始数据渲染
    componentDidMount() {
        const action = getListAction();
        store.dispatch(action);
    }

    render(){
        return(
           <TodoListUI
               placeholder={this.state.placeHolder}
               inputValue={this.state.inputValue}
               handleInputChange={this.handleInputChange}
               handleInputEnter={this.handleInputEnter}
               clickBtn={this.clickBtn}
               list={this.state.list}
               deleteItem={this.deleteItem}
           />
        )
    }
}
export  default TodoList
