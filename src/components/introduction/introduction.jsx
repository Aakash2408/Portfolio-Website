import React, {Component} from 'react';

import Avatar from '@material-ui/core/Avatar';
import './introduction.css';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="https://1xbetbk18.com/games/twentyone/assets/app/avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves Javascript, cats and müsli.
              Professional Cake-Eater. Defender of peace.
              Junior IT Consultant, currently living in Stuttgart, Germany.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
