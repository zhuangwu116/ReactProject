import React from 'react';
import { Tab, List } from 'semantic-ui-react';
import ArticleItem from "../articlelist";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid";

const PaneComment = (props) => {
    return (<List as='ol'>
        {
            props.props.props.map((item,index)=>{
                return (<List.Item as='li' key={item.get('id')}>{item.get('title')}</List.Item>)
            })

        }
    </List>)
}
const ArticleTab = (props) => {
    const panes = [
        { menuItem: '评论排行', render: ()=><Tab.Pane><PaneComment props={props}/></Tab.Pane>}
    ]
    return (<Tab panes={panes}/>)
}

export default ArticleTab;