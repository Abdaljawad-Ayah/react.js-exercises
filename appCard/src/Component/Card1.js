import React,{ useState } from 'react'
import { FaGithub , FaLinkedin , FaFacebook} from 'react-icons/fa';

// import { IconContext } from 'react-icons'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Card1.css'

function Card1() {
  const [name] = useState('Jenan Musallam');
  const [place] = useState('Amman / Jordan');
  const [job] = useState('Management Information System');
  const [about] = useState(' بس رشة ليمون');
 

  return (
    // Card
  <div className="Card1">
     {/* Upper Container */}
     <div className='upper-container1'>
     {/* Image Container */}
     <button class="btn"><i class="fa fa-pencil"></i>
  </button>
    
       <div className='image-container1'>
       
       {/* Image */}
      <img src={process.env.PUBLIC_URL + "/Jenan.jpg"} alt="Images" height="150px" width="150px" />
      </div>
    </div>

     {/* Lower Container */}
     
    <div className="lower-container1">
       <h2>{ name }</h2>
       <small><b>{ place }</b></small> <br/>
       <small><b>{ job }</b></small> <br/> <br/>
       <h5>{ about }</h5> <br/> <br/>
       {/* ================= */}
       {/* <IconContext.Provider value={{ color:"lightgray"}}> */}
      

      {/* Social Media */}
         <div className="SocialMedia1">
         <a href="https://github.com/Jenanmusallam">
         <FaGithub size={35}/>
         </a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         <a href="https://www.linkedin.com/in/jenan-musallam/">
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

export default Card1