import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem} from '../style'
import {connect} from 'react-redux';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item)=>{
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                        )
                    })
                }
            </RecommendWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'recommendList']),
    }
}
export default connect(mapStateToProps, null)(Recommend);