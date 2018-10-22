import React, { Component } from 'react';
import BlindTable from './BlindTable';
import BooksTable from './BooksTable';
import FloydsTable from './FloydsTable';
import FourTable from './FourTable';
import OakenTable from './OakenTable';
import SunkingTable from './SunkingTable';
import TritonTable from './TritonTable';
import AuthContext from '../auth/AuthContext';
import { Container, Row, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import './css/BreweriesIndex.css';
// import APIURL from '../../helpers/environment';

class BreweriesIndex extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            brewery: [],
            showBeer: false,
            brew: '',
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    showFloyds = () => {
        if(this.state.showBeer === true && this.state.brew === 'floyds') {
        return <FloydsTable datas={this.state.brewery}  />
        } else {
            return ''
        }
    }

    showBlind = () => {
        if(this.state.showBeer === true && this.state.brew === 'blind') {
        return <BlindTable datas={this.state.brewery}  />
        } else {
            return ''
        }
    }

    showBooks = () => {
        if(this.state.showBeer === true && this.state.brew === 'books') {
        return <BooksTable datas={this.state.brewery}  />
        } else {
            return ''
        }
    }

    showFour = () => {
        if(this.state.showBeer === true && this.state.brew === 'four') {
        return <FourTable datas={this.state.brewery}  />
        } else {
            return ''
        }
    }

    showOaken = () => {
        if(this.state.showBeer === true && this.state.brew === 'oaken') {
        return <OakenTable datas={this.state.brewery}  />
        } else {
            return ''
        }
    }

    showSunking = () => {
        if(this.state.showBeer === true && this.state.brew === 'sunking') {
        return <SunkingTable datas={this.state.brewery}  />
        } else {
            return ''
        }
    }

    showTriton = () => {
        if(this.state.showBeer === true && this.state.brew === 'triton') {
        return <TritonTable datas={this.state.brewery}  />
        } else {
            return ''
        }
    }

    fetchFloyds = () => {
        fetch(`http://localhost:3000/floyds/beers`, {
         method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.auth.sessionToken
            }
        })
        .then(
        res => res.json())
        .then(
        logData => { 
            this.setState({ brewery: logData, showBeer: true })
        });
        this.setState({brew: 'floyds'})
    }

    fetchBlind = () => {
            fetch(`http://localhost:3000/blind/beers`, {
             method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.auth.sessionToken
                })
            })
            .then(
            res => res.json())
            .then(
            logData => { 
                this.setState({ brewery: logData, showBeer: true })
            });
            this.setState({brew: 'blind'})
        }

        fetchBooks = () => {
            fetch(`http://localhost:3000/books/beers`, {
             method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.auth.sessionToken
                })
            })
            .then(
            res => res.json())
            .then(
            logData => { 
                this.setState({ brewery: logData, showBeer: true })
            });
            this.setState({brew: 'books'})
        }

        fetchFour = () => {
            fetch(`http://localhost:3000/four/beers`, {
             method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.auth.sessionToken
                })
            })
            .then(
            res => res.json())
            .then(
            logData => { 
                this.setState({ brewery: logData, showBeer: true })
            });
            this.setState({brew: 'four'})
        }

        fetchOaken = () => {
            fetch(`http://localhost:3000/oaken/beers`, {
             method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.auth.sessionToken
                })
            })
            .then(
            res => res.json())
            .then(
            logData => { 
                this.setState({ brewery: logData, showBeer: true })
            });
            this.setState({brew: 'oaken'})
        }

        fetchSunking = () => {
            fetch(`http://localhost:3000/sunking/beers`, {
             method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.auth.sessionToken
                })
            })
            .then(
            res => res.json())
            .then(
            logData => { 
                this.setState({ brewery: logData, showBeer: true })
            });
            this.setState({brew: 'sunking'})
        }

        fetchTriton = () => {
            fetch(`http://localhost:3000/triton/beers`, {
             method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.auth.sessionToken
                })
            })
            .then(
            res => res.json())
            .then(
            logData => { 
                this.setState({ brewery: logData, showBeer: true })
            });
            this.setState({brew: 'triton'})
        }

    render() {
        return(
            <div>
                <div>
                    <Container>
                        <Row>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle className="beerDrop" caret>
                            Choose Brewery
                            </DropdownToggle>
                                <DropdownMenu>
                            
                                    <DropdownItem onClick={this.fetchFloyds}>3 Floyds</DropdownItem>
                                    <DropdownItem divider/>
                            
                                    <DropdownItem onClick={this.fetchBlind}>Blind Owl</DropdownItem>
                                    <DropdownItem divider/>
                            
                                    <DropdownItem onClick={this.fetchBooks}>Books and Brews</DropdownItem>
                                    <DropdownItem divider/>
                            
                                    <DropdownItem onClick={this.fetchFour}>Four Day Ray</DropdownItem>
                                    <DropdownItem divider/>
                            
                                    <DropdownItem onClick={this.fetchOaken}>Oaken Barrel</DropdownItem>
                                    <DropdownItem divider/>
                            
                                    <DropdownItem onClick={this.fetchSunking}>Sun King</DropdownItem>
                                    <DropdownItem divider/>
                            
                                    <DropdownItem onClick={this.fetchTriton}>Triton</DropdownItem>

                                </DropdownMenu>
                            </Dropdown>
                        </Row>
                    </Container>
                </div>
                <div>
                    {this.showFloyds()}
                    {this.showBlind()}
                    {this.showBooks()}
                    {this.showFour()}
                    {this.showOaken()} 
                    {this.showSunking()}
                    {this.showTriton()}              
                </div> 
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
      {auth => <BreweriesIndex {...props} auth={auth} />}
    </AuthContext.Consumer>
  );