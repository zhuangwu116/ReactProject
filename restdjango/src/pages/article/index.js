import React, { Component } from 'react';
import {Container, Segment, Grid, Pagination, Icon } from "semantic-ui-react";
import {Carousel} from "antd";
import {connect} from 'react-redux';
import ArticleItem from "../../components/articlelist";
import { articlelistActions } from '../../core/articlelists';
import {categorysActions} from '../../core/articlelists/categorys';

class ArticlePage extends Component{
    componentWillMount() {
        this.props.loadArticles();
        this.props.willMountDropdown();
    }
    componentWillUnmount() {
        this.props.willUnMountDropdown();
    }

    render() {
       const {list, totalpage, updateArticlesPagination} = this.props;

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
                                {
                                    list.map((item,index)=>{
                                       return (<ArticleItem key={item.get('id')} props={item}/>)
                                    })
                                }
                                <Pagination
                                    style = {{float: 'right'}}
                                    defaultActivePage={1}
                                    onPageChange={updateArticlesPagination}
                                    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                                    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                                    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                                    prevItem={{ content: <Icon name='angle left' />, icon: true }}
                                    nextItem={{ content: <Icon name='angle right' />, icon: true }}
                                    totalPages={totalpage}
                                />
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

const mapState = (state) => ({
        list: state.getIn(['article', 'articleList']),
        totalpage: state.getIn(['article', 'totalpage']),
});
const mapDispathchToProps = {
    loadArticles: articlelistActions.loadArticles,
    updateArticlesPagination: articlelistActions.updateArticlesPagination,
    willMountDropdown: categorysActions.willMountDropdown,
    willUnMountDropdown: categorysActions.willUnMountDropdown,
}
export default connect(mapState, mapDispathchToProps)(ArticlePage);

