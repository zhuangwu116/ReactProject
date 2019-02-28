import React, { Component } from 'react';
import {Container, Segment} from "semantic-ui-react";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Carousel} from "antd";
import ArticleItem from "../../components/articlelist";
import {connect} from 'react-redux';


class ArticlePage extends Component{
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
}

export default connect(null,null)(ArticlePage);

