import React,{ useState } from 'react'
import { FaGithub , FaLinkedin , FaFacebook, FaInstagram} from 'react-icons/fa';

// import { IconContext } from 'react-icons'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Card4.css'

function Card4() {
  const [name] = useState('Mohammed AL-Agi ');
  const [place] = useState('Amman / Jordan');
  const [job] = useState('Full Stack Developer');
  const [about] = useState(' Be the change that you wish to see in the world.');
 

  return (
    // Card
  <div className="Card4">
     {/* Upper Container */}
     
     <div className='upper-container4'>
     {/* Image Container */}
     <button class="btn"><i class="fa fa-pencil"></i>
  </button>

       <div className='image-container4'>
       
       {/* Image */}
      <img src={process.env.PUBLIC_URL + "/mohammed.jpg"} alt="Images" height="150px" width="150px" />
      </div>
    </div>

     {/* Lower Container */}
     
    <div className="lower-container4">
       <h2>{ name }</h2>
       <small><b>{ place }</b></small> <br/>
       <small><b>{ job }</b></small> <br/> <br/>
       <h5>{ about }</h5> <br/> <br/>
       {/* ================= */}
       {/* <IconContext.Provider value={{ color:"lightgray"}}> */}
      

      {/* Social Media */}
         <div className="SocialMedia">
         <a href="https://www.instagram.com/alagi4real/">
         <FaInstagram size={35}/>
         </a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         <a href="https://www.linkedin.com/in/mohammed-alagi/">
         <FaLinkedin size={35}/>
         </a>&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
         <a href="https://www.facebook.com">
         <FaFacebook size={35}/>
         </a>
         </div>
         {/* The End Of Social Media */}
      
       {/* </IconContext.Provider> */}
       
    </div>
  </div> 
  )
}

export default Card4