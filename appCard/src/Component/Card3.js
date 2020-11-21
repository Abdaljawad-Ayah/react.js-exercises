import React,{ useState } from 'react'
import { FaGithub , FaLinkedin , FaFacebook} from 'react-icons/fa';

// import { IconContext } from 'react-icons'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Card3.css'

function Card3() {
  const [name] = useState('Razan Zuaiter');
  const [place] = useState('Amman / Jordan');
  const [job] = useState('Communication Engineering');
  const [about] = useState('أوعك تنرفزها');
 

  return (
    // Card
  <div className="Card3">
     {/* Upper Container */}
     <div className='upper-container3'>
     {/* Image Container */}

     <button class="btn"><i class="fa fa-pencil"></i>
  </button>
       <div className='image-container3'>
       
       {/* Image */}
      <img src={process.env.PUBLIC_URL + "/Razan Zuaiter.jpg"} alt="Images" height="150px" width="150px" />
      </div>
    </div>

     {/* Lower Container */}
     
    <div className="lower-container3">
       <h2>{ name }</h2>
       <small><b>{ place }</b></small> <br/>
       <small><b>{ job }</b></small> <br/> <br/>
       <h5>{ about }</h5> <br/> <br/>
       {/* ================= */}
       {/* <IconContext.Provider value={{ color:"lightgray"}}> */}
      

      {/* Social Media */}
         <div className="SocialMedia3">
         <a href="https://github.com/HEBA-BILBEISI">
         <FaGithub size={35}/>
         </a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         <a href="https://www.linkedin.com/in/heba-bilbeisi/">
         <FaLinkedin size={35}/>
         </a>&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
         <a href="https://web.facebook.com/haboosh.balbesi">
         <FaFacebook size={35}/>
         </a>
         </div>
         {/* The End Of Social Media */}
      
       {/* </IconContext.Provider> */}
       
    </div>
  </div> 
  )
}

export default Card3