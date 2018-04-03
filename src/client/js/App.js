import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Error from './shared/Error';
import Grid from './shared/grid/Grid';
import Area from './shared/grid/Area';
import LoginForm from './login/LoginForm';
import StudentList from './routes/students/StudentList';
import StudentNew from './routes/students/StudentNew';
import StudentDetail from './routes/students/StudentDetail';
import WeekDetail from './routes/weeks/WeekDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Error>
          <Router>
            <Grid
              height="100%"
              gap="20px"
              template={`" top top top top" 50px ".  content content ." auto`}
            >
              <Area area="top">
                <Nav />
              </Area>
              <Area area="content">
                <Switch>
                  <Route exact path="/" component={LoginForm} />
                  <Route
                    path="/students/:studentId/weeks/:id"
                    component={WeekDetail}
                  />
                  <Route path="/students/new" component={StudentNew} />
                  <Route path="/students/:id" component={StudentDetail} />
                  <Route path="/students" component={StudentList} />
                </Switch>
              </Area>
            </Grid>
          </Router>
        </Error>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app-container')
);
