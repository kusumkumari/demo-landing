import logo from './logo.svg';
import './App.css';
import { Route,Link,Switch} from 'react-router-dom'
import Nav from './Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/404'


function App() {
  return (
    <div className="App">
      <h1> Router Management </h1>
          <Nav />
          <Switch>
            <Route path='/about'>    <About /></Route>
            <Route path='/contact'>  <Contact /> </Route>
                        <Route path='/' exact={true}>     <Home /> </Route>
            <Route path='*'>     <PageNotFound /> </Route>
          </Switch>
    </div>
  );
}

export default App;
