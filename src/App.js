import React from 'react';
import {Route} from 'react-router-dom'


import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

const App = () => {

  return (
      <div className="wrapper">
          <Route exact  path={['/', '/login']} component={Auth}/>
          <Route path={'/im'} component={Home} />
          {/*<Auth/>*/}
      </div>
  )
};

export default App;