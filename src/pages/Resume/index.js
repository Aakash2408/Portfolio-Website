import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume 
            </Title>
            <ResumeItem
                date={'Dec 2019 - Feb 2020'}
                title={'React Developer'}
                company={'Tribe on Expedition'}
                logo={'data:image/jpeg;base64,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'}
            >
                • Worked on their new website from scratch in ​ React js .<br></br>
                • Built responsive frontend of the progressive web-app.<br></br>
                • Learned and implemented ​ Redux f​ or state management
                </ResumeItem>
            <ResumeItem
                date={'Feb 2020 – Aug 2020'}
                title={'Freelance Developer & Mentor'}
                company={'Codementor'}
                logo={'https://upload.wikimedia.org/wikipedia/commons/f/fc/Codementor_CIS.png'}
            >
                •Worked as a Freelance mentor<br></br>
                •Implemented ​ vanilla JS ​ in  2 mini game projects.<br></br>
                •Used Vue js and node js for a​ BBQ-grill Delivery Project<br></br>
                •​Took online doubt sessions of ​ Data Structures and C++.<br></br>
            </ResumeItem>
           
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2018 – 2022'}
                title={'USICT-GGSIPU'}
                company={'Turkey'}
                logo={'https://img.collegepravesh.com/2015/09/GGSIPU-Logo.png'}
            >
                Bachelor's  of Technology - Computer Science
            </ResumeItem>
        </div>
    );
};

export default Resume;
