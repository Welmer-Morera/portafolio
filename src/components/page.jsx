import React,{Fragment} from 'react'
import Section from './Section'
const Page = () => {
    return ( 
    <Fragment>
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



    </Fragment>

     );
}
 
export default Page;