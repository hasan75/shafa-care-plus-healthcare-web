import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
         <Header></Header>
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
