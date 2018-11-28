import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import AuthContext from '../auth/AuthContext';
// import APIURL from '../../helpers/environment';

class CommentCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            brewery: '',
            beerName: '',
            comment: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://kec-beerapp.herokuapp.com/reviews`, {
            method: 'POST',
            body: JSON.stringify({ reviews: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            this.props.updateCommentsArray();
            this.setState({
                id: '',
                brewery: '',
                beerName: '',
                comment: ''
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Log a Comment</h3>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="brewery">Brewery</Label>
                        <Input type="select" name="brewery" id="brewery" value={this.state.brewery} onChange={this.handleChange} placeholder="Brewery">
                            <option></option>
                            <option value="3 Floyds">3 Floyds</option>
                            <option value="Blind Owl">Blind Owl</option>
                            <option value="Books and Brews">Books and Brews</option>
                            <option value="Four Day Ray">Four Day Ray</option>
                            <option value="Oaken Barrel">Oaken Barrel</option>
                            <option value="Sun King">Sun King</option>
                            <option value="Triton">Triton</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="beerName">Beer Name</Label>
                        <Input id="beerName" type="text" name="beerName" value={this.state.beerName} placeholder="enter beer name" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="comment">Comments</Label>
                        <Input id="comment" type="text" name="comment" value={this.state.comment} placeholder="enter comments" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default CommentCreate;
// props => (
//     <AuthContext.Consumer>
//       {auth => <CommentCreate {...props} auth={auth} />}
//     </AuthContext.Consumer>
//   );