import React,{Component} from 'react'
import 'Antd/dist/antd.css'
import './styles/todoList.css'
import {Input,Button,List} from 'antd'
class TodoListUI extends Component{
    render(){
        return(
            <div className="outer-box">
                <div>
                    <Input
                        placeholder={this.props.placeHolder}
                        value={this.props.inputValue}
                        className='input-content'
                        onChange={this.props.handleInputChange}
                        onKeyPress={this.props.handleInputEnter}
                    />
                    <Button
                        type='primary'
                        onClick={this.props.clickBtn}
                        className="add-btn"
                    >
                        增加
                    </Button>
                </div>
                <div className='list-box'>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index) => (
                            <List.Item
                                className="item-li"
                            >
                                {item}
                            <Button
                                onClick={() => {this.props.deleteItem(index)}}
                                type="danger"
                                icon="close"
                                shape="circle"
                                className="closeBtn"
                            >
                            </Button>
                            </List.Item>)}
                    />
                </div>
            </div>
        )
    }
}
export default TodoListUI