import React, { Component } from 'react';
import {Container, Segment, Grid} from "semantic-ui-react";
import {Carousel} from "antd";
import ArticleItem from "../../components/articlelist";
import {connect} from 'react-redux';
import { actionCreators } from './store';

class ArticlePage extends Component{
    componentDidMount() {
        this.props.getArticleList();
    }

    render() {
        return (
            <Segment vertical style={{marginTop: '5em', borderBottom: 'none'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Carousel autoplay>
                                    <div><h3>1</h3></div>
                                    <div><h3>2</h3></div>
                                    <div><h3>3</h3></div>
                                    <div><h3>4</h3></div>
                                </Carousel>
                                <ArticleItem/>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                bbbbbbbbbbbbbbbbbbbbbbbbbbb
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
};

const mapState = (state) => {
    console.log(state.getIn(['article', 'articleList']));
    return { list: state.getIn(['article', 'articleList']) }
};

const mapDispatch = (dispatch) => ({
    getArticleList(){
        dispatch(actionCreators.PAGES_ARTICLE_LIST_DATA_ASYC())
    }
});

export default connect(mapState,mapDispatch)(ArticlePage);

