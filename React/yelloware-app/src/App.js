import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCandidatComponent from './components/ListCandidatComponent';
import CreateCandidatComponent from './components/CreateCandidatComponent';
import ViewCandidatComponent from './components/ViewCandidatComponent';



function App() {
  return (

    <div>
      <Router>

        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListCandidatComponent} />
            <Route path="//add-candidates/_add" component={ListCandidatComponent} />
            <Route path="/add-candidates/:id" component={CreateCandidatComponent} />
            <Route path="/view-candidates/:id" component={ViewCandidatComponent} />
            
            </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;