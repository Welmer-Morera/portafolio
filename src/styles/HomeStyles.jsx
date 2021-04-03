import Image  from './img/profile2.png'
const Homestayles = () => ({
    
  container:{
        display:'flex',
        justifyContent: 'flexstart',
       // maxWith:'100%'
       
    },
    containerText:{
      display: 'flex',
      alignItems: 'center',
      background: '#D9D9D9',
      borderRadius:'10px'

    },
    containerTextS:{
     
      marginLeft:'10px',
      
      borderRadius:'5px',
     
    },

    imgContainer: {
      height: '80vh',
      width: '100%',
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
			backgroundPosition: "left ",
			backgroundSize: "863px  683px",
			backgroundAttachment: "fixed",
  },
    textOne:{
        fontSize: '50px',
        color: '#0E2431',
      },
      textTwo:{
        color: '#0E2431',
        fontSize: '75px',
        fontWeight: '600',
        marginLeft: '3px',
      },
      textThree:{
        fontSize: '40px',
        margin: '5px 0',
        color:' #545454',
      },
      textFour:{
        fontSize: '23px',
        margin: '5px 0',
        color: '#0E2431',
      }
    
})
 
export default Homestayles