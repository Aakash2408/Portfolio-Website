import React from 'react';

import Profile from "./components/Profile/index";


import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";

const routes = [
    { path: '/', name: 'About', Component: About },
    { path: '/resume', name: 'Resume', Component: Resume }
]

function App() {
  return (
      <>
        
          <BackToTop />
          
        <div className="page-wrap">
            <BgBubbles />
            <Router>
                <div className="container">
                    <Menu/>
                    <Profile/>
                    <AnimatedRoutes />
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
