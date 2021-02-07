import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import LogIn from './components/LogIn/LogIn';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {

  const [loggedInUser , setLoggedInUser] = useState({});
  return (
   <userContext.Provider value = { [loggedInUser , setLoggedInUser] }>
    <Router>
    {<h2>{loggedInUser.email}</h2>}
       <Header></Header>
    
            <Switch> 

            <Route path exact = '/'>
                                <Shop></Shop>
                   </Route>

                   <Route path = '/shop'>
                                <Shop></Shop>
                   </Route>

                   <Route path = '/review'>
                                 <Review></Review>
                   </Route>
                   
                   <Route path = "/product/:productKey">
                                <ProductDetail></ProductDetail>
                   </Route>

                   <PrivateRoute path = '/manage'>
                                <Manage></Manage>
                   </PrivateRoute>
                    
                    
                   <Route path = '/login'>
                               <LogIn></LogIn>
                   </Route>

                   <PrivateRoute path = '/shipment'>
                              <Shipment></Shipment>
                   </PrivateRoute>


 
                 

                   <Route path  = '*'>
                                <NoMatch></NoMatch>
                   </Route>
          
            </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
