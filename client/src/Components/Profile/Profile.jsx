import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Profile.css';
// import '../Hero/Hero.css';

const Profile = () => {
    return (
        <div className='main-bg'>
            <Navbar />
            <div className="profile">
                <div className="profileCard">
                    <div className='profileName'>
                        <h1>Your <span className="colorText">Name</span></h1>
                        <h2 className='colorText'>Doctor/Patient</h2>
                    </div>
                    <div className="box">
                        hdkjgvskjgcvd
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile