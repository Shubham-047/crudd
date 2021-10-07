import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing';
import { Route, Switch } from 'react-router';
import Adduser from './Components/AddUser/Adduser';
import Navbar from './Components/Navbar/Navbar';
import Edituser from './Components/EditUser/Edituser';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/add" component={Adduser} />
        <Route exact path="/edit" component={Edituser} />
     </Switch>
    </div>
  );
}

export default App;
