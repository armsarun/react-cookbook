// let's go!
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './components/app';
import StorePicker from './components/storepicker';
import NotFound from './components/notfound';


const Root = () => {
  return (
  <Router>
    <div>
    {/*Switch used to work like the switch case
      helps to render yhe route properly without this NotFound
      renders in all component*/}
    <Switch>
      <Route exact path="/" component={StorePicker}/>
      <Route path="/store/:storeId" component={App}/>
      <Route component={NotFound}/>
    </Switch>
    </div>
  </Router>
)
}

export default Root;
render(<Root/>, document.querySelector('#main'))

/* JSX can't return two element only return one. If you want to return
  it should be wrap inside div tag like above */
/* JSX comments need to write like this*/
