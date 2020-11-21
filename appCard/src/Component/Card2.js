import React,{ useState } from 'react'
import { FaGithub , FaLinkedin , FaFacebook} from 'react-icons/fa';

// import { IconContext } from 'react-icons'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Card2.css'

function Card2() {
  const [name] = useState('Heba Bilbeisi');
  const [place] = useState('Amman / Jordan');
  const [job] = useState('Accountat');
  const [about] = useState(' بونجور أنا محجور');
 

  return (
    // Card
  <div className="Card2">
     {/* Upper Container */}
     <div className='upper-container2'>
     {/* Image Container */}
     <button class="btn"><i class="fa fa-pencil"></i>
  </button>

       <div className='image-container2'>
       
       {/* Image */}
      <img src={process.env.PUBLIC_URL + "/Heba.jpg"} alt="Images" height="150px" width="150px" />
      </div>
    </div>

     {/* Lower Container */}
     
    <div className="lower-container2">
       <h2>{ name }</h2>
       <small><b>{ place }</b></small> <br/>
       <small><b>{ job }</b></small> <br/> <br/>
       <h5>{ about }</h5> <br/> <br/>
       {/* ================= */}
       {/* <IconContext.Provider value={{ color:"lightgray"}}> */}
      

      {/* Social Media */}
         <div className="SocialMedia2">
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

export default Card2