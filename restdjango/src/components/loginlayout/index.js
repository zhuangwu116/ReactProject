import React, {Component} from 'react'
import {Button, Modal, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import logo from "../../logo.svg";
import {authActions} from "../../core/auth";

class LoginForm extends Component {
    render() {
        const {isopen, handleClose, username, password, handlesubmit,
            handleUserNameChange, handlePasswordChange} = this.props;
        return (
            <Modal  open={isopen}
                   onClose={handleClose}
                    closeOnEscape={true}
                    closeOnDimmerClick={true}
            >
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
                                    <Form.Input fluid icon='user' name='username' value={username} onChange={handleUserNameChange} iconPosition='left' placeholder='username or telphone'/>
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        name='password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />

                                    <Button onClick={handlesubmit} color='teal' fluid size='large'>
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
const mapStateToProps = (state) => ({
    isopen: state.getIn(['auth', 'isopenmodal']),
    username: state.getIn(['auth',' username']),
    password: state.getIn(['auth',' password'])
});
const mapDispathchToProps = {
    handleClose: authActions.handleclosemodal,
    handleUserNameChange: authActions.handleUserNameChange,
    handlePasswordChange: authActions.handlePasswordChange,
    handlesubmit: authActions.handleloginSubmit
}
export default connect(mapStateToProps, mapDispathchToProps)(LoginForm);