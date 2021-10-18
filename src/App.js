import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
         <Header></Header>
         <Home></Home>
        <Switch>
          <Route>
          </Route>

        </Switch>
         <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
