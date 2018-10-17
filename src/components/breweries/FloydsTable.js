import React from 'react';
import { Table, Button } from 'reactstrap';
import './css/Tables.css';

class FloydsTable extends React.Component {
    constructor() {
        super()
        this.state={}
    }

    hello = () => {
        console.log(this.props.datas)
    }
    render() { 
        return(
            
                <div className="tableWrap">
                    <h3>3 Floyds Brewing Company</h3>
                    <hr />
                    <Table className="table" hover>
                        <thead className="tHead">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Style</th>
                                <th>ABV</th>
                                <th>IBU</th>
                            </tr>
                        </thead>
                        <tbody className="tBody">
                        
                        {this.props.datas.map(value => {
                    return(
                    <tr key={value._id}> 
                    <th className="tData" scope="row">{value.id}</th>
                    <td className="tData">{value.Name}</td>
                    <td className="tData">{value.Style}</td>
                    <td className="tData">{value.ABV}</td>
                    <td className="tData">{value.IBU}</td>
                    </tr>
                        )
                        })} 
                        </tbody>
                    </Table>
                </div>
            );
    }
}

export default FloydsTable;