import React ,{Fragment}  from 'react';
import Navbar from './Navbar'
import Section from './Section'
import Footer from './Footer'

const AppI = () => {
    return ( 
        <Fragment>
            <Navbar />
            
            <Section 
            title="Home"
            id="home"
            />
             <Section 
            title="About"
            id="about"
            />
            <Section 
            title="Skills"
            id="skills"
            />
           <Footer />
        
           
          


        </Fragment>
      
     )
}
 
export default AppI;