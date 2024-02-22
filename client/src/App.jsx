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
import Role from './Components/Register/Role';
import Error from './Components/Error/Error';

function App() {

  return (
    <>
    <Router>
      <Routes>

        <Route exact path='/' element={<Hero/>}/>
        <Route exact path='/consult' element={<Consult/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/register' element={<Role/>}/>
        <Route exact path='/doctor/register' element={<Register/>}/>
        <Route exact path='/patient/register' element={<Register/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='*' element={<Error/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App
