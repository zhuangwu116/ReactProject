import React, {Component} from 'react';
import {Card, Button, Icon,Radio} from 'antd';
import './index.css'

class Buttons extends Component {
    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading() {
        this.setState({
            loading: false
        });
    }
    handleChange=(e)=>{
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div className='card-buttons'>
                <Card title='基础按钮' className='class-card'>
                    <Button type='primary'>Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type='dashed'>Imooc</Button>
                    <Button type='danger'>Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title='图形按钮' className='class-card'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title='Loading按钮' className='class-card'>
                    <Button type='primary' loading={this.state.loading}>确定</Button>
                    <Button type='primary' shape='circle' loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape='circle' loading={this.state.loading}></Button>
                    <Button type='primary' onClick={this.handleCloseLoading.bind(this)}>关闭</Button>
                </Card>
                <Card title='按钮组'>
                    <Button.Group>
                        <Button type='primary'><Icon type='left'/>返回</Button>
                        <Button type='primary'>前进<Icon type='right'/></Button>
                    </Button.Group>
                </Card>
                <Card title='按钮尺寸' >
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button size={this.state.size} type='primary'>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size} type='dashed'>Imooc</Button>
                    <Button size={this.state.size} type='danger'>Imooc</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;