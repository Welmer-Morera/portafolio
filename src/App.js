import  React,{useState,useEffect}  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProReact from './components/ProReact';
import Navbar from './components/Navbar'
import Page from './components/page';
import Footer from './components/Footer'
import Spinner from './components/Spinner'
function App() {
  
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
      setTimeout(()=>setSpinner(false),3000)
    }, [])


  return (
   
    <Router>
      {spinner===false?
       <div >
         
       <Navbar />
         <Switch>
           
         <Route  exact path='/' component={Page}/>
         
           
           <Route path="/Protectos-React" component={ProReact}/>
           
         </Switch>
         <Footer />
     </div>:<Spinner />}
      

      
    </Router>
  );
}

export default App;
