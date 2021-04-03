import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {

    render() {
        return(
            <React.Fragment>
                <Navbar dark color="dark">
                    <div>
                        <NavbarBrand href="/">
                            <img src="/assets/images/logo.png" height="40" width="40" alt="SWAPI"></img>
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-3">
                                <img src="/assets/images/jumbotron.png" height="200" width="200" alt="VADER"></img>
                            </div>
                            <div className="col-12 col-sm-6">
                                <h1>Star Wars Characters</h1>
                                <p>
                                    Enjoy information about your favourite Star Wars Characters from SWAPI!
                                    <br></br>May the Force Be With You.
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;


