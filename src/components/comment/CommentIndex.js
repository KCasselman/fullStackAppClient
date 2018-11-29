import React, { Component } from 'react';
// import AuthContext from '../auth/AuthContext';
import { Container, Row, Col } from 'reactstrap';
import CommentCreate from './CommentCreate';
import CommentTable from './CommentTable';
import CommentEdit from './CommentEdit';
import APIURL from '../../helpers/environment';

class CommentIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            updatedPressed: false,
            commentToUpdate: {}
        }
    }

    componentDidMount() {
            this.fetchComments()
        }

    fetchComments = () => {
        fetch(`${APIURL}/reviews`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then(response => response.json())
        .then((logData) => {
                return this.setState({ comments: logData })
            })
    }
    

    commentDelete = (event) => {
        fetch(`${APIURL}/reviews/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ comments: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then(
            res => this.fetchComments())
    }

    commentUpdate = (event, comments) => {
        fetch(`${APIURL}/reviews/${comments.id}`, {
            method: 'PUT',
            body: JSON.stringify({ reviews: comments }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => {
            this.setState({ updatedPressed: false })
            this.fetchComments();
           
        })
        
    }

    setUpdatedComment = (event, comments) => {
        this.setState({
            commentToUpdate: comments,
            updatedPressed: true
        })
    }

    

    render(){
        const comments = this.state.comments.length >= 1 ?
        <CommentTable comments={this.state.comments} delete={this.commentDelete} update={this.setUpdatedComment} /> :
         <h2>Log a comment to see table</h2>
        return(
            <div>
                <Container>
                    <Row>
                        <Col md="3">
                            <CommentCreate sessionToken={this.props.sessionToken} updateCommentsArray={this.fetchComments}/>
                        </Col>
                        <Col md="9">
                            {comments}
                        </Col>
                        <Col md="12">
                            {
                                this.state.updatedPressed ? <CommentEdit t={this.state.updatedPressed} update={this.commentUpdate} comments={this.state.commentToUpdate}/>
                                : <div></div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CommentIndex;