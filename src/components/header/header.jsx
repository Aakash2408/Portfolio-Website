import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab';
import  { BrowserRouter as Router, Route ,Link}  from 'react-router-dom';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {PDFDownloadLink} from  '@react-pdf/renderer';
import Download from '@axetroy/react-download';
import uploadedFileLink from "./Aakash's_Resume.pdf";
import './header.css';
import color from 'material-ui/colors/amber';
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
                <div className="resumesection">
                <a href={"https://docs.google.com/document/d/1AE-93M5oz5rHCTG1Gti9IQMFQ4dwgjIkB2kJ1bxLYss/edit?usp=sharing"} style={{ textDecoration: 'none', color:"white" }}  target="_blank" rel="noopener noreferrer" download="Aakash's_Resume.pdf">
   <Button variant="contained" color="secondary">
      {/* <i className="fas fa-download"/> */}
      Resume
   </Button>
</a>
                
                </div>
            </div>
            <div className="scroll-down-btn">
              <Fab className="MuiFab-secondary MuiFab-sizeSmall">
               <KeyboardArrowDownIcon onClick={this.onScrollToIntro.bind(this)}/>
              </Fab>
            </div>


          </div>
        );
    }
}

export default HeaderComponent;
