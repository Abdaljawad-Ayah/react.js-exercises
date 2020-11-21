import React,{ useState } from 'react'
import { FaGithub , FaLinkedin , FaFacebook, FaInstagram} from 'react-icons/fa';

// import { IconContext } from 'react-icons'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Card6.css'

function Card6() {
  const [name] = useState('Ahmad Emar');
  const [place] = useState('Amman / Jordan');
  const [job] = useState('Full stack developer');
  const [about] = useState(' Your data can tell me way more than your mother ever do');
 

  return (
    // Card
    
  <div className="Card6">
     {/* Upper Container */}
   

     <div className='upper-container6'>
  <button class="btn"><i class="fa fa-pencil"></i>
  </button>
     {/* Image Container */}

       <div className='image-container6'>
       
       {/* Image */}
      <img src={process.env.PUBLIC_URL + "/Ahmad.jpg"} alt="Images" height="150px" width="150px" />
      </div>
    </div>

     {/* Lower Container */}
     
    <div className="lower-container6">
       <h2>{ name }</h2>
       <small><b>{ place }</b></small> <br/>
       <small><b>{ job }</b></small> <br/> <br/>
       <h5 className="h5">{ about }</h5> <br/> <br/>
       {/* ================= */}
       {/* <IconContext.Provider value={{ color:"lightgray"}}> */}
      

      {/* Social Media */}
         <div className="SocialMedia6">
         <a href="github.com/ahmada3mar">
         <FaGithub size={35}/>
         </a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         <a href="https://www.linkedin.com/in/ahmada3mar/">
         <FaLinkedin size={35}/>
         </a>&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
         <a href="facebook.com/ahmada3mar">
         <FaFacebook size={35}/>
         </a>
         </div>
         {/* The End Of Social Media */}
      
       {/* </IconContext.Provider> */}
    </div>
  </div> 
  )
}

export default Card6