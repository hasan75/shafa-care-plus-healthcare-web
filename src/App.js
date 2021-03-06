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
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Doctors from './components/Doctors/Doctors';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import Reset from './components/Reset/Reset';
import PrivateRoute from './Route/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';

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
          <Route exact path='/appointment'>
            <Services></Services>
            <Doctors></Doctors>
          </Route>
          <PrivateRoute exact path='/cart'>
            <Cart></Cart>
          </PrivateRoute>
          <Route exact path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <PrivateRoute exact path='/services/:key'>
            <Details></Details>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/signup'>
            <Signup></Signup>
          </Route>
          <Route exact path='/reset'>
            <Reset></Reset>
          </Route>
          <Route path='*'>
             <PageNotFound></PageNotFound>
          </Route>

        </Switch>
         <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
