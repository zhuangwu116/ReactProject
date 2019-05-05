import React, {Component} from 'react';
import {
    Container,
    Dropdown,
    Image,
    Menu,
    Button,
    Label
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import logo from "../../logo.svg";
import {categorysActions} from "../../core/articlelists/categorys";
import SearchExampleStandard from './SearchFluid';
import {authActions} from "../../core/auth";
class Header extends Component {
    componentWillMount() {
        this.props.loadCategorys();
        this.props.loginIsAuth();
    }
    render() {
        const {categorys, categoryvalue,isdropdown, handleChangeDropdown,
            islogin, username, name, avatar, handleOpenModal, loginout} = this.props;
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        <Image size='mini' src={logo} style={{marginRight: '1.5em'}}/>
                        博客
                    </Menu.Item>
                    <Menu.Item as='a'>主页</Menu.Item>
                    {
                        isdropdown?<Dropdown item simple
                                             options={categorys}
                                             onChange = {handleChangeDropdown}
                                             defaultValue={categoryvalue}/>
                            : null
                    }
                    <Menu.Item position="right">
                        <SearchExampleStandard/>
                        {
                           islogin ? (<Label as='div' color='black' style={{marginLeft: '0.5em'}} image>
                               <img src={avatar} alt={''}/>
                               <Label.Detail>{name?name:username}</Label.Detail>
                           </Label>): (<Button onClick={handleOpenModal} secondary style={{marginLeft: '0.5em'}}>登录</Button>)
                        }
                        {
                            islogin?(<Button onClick={loginout} secondary>退出</Button>): null
                        }
                        <Button secondary style={{marginLeft: '0.5em'}}>注册</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
};

const mapStateToProps = (state) => {
    const categoryslist = state.getIn(['article', 'categoryList'])
    let options = [{text: '全部', value: -1},]
    const tem_options =  categoryslist.map((item, index)=>({
        text: item.get('name'), value: item.get('id')
    }))
    options.push(...tem_options)
    return {
        categorys: options,
        categoryvalue: state.getIn(['article','categoryvalue']),
        isdropdown: state.getIn(['article', 'isdropdown']),
        islogin: state.getIn(['auth', 'loginIn']),
        username: state.getIn(['auth', 'authuser']),
        name: state.getIn(['auth', 'name']),
        avatar: state.getIn(['auth', 'avatar']),
    }
}
const mapDispatchToProps = {
    loadCategorys: categorysActions.loadCategorys,
    handleChangeDropdown: categorysActions.handleChangeDropdown,
    loginIsAuth: authActions.loginIsAuth,
    handleOpenModal: authActions.handleopenmodal,
    loginout: authActions.handleoutlogin
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);