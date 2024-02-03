import React from 'react';
import Navbar from '../Navbar/Navbar';
import heroRight from '../../assets/hero-right.png';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {

  return (
    <div className='homePage'>

      <div className='homeTop main-bg'>
        <Navbar />
        <div className="hero">
          <div className="left">
            <h1>Consult a <span className="colorText">Psychiatrist</span></h1>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta consequatur sint corporis eos dolorem fugit aut ipsa quam neque.</h3>
            <div className="buttons">
              <Link to='/register' className='btn'>Register</Link>
              <Link to='/consult' className='btn'>Consult Now</Link>
            </div>
          </div>

          <div className="right">
            <img src={heroRight} alt="" />
          </div>
        </div>
      </div>


      <div className="homeMid main-bg">
        <h1>Our <span className="colorText">Services</span></h1>

        <div className="serviceBoxes">
          <div className="box">
            <i className='bx bx-x'></i>
            <h1>Emergency Consult</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a dolores consequuntur suscipit culpa, esse eos nesciunt officia delectus. Itaque?</p>
            <div className="btn">Contact Now</div>
          </div>

          <div className="box">
            <i className='bx bx-x'></i>
            <h1>Emergency Consult</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a dolores consequuntur suscipit culpa, esse eos nesciunt officia delectus. Itaque?</p>
            <div className="btn">Contact Now</div>
          </div>

          <div className="box">
            <i className='bx bx-x'></i>
            <h1>Emergency Consult</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a dolores consequuntur suscipit culpa, esse eos nesciunt officia delectus. Itaque?</p>
            <div className="btn">Contact Now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero