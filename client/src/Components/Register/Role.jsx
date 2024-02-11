import React from 'react'
import Navbar from '../Navbar/Navbar';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import boxImg from '../../assets/box-img.jpg';
import patient from '../../assets/patient.jpg';

const Role = () => {
    return (
        <div className='main-bg'>
            <Navbar />
            <div className="role serviceBoxes roleBoxes">
                <div className="box roleBox">
                    <h1>Register as a <span className="colorText">Doctor</span></h1>
                    <div className="boxImg">
                        <img src={boxImg} alt="" />
                    </div>
                    <Link className="btn" to='/doctor/register'>
                        <div className="icn"> < MdArrowOutward /> </div>
                        <a>Register</a>
                    </Link>
                </div>
                <div className="box roleBox">
                    <h1>Register as a <span className="colorText">Patient</span></h1>
                    <div className="boxImg">
                        <img src={patient} alt="" />
                    </div>
                    <Link className="btn" to='/patient/register'>
                        <div className="icn"> < MdArrowOutward /> </div>
                        <a>Register</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Role