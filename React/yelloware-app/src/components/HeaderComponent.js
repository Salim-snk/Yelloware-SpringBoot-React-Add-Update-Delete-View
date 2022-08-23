import React, { Component } from 'react'


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <div class="header">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div><a href="https://www.yelloware.com.tr/index.php" className="navbar-brand"> Yelloware Management App</a></div>
                            <div class="topnav">
                                <nav>
                                    <ul>
                                        <li><a class="active" href="/">Home</a></li>
                                        <li><a href="/view-candidates/:id">View</a></li>

                                        <li><a href="/upload">CV upload</a></li>

                                        <li><a href="/login">Login</a></li>
                                        <li><a href="/register">Register</a></li>

                                        <input type="text" placeholder="Search.." />
                                        
                                    </ul>
                                    
                                </nav>


                            </div>

                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;


