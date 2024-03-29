import React from 'react';
import { BrowserRouter as Router, Switch,Routes ,Redirect} from 'react-router-dom';
import { Home,Browse,Models,WorkShops} from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
      <Browse />
      </ProtectedRoute>
     
     
      
      <Redirect from='//' to ="3dparadox"/>

      {/*

        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.MODELS}>
          <Models />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.WORKSHOPS}>
          <WorkShops/>
        </IsUserRedirect>
  */}
        
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>

      </Switch>
    </Router>
         
        

  );
}

/*

import React from 'react';
import { BrowserRouter as Router, Switch,Route,Redirect } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';



export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

       
        <Route path="/" component = {Home}/>
        <Redirect from='//' to ="/3dstudio-max-vray-rendering-online-course-training/"/>
       
        <Route path="/3dstudio-max-vray-rendering-online-course-training/" component={Home}/>
         
        </Switch>
    </Router>
  );
}
*/