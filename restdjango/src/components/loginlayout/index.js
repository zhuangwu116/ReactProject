import React, {Component} from 'react'
import {Button, Modal, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import logo from "../../logo.svg";

class LoginForm extends Component {
    render() {
        return (
            <Modal trigger={<Button>Show Modal</Button>} open={false}>
                <div className='login-form'>
                    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 480px;
      }
    `}</style>
                    <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                        <Grid.Column style={{maxWidth: 450}}>
                            <Header as='h2' color='teal' textAlign='center'>
                                <Image src={logo}/> Log-in to your account
                            </Header>
                            <Form size='large'>
                                <Segment stacked>
                                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                    />

                                    <Button color='teal' fluid size='large'>
                                        Login
                                    </Button>
                                </Segment>
                            </Form>
                            <Message>
                                New to us? <a href={'/'}>Sign Up</a>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </div>
            </Modal>
        );
    }
}

export default connect(null, null)(LoginForm);