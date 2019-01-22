import React from 'react';
import { Table, Button } from 'reactstrap';
import './css/Comment.css';
// import AuthContext from '../auth/AuthContext';

const CommentTable = (props) => {
    return(
        <div className="commentTableWrap">
            <h3>Comment History</h3>
            <hr />
            <Table striped className="commentTable">
                <thead className="commentTHead">
                    <tr>
                        <th>#</th>
                        <th>Brewery</th>
                        <th>Beer Name</th>
                        <th>Comments</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="commentTBody">
                {
                    props.comments.map((comments, id) => {
                        return(
                            <tr key={id}>
                                <th className="commentTData" scope="row">{comments.id}</th>
                                <td className="commentTData">{comments.brewery}</td>
                                <td className="commentTData">{comments.beerName}</td>
                                <td className="commentTData">{comments.comment}</td>
                                <td className="commentTData">
                                    <Button className="deleteButton" id={comments.id} onClick={props.delete}>Delete</Button>
                                    <Button className="updateButton" id={comments.id} onClick={e => props.update(e, comments)}>Update</Button>
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
    