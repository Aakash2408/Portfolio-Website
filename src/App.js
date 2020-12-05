import React from 'react';

import Profile from "./components/Profile/index";


import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";

// import BackToTop from "./components/BackToTop";

// const routes = [
//     { path: '/', name: 'About', Component: About },
//     { path: '/resume', name: 'Resume', Component: Resume }
// ]

function App() {
  return (
      <>
        
          {/* <BackToTop /> */}
          
        <div className="page-wrap">
         
            <Router>
                <div className="container">
                   
                    <Profile/>
                   
                </div>
            </Router>
        </div>
        {/* <div className="section header-section">
            <div className="section-container header-component">
              <Header></Header>
            </div>
      </div> */}
      </>
  );
}
export default App;
