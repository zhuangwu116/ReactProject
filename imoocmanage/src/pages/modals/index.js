import React, {Component} from 'react';
import {Card, Button, Modal} from 'antd';
import './index.css';
class Modals extends Component{
    state={
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleOpen=(type)=>{
        this.setState({
            [type]: true
        })
    }
    render() {
        return (
            <div className='card-modals'>
                <Card title='基础模态框' className='class-card'>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>huangsdafdsafdsafdsafds</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    okText='好的'
                    cancelText='算了'
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>huangsdafdsafdsafdsafds</p>
                </Modal>
            </div>
        );
    }
}


export default Modals;