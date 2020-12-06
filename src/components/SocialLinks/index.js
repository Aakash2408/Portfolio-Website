import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/Aakash2408'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/aakash-sangwan-0790aa172/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://t.me/@cooldudeaakash'}
                type={'telegram'}
            />
            <SocialLinks.Link
                url={'mailto:aakashsangwan024@gmail.com'}
                type={'google'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
