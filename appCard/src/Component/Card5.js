import React,{ useState } from 'react'
import { FaGithub , FaLinkedin , FaFacebook, FaInstagram} from 'react-icons/fa';

// import { IconContext } from 'react-icons'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Card5.css'

function Card5() {
  const [name] = useState('Osama Aburabi');
  const [place] = useState('Amman / Jordan');
  const [job] = useState('Full stack developer in process.');
  const [about] = useState(' أنا قطاعه');
 

  return (
    // Card
  <div className="Card5">
     {/* Upper Container */}
     <div className='upper-container5'>
     {/* Image Container */}
     <button class="btn"><i class="fa fa-pencil"></i>
  </button>

       <div className='image-container5'>
       
       {/* Image */}
      <img src={process.env.PUBLIC_URL + "/Osama.jpg"} alt="Images" height="150px" width="150px" />
      </div>
    </div>

     {/* Lower Container */}
     
    <div className="lower-container5">
       <h2>{ name }</h2>
       <small><b>{ place }</b></small> <br/>
       <small><b>{ job }</b></small> <br/> <br/>
       <h5 className="h5">{ about }</h5> <br/> <br/>
       {/* ================= */}
       {/* <IconContext.Provider value={{ color:"lightgray"}}> */}
      

      {/* Social Media */}
         <div className="SocialMedia5">
         <a href="https://www.github.com">
         <FaGithub size={35}/>
         </a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
         <a href="https://www.linkedin.com/in/osama-aburabi-e-1abb791b6/">
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

export default Card5