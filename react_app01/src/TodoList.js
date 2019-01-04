import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    };

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className='aaaaa'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input)=>{this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul)=>{this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    };

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    deleteItem={this.handleItemDelete}
                    index={index}
                    content={item}/>
            )
        })
    }


    handleInputChange(e) {
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }));

    };

    handleBtnClick() {
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),()=>{console.log(this.ul.querySelectorAll('li').length)})
    };

    handleItemDelete(index) {
        //immutable
        //state 不允许我们做任何的改变
        this.setState((prevState)=>{
            const list = [...this.state.list];
            list.splice(index, 1);
            return {list}
        })
    };

}

export default TodoList;