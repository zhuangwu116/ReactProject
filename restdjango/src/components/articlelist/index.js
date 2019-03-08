import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import dataformat from '../../utils';

const ArticleItem = (props) =>(
    <Card fluid>
        <Card.Content>
            <Card.Header>{props.props.get('title')}</Card.Header>
            <Card.Description>
                {props.props.get('desc')}
            </Card.Description>
        </Card.Content>
        <Card.Content>
            <Icon.Group size="large">
                <Icon name="user"/>
                {props.props.getIn(['user', 'username'])}
            </Icon.Group>
            <Icon.Group style={{marginLeft:'0.5em'}} size="large">
                <Icon name="clock"/>
                { dataformat(props.props.get('date_publish')) }
            </Icon.Group>
            <Icon.Group style={{marginLeft:'0.5em', float:'right'}} size="large">
                <Icon name="eye"/>
                {props.props.get("click_count")}
            </Icon.Group>
            <Icon.Group style={{float:'right'}} size="large">
                <Icon name="comment"/>
                {props.props.get("comment_count")}
            </Icon.Group>
        </Card.Content>
    </Card>
)

export default ArticleItem;