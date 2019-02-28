import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const ArticleItem = () =>(
    <Card fluid>
        <Card.Content>
            <Card.Header>asdafdsfadsfdsf</Card.Header>
            <Card.Description>
                sjd;lasjdklaf;jdskljfaksdljkavlnkdsdjafd
            </Card.Description>
        </Card.Content>
        <Card.Content>
            <Icon.Group size="large">
                <Icon name="user"/>
                小明
            </Icon.Group>
            <Icon.Group style={{marginLeft:'0.5em'}} size="large">
                <Icon name="clock"/>
                2018-19-20
            </Icon.Group>
            <Icon.Group style={{marginLeft:'0.5em', float:'right'}} size="large">
                <Icon name="eye"/>
                18
            </Icon.Group>
            <Icon.Group style={{float:'right'}} size="large">
                <Icon name="comment"/>
                20
            </Icon.Group>
        </Card.Content>
    </Card>
)

export default ArticleItem;