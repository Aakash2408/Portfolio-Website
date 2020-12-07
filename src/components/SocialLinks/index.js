import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/TheCoderDream'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/emrebaskan/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://t.me/emre6askan'}
                type={'telegram'}
            />
            <SocialLinks.Link
                url={"mailto:aakashsangwan024@gmail.com"}
                type={'google'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
