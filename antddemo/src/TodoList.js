import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd';
import store from './store/index';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div>
                <div style={{marginTop: '10px', marginLeft: '10px'}}>
                    <Input onChange={this.handleInputChange} value={this.state.inputValue} placeholder="Basic usage"
                           style={{width: '300px', marginRight: '10px'}}/>
                    <Button onClick={this.handleBtnClick} type="primary">提交</Button>
                </div>
                <List
                    style={{width: '400px', marginTop: '10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

    handleInputChange(e) {
        // const value = this.input.value;
        // this.setState(() => ({
        //     inputValue: value
        // }));
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        //this.setState((prevState)=>({
        //     list: [...prevState.list, prevState.inputValue],
        //     inputValue: ''
        // }),()=>{console.log(this.ul.querySelectorAll('li').length)})
        const action = {
            type: 'add_todo_item',
        };
        store.dispatch(action);
    };

    handleItemDelete(index) {
        //immutable
        //state 不允许我们做任何的改变
        // this.setState((prevState)=>{
        //     const list = [...this.state.list];
        //     list.splice(index, 1);
        //     return {list}
        // })
    };
}

export default TodoList;