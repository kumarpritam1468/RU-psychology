import './App.css';
import Hero from './Components/Hero/Hero'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from './Components/Register/Register';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Consult from './Components/Consult/Consult';

function App() {

  return (
    <>
    <Router>
      <Routes>

        <Route exact path='/' element={<Hero/>}/>
        <Route exact path='/consult' element={<Consult/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/contact' element={<Contact/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App
