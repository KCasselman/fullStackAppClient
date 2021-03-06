import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './css/Auth.css';
// import AuthContext from './AuthContext';

const Auth = (props) => {
    // constructor(props) {
    //     super(props);
    // }
    // render(){
        return(
            <div>
                <h1 className="welcome">Welcome to Best Brews Indy!</h1>
                <Container className="auth-container">
                    <Row>
                        <Col md="6">
                            <Signup setToken={props.setToken}/>
                        </Col>
                        <Col med="6" className="login-col">
                            <Login setToken={props.setToken}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
// }

export default Auth;
// props => (
//     <AuthContext.Consumer>
//         {auth => <Auth {...props} auth={auth}/>}
//     </AuthContext.Consumer>
// );

/* <div>
            <form>
                <h1>{ props.formName }</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="emailField"
                        name="email"
                        className="input-field"
                        onChange={ props.changeInputs } //convention to make plural because there are multiple changeInputs in this file
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="passwordField"
                        name="password"
                        className="input-field"
                        onChange={ props.changeInputs } //convention to make plural because there are multiple changeInputs in this file
                    />
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div> */
