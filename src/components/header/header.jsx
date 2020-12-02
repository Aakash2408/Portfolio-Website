import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './header.css';
const scrollTo = require('scroll-to');


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
          <div className="header-wrapper" style={{"height": this.state.height}}>
            <div className="header">
                <h3>Aakash Sangwan</h3>
                <h6>JavaScript Developer </h6>
            </div>
            <div className="scroll-down-btn">
              <Fab mini={true} backgroundColor="#a80202" onClick={this.onScrollToIntro.bind(this)}>
               <KeyboardArrowDownIcon/>
              </Fab>
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
