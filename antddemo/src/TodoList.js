import React, {Component} from 'react';
import 'antd/dist/antd.css'
import store from './store/index';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction,initListAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return <TodoListUI
            inputValue={ this.state.inputValue }
            handleInputChange = { this.handleInputChange  }
            handleBtnClick = {this.handleBtnClick }
            handleItemDelete = {this.handleItemDelete}
            list = {this.state.list}
        />
    }
    componentDidMount() {
            axios.get('/list.json').then((res)=>{
                const data = res.data;
                const action = initListAction(data);
                store.dispatch(action);
            });
    }

    handleInputChange(e) {
        // const value = this.input.value;
        // this.setState(() => ({
        //     inputValue: value
        // }));
        const action = getInputChangeAction(e.target.value);
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
        const action =getAddItemAction();
        store.dispatch(action);
    };

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
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