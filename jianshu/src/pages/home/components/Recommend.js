import React, { Component } from 'react';
import { TopicWrapper,TopicItem } from '../style';

class Recommend extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img src="//upload-images.jianshu.io/upload_images/12095765-51de294df7c1f09d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
                    社会热点
                </TopicItem>
            </TopicWrapper>
        );
    }
}
export default Recommend;