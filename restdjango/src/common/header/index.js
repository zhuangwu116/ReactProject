import React, { Component } from 'react';
import {
    Container,
    Dropdown,
    Image,
    Menu,
    Button,
    Search,
    Label
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import logo from "../../logo.svg";
import author from "../../author.png";


class Header extends Component{
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                        博客
                    </Menu.Item>
                    <Menu.Item as='a'>主页</Menu.Item>

                    <Dropdown item simple text='分类'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                                <i className='dropdown icon' />
                                <span className='text'>Submenu</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item position="right">
                        <Search/>
                        {/*<Button secondary style={{marginLeft: '0.5em'}}>登录</Button>*/}
                        <Label as='div' color='black' style={{marginLeft: '0.5em'}} image>
                            <img src={author} />
                            <Label.Detail>Helen</Label.Detail>
                        </Label>
                        <Button secondary>退出</Button>
                        <Button secondary style={{marginLeft: '0.5em'}}>注册</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}

export default Header;