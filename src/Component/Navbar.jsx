import React from 'react'
import logo from '../assets/images/Logo (4).png'
import { HiMiniBars3BottomRight } from "react-icons/hi2";


export const Navbar = () => {
  return (
    <>
         {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}


<nav className="navbar navbar-expand-lg ">
     <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" 
    type="button"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample">
      {/* <span className="navbar-toggler-icon"></span> */}
      <span><HiMiniBars3BottomRight /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center text-lg">

      <li className="nav-item">
          <a className="nav-link  font-serif " href="#homeSection">Home</a>
        </li>
     

        
      
      <li className="nav-item">
          <a className="nav-link  font-serif " href="#aboutSection">About</a>
        </li>
      

        
      <li className="nav-item">
          <a className="nav-link  font-serif " href="#serviceSection">Services</a>
        </li>
      




      
      <li className="nav-item">
          <a className="nav-link font-serif " href="#resumeSection">Resume</a>
        </li>
     

       
       <li className="nav-item">
          <a className="nav-link  font-serif" href="#portfolioSection">Portfolio</a>
        </li>

        
       <li className="nav-item">
          <a className="nav-link  font-serif " href="#testimonialSec">Testimonial</a>
        </li>

        
       <li className="nav-item">
          <a className="nav-link  font-serif " href="#blog">Blog</a>
        </li>

        
      </ul>

      <div>
      <a href="#contact"> <button className='w-24 h-10 shadow-md hover:bg-black hover:text-white rounded-md tracking-wide
        bg-[#FF6B00] font-serif text-white m-2'>Contact</button></a>
      </div>

     
     
    </div>
  </div>
</nav>



{/* offcanbas  */}


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <img src={logo} className='img-fluid' alt="" /> </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div class="dropdown mt-3">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center text-lg">

      <li className="nav-item">
          <a className="nav-link  font-serif " href="#homeSection">Home</a>
        </li>
     

        
      
      <li className="nav-item">
          <a className="nav-link  font-serif " href="#aboutSection">About</a>
        </li>
      

        
      <li className="nav-item">
          <a className="nav-link  font-serif " href="#serviceSection">Services</a>
        </li>
      




      
      <li className="nav-item">
          <a className="nav-link font-serif " href="#resumeSection">Resume</a>
        </li>
     

       
       <li className="nav-item">
          <a className="nav-link  font-serif " href="#portfolioSection">Portfolio</a>
        </li>

        
       <li className="nav-item">
          <a className="nav-link  font-serif " href="#testimonialSec">Testimonial</a>
        </li>

        
       <li className="nav-item">
          <a className="nav-link  font-serif " href="#blog">Blog</a>
        </li>

        
      </ul>
      <div>
      <a href="#contact"> <button className='w-24 h-10  hover:bg-black hover:text-white rounded-md tracking-wide
        bg-[#FF6B00] font-serif text-white m-2'>Contact</button></a>
      </div>

    </div>
  </div>
</div>

    </>
  )
}
