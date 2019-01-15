import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './index.css';
import Util from '../../utils/utils';
import axios from '../../axios';
class Header extends Component {
    componentWillMount() {
        this.setState({
            userName: "河畔页脚"
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
        //this.getWeatherAPIData();
    }
    componentWillUnmount() {
        clearInterval()
    }

    getWeatherAPIData(){
        let city='北京'
        axios.jsonp({
            url: 'http://v.juhe.cn/weather/index?format=2&cityname='+encodeURIComponent(city)+'&key=246442fb32a81cb7310c3c0857aa2da8'
        }).then((res)=>{
           let data = res.today;
           let date = new Date();
           let hours = date.getHours();
           let dayurlfa = ''
            let dayrulfb = ''
           if( 8<hours<20 ){
               dayurlfa = '/assets/weather/d'+data.weather_id.fa+'.gif';
               dayrulfb = '/assets/weather/d'+data.weather_id.fb+'.gif';
           }else{
               dayurlfa = '/assets/weather/n'+data.weather_id.fa+'.gif';
               dayrulfb = '/assets/weather/n'+data.weather_id.fb+'.gif';
           }
           this.setState({
               dayPictureUrlfa:dayurlfa,
               dayPictureUrlfb:dayrulfb,
               weather:data.weather,

           })
        }).catch(function (reason) {
            console.log(reason)
        })
    }
    render() {
        return (
            <div className='header'>
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎, {this.state.userName}</span>
                        <a href="/">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{ this.state.sysTime }</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrlfa} alt='' />
                        </span>
                        <span className="weather-detail"> {this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;