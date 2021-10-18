import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AuthProvider from './contexts/AuthProvider';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
         <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>

        </Switch>
         <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
