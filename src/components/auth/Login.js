import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import AuthContext from './AuthContext';
import APIURL from '../../helpers/environment';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
        fetch(`${APIURL}/user/signin`, { //fetch request to the endpoint determined in app.js of server
            method: 'POST', //method of the fetch is a post
            body: JSON.stringify({
                user: 
                 this.state
                
                }), //setting state to user(user correlates to usercontroller.js of server)
            headers: new Headers({
                'Content-Type': 'application/json', //tells server what type of info we are sending to it
            }) 
            
        })
        .then(
            response => response.json() //resolving the promise from fetch and calling .json(), allowing us to turn the response into JSON when it resolves
        )
        .then(data => {
            console.log(data);
            this.props.setToken(data.sessionToken); //resolving the .json promise, and taking the data we get back from the server and then calling our setToken function with the sessionToken we get back in the data object
        });
    };
    
    render() {
        return(
            <div>
                <h1>Login</h1><br/>
                <h6>Please login to access information about local breweries.<br /><br/><br/></h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input id="li_firstName" type="text" pattern=".{1,}" name="firstName" placeholder="enter first name" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input id="li_lastName" type="text" pattern=".{1,}" name="lastName" placeholder="enter last name" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="li_email" type="email" pattern="[^ @]*@[^ @]*.{1,}" name="email" placeholder="enter email" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" pattern=".{6,}" name="password" placeholder="enter password" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;
// props => (
//     <AuthContext.Consumer>
//         {auth => <Login {...props} auth={auth}/>}
//     </AuthContext.Consumer>
// );