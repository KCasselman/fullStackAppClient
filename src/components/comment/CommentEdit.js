import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import AuthContext from '../auth/AuthContext';

class CommentEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            brewery: '',
            beerName: '',
            comment: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.comments.id,
            brewery: this.props.comments.brewery,
            beerName: this.props.comments.beerName,
            comment: this.props.comments.comment
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render(){
        return(
            <div>
                <Modal isOpen={true}>
                    <ModalHeader>Log a Review</ModalHeader>
                    <ModalBody>
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
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CommentEdit;
// props => (
//     <AuthContext.Consumer>
//       {auth => <CommentEdit {...props} auth={auth} />}
//     </AuthContext.Consumer>
//   );