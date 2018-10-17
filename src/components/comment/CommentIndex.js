import React, { Component } from 'react';
import AuthContext from '../auth/AuthContext';
import { Container, Row, Col } from 'reactstrap';
import CommentCreate from './CommentCreate';
import CommentTable from './CommentTable';
import CommentEdit from './CommentEdit';

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
        fetch('http://localhost:3000/reviews', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
            })
        })
            .then(response => response.json())
            .then(
                (logData) => {
                return this.setState({ comments: logData })
            })
    }
    

    commentDelete = (event) => {
        fetch(`http://localhost:3000/reviews/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ comments: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
            })
        })
        .then(
            res => this.fetchComments())
    }

    commentUpdate = (event, comments) => {
        fetch(`http://localhost:3000/reviews/${comments.id}`, {
            method: 'PUT',
            body: JSON.stringify({ reviews: comments }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
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
                            <CommentCreate updateCommentsArray={this.fetchComments}/>
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

export default props => (
    <AuthContext.Consumer>
      {auth => <CommentIndex {...props} auth={auth} />}
    </AuthContext.Consumer>
  );

// class CommentIndex extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             favorites: []
//         }
//     }

//     fetchFavorites = () => {
//         fetch('http://localhost:3000/favorite', {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': this.props.token
//             })
//         })
//         .then(
//         res => res.json())
//         .then(
//         logData => {
//             return this.setState({ favorites: logData })
//         })
//     }

//     componentDidMount() {
//         this.fetchFavorites()
//     }

//     render() {
//         return(
//             <Container>
//                 <Row>
//                     <Col md="3">
                    
//                     </Col>
//                     <Col md="9">
//                         <h2>Log your favorite beers to see this table will be added in the upcoming modules</h2>
//                     </Col>
//                 </Row>
//             </Container>
//         )
//     }
// }