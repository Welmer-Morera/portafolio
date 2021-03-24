import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Home from './home'
import About from './About'
import Skills from './Skills'
const Section = ({title,id}) => {

   const wiew=()=>{
       switch (id) {
           case "home":return <Home />;
           case "about":return <About/>
           case "skills": return <Skills />
           default:
            return <h1>No project match</h1>
       }
   }
    return ( 
        <Container>
        <Box my={10}>
        <div >
      <div  id={id}>
          {wiew()}
              </div>
    </div>
    </Box>
</Container>
     );
}
 
export default Section;