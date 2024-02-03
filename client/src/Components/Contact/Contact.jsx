import React from 'react';
import Navbar from '../Navbar/Navbar';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import contactImg from '../../assets/contact-img.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className='main-bg'>
            <Navbar />
            <section id="c-wrapper">
                <div className="paddings flexCenter innerWidth c-container">
                    <div className="flexColStart c-left">
                        <span className='primaryText' >Easy to contact us!</span>
                        <span className='secondaryText' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla adipisci illum alias sequi non autem veritatis dicta, impedit doloribus accusantium.</span>

                        <div className="flexColStart contactModes">
                            <div className="flexColStart row">
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={20} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span>Call</span>
                                            <span className='secondaryText'>123 456 789</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Call Now!
                                    </div>
                                </div>

                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={20} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span>Message</span>
                                            <span className='secondaryText'>123 456 789</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Call Now!
                                    </div>
                                </div>
                            </div>

                            <div className="flexColStart row">
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={20} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span>Chat</span>
                                            <span className='secondaryText'>123 456 789</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Call Now!
                                    </div>
                                </div>

                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={20} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span>E-mail</span>
                                            <span className='secondaryText'>email@mail.com</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Call Now!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="c-right">
                            <img className='rightImg' src={contactImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact