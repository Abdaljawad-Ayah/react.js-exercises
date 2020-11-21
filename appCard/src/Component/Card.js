import React,{ useState } from 'react'
import { FaGithub , FaLinkedin , FaFacebook} from 'react-icons/fa';
// import { IconContext } from 'react-icons'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Card.css'





function Card() {
  const [name] = useState('Ayah Imad.');
  const [place] = useState('Amman / Jordan');
  const [job] = useState('Graphic Designer');
  const [about] = useState('My logo is : Never Give up & love eating Molokhyia');
 

  return (
    // Card
  <div className="Card">
     {/* Upper Container */}
     <div className='upper-container'>
     {/* Image Container */}
     <button class="btn"><i class="fa fa-pencil"></i>
  </button>
         
       <div className='image-container'>
       
       {/* Image */}
      <img src="https://th.bing.com/th/id/OIP.oxJs-NTwdWE1ezyBOFY9wQHaJR?pid=Api&rs=1" alt=" " height="150px" width="150px" />
      </div>
    </div>  

     {/* Lower Container */}
     
    <div className="lower-container">
       <h2>{ name }</h2>
       <small><b>{ place }</b></small> <br/>
       <small><b>{ job }</b></small> <br/> <br/>
       <h5>{ about }</h5> <br/> <br/>
       {/* ================= */}
       {/* <IconContext.Provider value={{ color:"lightgray"}}> */}
      

      {/* Social Media */}
         <div className="SocialMedia">
         <a href="https://github.com/Abdaljawad-Ayah">
         <FaGithub size={35}/>
         </a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         <a href="https://www.linkedin.com/in/ayah-imad/">
         <FaLinkedin size={35}/>
         </a>&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
         <a href="https://web.facebook.com/ayah.imad.7">
         <FaFacebook size={35}/>
         </a>
         </div>
         {/* The End Of Social Media */}
      
       {/* </IconContext.Provider> */}
       
    </div>
  </div> 
  )
}

export default Card