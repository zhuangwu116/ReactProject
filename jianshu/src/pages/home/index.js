import React, { PureComponent} from 'react';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style'
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {actionCreators} from './store';

import {connect} from 'react-redux';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'
                         src="//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=''/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }
            </HomeWrapper>
        );
    }


    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    
}
const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e){
        if(document.documentElement.scrollTop > 300){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});
export default connect(mapState, mapDispatch)(Home);