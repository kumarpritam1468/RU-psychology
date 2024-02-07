import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import boxImg from '../../assets/box-img.jpg';
import { MdPermPhoneMsg } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import './Profile.css';

const Profile = () => {
    return (
        <div className='main-bg'>
            <Navbar />
            <div className="profile">
                <div>
                    <h1>Your <span className="colorText">Name</span></h1>
                    <h2 className='colorText'>Doctor/Patient</h2>
                </div>

                <div className="serviceBoxes profileBoxes">
                    <div className="box profileBox">
                        <h2>Get <span className="colorText">Doctor</span> Recommended</h2>
                        <p>Get <span className="colorText">Doctor</span> Recommended by us by answering a few questions</p>
                        <div className="boxImg">
                            <img src={boxImg} alt="" />
                        </div>
                        <Link className="btn">
                            <div className="icn"> <MdArrowOutward/> </div>
                            <a>Get Now</a>
                        </Link>
                    </div>

                    <div className="box profileBox">
                        <h2><span className="colorText">Contact</span> Us!</h2>
                        <p>Do you have any type of <span className="colorText">Query</span> Regarding us, Easily Contact Us...</p>
                        <div className="boxImg">
                            <img src={boxImg} alt="" />
                        </div>
                        <Link className="btn">
                            <div className="icn"> <MdPermPhoneMsg/> </div>
                            <a>Contact</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile