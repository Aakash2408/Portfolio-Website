import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
// import MyPDF from './Aakash_Resume.pdf';

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src="https://i.ibb.co/wZHGd76/47134609.jpg" alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Aakash Sangwan
                </div>
                <TypedText
                  dataText={
                      [
                          'Freelancer',
                          'Frontend Developer',
                          'Backend Developer'
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    Haryana/India
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1mLTwbjepQAdwrBhpt4mXb9QMJ_blZD06/view?usp=sharing" target="_blank" rel="noreferrer" >
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:aakashsangwan024@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
