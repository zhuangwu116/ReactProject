import React, {Component} from 'react';
import {Card, Button, Spin, Icon, Alert} from "antd";

class Loading extends Component{
    render(){
        return(
            <div>
                <Card title='Spin 用法' className='class-Wrap'>
                    <Spin></Spin>
                </Card>
            </div>
        );
    }
}
export default Loading;