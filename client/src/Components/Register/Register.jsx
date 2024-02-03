import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Register.css';

const Register = () => {

    const [hiddenPart, setHiddenPart] = useState('signinpart');
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
    });

    const handleButtonClick = (part) => {
        setHiddenPart(part);
    }

    let name,value;
    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({... user, [name]:value});
    }

    return (
        <div className='main-bg'>
            <Navbar/>
            <section className="sign-in-page">
                <div className="container">
                    <span className={`form__title ${hiddenPart === 'signuppart'?'hidden':''}`} id="signup-title">Sign up</span>
                    <form className={`form ${hiddenPart === 'signuppart'?'hidden':''}`} id="signup-form">
                        <div className="form__group">
                            <i className="ri-user-line form__icon"></i>
                            <input type="text" placeholder="Name" required className="form__input"
                                name='name'
                                value={user.name}
                                onChange={handleInput}
                            />
                            <span className="form__bar"></span>
                        </div>
                        <div className="form__group">
                            <i className="ri-mail-line form__icon"></i>
                            <input type="text" placeholder="Email" required className="form__input"
                                name='email'
                                value={user.email}
                                onChange={handleInput}
                             />
                            <span className="form__bar"></span>
                        </div>
                        <div className="form__group">
                            <i className="ri-phone-line form__icon"></i>
                            <input type="text" placeholder="Phone" required className="form__input"
                                name='phone'
                                value={user.phone}
                                onChange={handleInput}
                             />
                            <span className="form__bar"></span>
                        </div>
                        <div className="form__group">
                            <i className="ri-lock-line form__icon"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="form__input"
                                name='password'
                                value={user.password}
                                onChange={handleInput}
                            />
                            <span className="form__bar"></span>
                        </div>
                        <div className="form__group">
                            <i className="ri-lock-line form__icon"></i>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                required
                                className="form__input"
                                name='cpassword'
                                value={user.cpassword}
                                onChange={handleInput}
                            />
                            <span className="form__bar"></span>
                        </div>
                        <button type="submit" className="form__button">Sign up</button>
                        <p className="form__switch ">
                            Already have an account? <Link className={`${hiddenPart === 'signuppart'?'hidden':''}`} id="signin-btn" onClick={() => handleButtonClick('signuppart')}>Login</Link>
                        </p>
                    </form>


                    <span className={`form__title ${hiddenPart === 'signinpart'?'hidden':''}`} id="signin-title">Sign In</span>
                    <form className={`form ${hiddenPart === 'signinpart'?'hidden':''}`} id="signin-form">
                        <div className="form__group">
                            <i className="ri-mail-line form__icon"></i>
                            <input type="text" placeholder="Email" required className="form__input" />
                            <span className="form__bar"></span>
                        </div>
                        <div className="form__group">
                            <i className="ri-lock-line form__icon"></i>
                            <input type="password" placeholder="Password" required className="form__input" />
                            <span className="form__bar"></span>
                        </div>
                        <button type="submit" className="form__button " >Sign in</button>
                        <p className="form__switch">
                            Don't have an account? <Link className={`${hiddenPart === 'signinpart'?'hidden':''}`} id="signup-btn" onClick={() => handleButtonClick('signinpart')}>Sign up</Link>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register;