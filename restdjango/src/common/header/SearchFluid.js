import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Search, Grid, Container } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { searchActions } from "../../core/articlelists/search";

const resultRenderer = ({ id, title }) =>{
    return (
        <Container>
            <p>{title}</p>
        </Container>
    )
}
resultRenderer.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number
}


class SearchExampleStandard extends Component {
    componentWillMount() {
        this.props.resetComponent()
    }
    render() {
        const { isLoading, value, results,handleResultSelect,handleSearchChange } = this.props;
        return (

            <Grid>
                <Grid.Column width={16}>
                    <Search
                        fluid
                        loading={isLoading}
                        onResultSelect={handleResultSelect}
                        onSearchChange={_.debounce(handleSearchChange, 500, { leading: true })}
                        results={results}
                        resultRenderer={resultRenderer}
                        value={value}
                    />
                </Grid.Column>
            </Grid>
        )
    }
}
const mapStateToProps = (state) => {
        const list = state.getIn(['article','searchResults'])
        const tem_results = list.map((item, index)=>({
            id: item.get('id'),
            title: item.get('title')
        }))
        return {
            isLoading: state.getIn(['article', 'issearchLoading']),
            value: state.getIn(['article', 'searchValue']),
            results: [...tem_results]
        }
}
const mapDispatchToProps = {
    resetComponent: searchActions.resetComponent,
    handleResultSelect: searchActions.handleResultSelect,
    handleSearchChange: searchActions.handleChangeSearch,
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchExampleStandard)