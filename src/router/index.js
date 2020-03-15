import React from 'react';
import ProjectInfiList from '../pages/ProjectInfiList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';


class Index extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={ProjectInfiList} />
            <Route exact path="/ProjectInfiList" component={ProjectInfiList} />
          </Switch>
        </App>
      </Router>
    );
  }
}
export default Index;