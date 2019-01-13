import React, {Component} from 'react';

import {Menu} from 'antd';
import menuList from '../../config/menuConfig';
import './index.css';

const SubMenu = Menu.SubMenu;


class NavLeft extends Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode
        })
    }

    //菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (<SubMenu title={item.title} key={item.key}>{this.renderMenu(item.children)}</SubMenu>)
            }
            return <Menu.Item title={item.title} key={item.key}>{ item.title }</Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <img src='/assets/logo-ant.svg' alt=''/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;