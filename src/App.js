
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Details from './components/Details'
import Error from './components/Error';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    
  <>
    <Header/>
    <Routes>
      <Route path='/' element = {<Signup/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/details' element = {<Details/>}/>
      <Route path='*' element = {<Error/>}/>
      <Route path = '/home' element = {<Home/>}/>
    </Routes>
   
  </>
  );
}

export default App;
