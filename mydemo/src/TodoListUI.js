import React, {Component} from 'react';
import {Input, Button, List} from 'antd';

class TodoListUI extends Component {
    render() {
        return (
            <div>
                <div style={{marginTop: '10px', marginLeft: '10px'}}>
                    <Input onChange={this.props.handleInputChange} value={this.props.inputValue}
                           placeholder="Basic usage"
                           style={{width: '300px', marginRight: '10px'}}/>
                    <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
                </div>
                <List
                    style={{width: '400px', marginTop: '10px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => {
                        this.props.handleItemDelete(index)
                    }}>{item}</List.Item>)}
                />
            </div>
        );
    }
}

export default TodoListUI;



