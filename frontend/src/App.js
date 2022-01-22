import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Addcustomer from './components/AddCustomer/Addcustomer';
import Home from './components/Home/Home';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/addcustomer'>
            <Addcustomer />
          </Route>
          <Route exact path='/edit'>
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
