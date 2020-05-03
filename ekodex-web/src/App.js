import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { NoMatch } from './components/pages/NoMatch';
import { Layout } from './components/Layout';
import JumbotronFooter from './components/ui/JumbotronFooter';
import { NavigationBar } from './components/ui/NavigationBar';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <NavigationBar/>
          <Layout>
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About}/>
                <Route exact path='/contact' component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
          <JumbotronFooter/>
        </Provider>
      </React.Fragment>
    );
  }
}



export default App;
