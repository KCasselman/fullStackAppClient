import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AuthContext from './AuthContext';
import APIURL from '../../helpers/environment';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/user/createuser`, { //fetch request to the endpoint determined in app.js of server
            method: 'POST', //method of the fetch is a post
            body: JSON.stringify({user: this.state}), //setting state to user(user correlates to usercontroller.js of server)
            headers: {
                'Content-Type': 'application/json' //tells server what type of info we are sending to it
            }, 
            
        })
        .then(
            response => response.json() //resolving the promise from fetch and calling .json(), allowing us to turn the response into JSON when it resolves
        )
        .then((data) => {
            this.props.auth.setToken(data.sessionToken) //resolving the .json promise, and taking the data we get back from the server and then calling our setToken function with the sessionToken we get back in the data object
        })
        event.preventDefault()
    }

    render() {
        
        return(
            <div>
                <h1>Sign Up</h1><br/>
                <h6>Please create an account to access information about local breweries.<br />Your password must be at least 6 characters long.<br/><br/></h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstname">First Name</Label>
                        <Input id="su_firstname" type="text" pattern=".{1,}" name="firstname" placeholder="enter first name" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lstname">Last Name</Label>
                        <Input id="su_lastname" type="text" pattern=".{1,}" name="lastname" placeholder="enter last name" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="su_email" type="email" pattern="[^ @]*@[^ @]*.{1,}" name="email" placeholder="enter email" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" pattern=".{6,}" name="password" placeholder="enter password" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <Signup {...props} auth={auth}/>}
    </AuthContext.Consumer>
)