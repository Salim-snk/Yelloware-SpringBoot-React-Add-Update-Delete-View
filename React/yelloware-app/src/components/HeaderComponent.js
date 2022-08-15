import React, { Component } from 'react';


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
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://www.yelloware.com.tr/index.php" className="navbar-brand"> Yelloware Management App</a></div>

                        

                        <ul class="list-group">
                            
                            

                          
                        </ul>{'>'}

                    </nav>

                </header>

            </div>
        )
    }
}

export default HeaderComponent;