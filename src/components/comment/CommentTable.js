import React from 'react';
import { Table, Button } from 'reactstrap';
import './css/Comment.css';
// import AuthContext from '../auth/AuthContext';

const CommentTable = (props) => {
    return(
        <div>
            <h3>Comment History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Brewery</th>
                        <th>Beer Name</th>
                        <th>Comments</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.comments.map((comments, id) => {
                        return(
                            <tr key={id}>
                                <th scope="row">{comments.id}</th>
                                <td>{comments.brewery}</td>
                                <td>{comments.beerName}</td>
                                <td>{comments.comment}</td>
                                <td>
                                    <Button id={comments.id} onClick={props.delete}>Delete</Button>
                                    <Button id={comments.id} onClick={e => props.update(e, comments)}>Update</Button>
                                </td>
                            </tr>
                        )
                    })
                }   

                    
                </tbody>
            </Table>
        </div>
    );
}

export default CommentTable;
//  props => (
//     <AuthContext.Consumer>
//       {auth => <CommentTable {...props} auth={auth} />}
//     </AuthContext.Consumer>
//   );
    