import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './css/Home.css';

const Home = () => {
    return(
        <div className="wrapper">
            <Jumbotron className="head">
                <div id="text">
                    <h1>Welcome to Best Brews Indy!</h1>
                    <p>Our purpose is to provide beer-lovers around the country with information about local craft breweries.</p>
                    <p>Head over to the Breweries tab to search core beers at popular breweries around Indy.</p>
                    <p>Check out the My Reviews tab to keep track of what beers you've tried.</p>
                </div>
            </Jumbotron>
        </div>
    )
}

export default Home;