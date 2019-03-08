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
import author from "../../author.png";
import {categorysActions} from "../../core/articlelists/categorys";
import SearchExampleStandard from './SearchFluid';
class Header extends Component {
    componentWillMount() {
        this.props.loadCategorys();
    }
    render() {
        const {categorys, categoryvalue,isdropdown, handleChangeDropdown} = this.props;
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
                        {/*<Button secondary style={{marginLeft: '0.5em'}}>登录</Button>*/}
                        <Label as='div' color='black' style={{marginLeft: '0.5em'}} image>
                            <img src={author} alt={''}/>
                            <Label.Detail>Helen</Label.Detail>
                        </Label>
                        <Button secondary>退出</Button>
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
        isdropdown: state.getIn(['article', 'isdropdown'])
    }
}
const mapDispatchToProps = {
    loadCategorys: categorysActions.loadCategorys,
    handleChangeDropdown: categorysActions.handleChangeDropdown
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);