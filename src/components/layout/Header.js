import React, { Component } from 'react';
import './css/Header.css';
import BreweriesIndex from '../breweries/BreweriesIndex';
import CommentIndex from '../comment/CommentIndex';
import Home from '../layout/Home';
import Logo from '../../assets/NewEditedLogo.jpg';
import Auth from '../auth/Auth';
import AuthContext from '../auth/AuthContext';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container
} from 'reactstrap';
import { Switch, Route } from 'react-router-dom';

class SiteBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
  }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    protectedViews = () => {
      if (this.props.auth.sessionToken === localStorage.getItem("sessionToken")){
        return <Home />
      } else {
        return <Auth />
      }
    };

    render(){
      return(
        <div>
          {/* This is my navbar menu */}
          <div className="navBar">
          <Navbar dark className="bar" expand="md">
            <NavbarBrand href="/" >
            <a className="logoFloat" href="/"> {/*Change href to home page*/}
               <img className="logo" src={Logo} alt={Logo} style={{ height: 100, width: 125 }}/>
            </a>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="link">
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem className="link">
                  <NavLink href="/breweries">Breweries</NavLink>
                </NavItem>
                <NavItem className="link">
                  <NavLink href="/reviews">My Reviews</NavLink>
                </NavItem>
                <NavItem>
                  <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Container>{this.protectedViews()}</Container>
          </div>
          {/*My navbar sets which route i see below
          */}
          <div>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/breweries"><BreweriesIndex /></Route>
            <Route exact path="/reviews"><CommentIndex /></Route>
          </Switch>
          </div>
        </div>
        );
      }
  }
  
  export default props => (
    <AuthContext.Consumer>
      {auth => <SiteBar {...props} auth={auth} />}
    </AuthContext.Consumer>
  );



//   this.state = {
    //     openMenu: false,
    //   };
      
    //   this.openMenu = this.openMenu.bind(this); //bind reassigns this
    //   this.closeMenu = this.closeMenu.bind(this);
    // }

// openMenu(e) {
    //   e.preventDefault();
      
    //   this.setState({ openMenu: true }, () => {
    //     document.addEventListener('click', this.closeMenu);
    //   });
    // }
    
    // closeMenu(e) {
      
    //   if (!this.dropdownMenu.contains(e.target)) {
        
    //     this.setState({ openMenu: false }, () => {
    //       document.removeEventListener('click', this.closeMenu);
    //     });  
        
    //   }
    // }

// <div>
        //   <header className="navbar">
        //     <a className="logoFloat" href="/"> {/*Change href to home page*/}
        //       <img className="logo" src={Logo} alt={Logo}/>
        //     </a>
        //   <div className="button myAcct">
        //     <button className="normBut" onClick={this.openMenu}>
        //       My Account
        //     </button>
        //       {this.state.openMenu ? (
        //       <div
        //         className="menu"
        //         ref={(element) => {
        //         this.dropdownMenu = element;
        //         }}>
        //         <button className="dropBut"> Log In </button>
        //         <button className="dropBut"> Favorites </button>
        //         <button className="dropBut"> Log Out </button>
        //       </div>
        //       )
        //       : (null)}
        //   </div>
        //   <div className="button">
        //     <button className="normBut">
        //       About Us
        //     </button>
        //     <button className="normBut">
        //       Breweries
        //     </button>
        //     <button className="normBut">
        //       Contact
        //     </button>
        //   </div>
        //   </header>
        // </div>

