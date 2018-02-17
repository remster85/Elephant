import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ApplicationListPage from './pages/application-list-page';
import ApplicationFormPage from './pages/application-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Applications List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/applications/new">Add Application</NavLink>
        </div>
        <Route exact path="/" component={ApplicationListPage}/>
        <Route path="/applications/new" component={ApplicationFormPage}/>
        <Route path="/applications/edit/:_id" component={ApplicationFormPage}/>
      </Container>
    );
  }
}

export default App;
