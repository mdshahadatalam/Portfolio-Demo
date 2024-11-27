import React from 'react'
import fram from '../assets/images/Frame (3).png'
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

export const Contact = () => {
  return (

    <>
    <section id='contact' className='py-5 font-serif'>
        <div className="container">
             <div className='flex justify-center align-items-center py-2'>

        <img className='img-fluid' src={fram} alt="images" />
        <small className='aboutMe py-2'>My Contact</small>
      </div>

          <h3 className='servicesHeadin pb-4'>I WANT TO HEAR FROM YOU</h3>
            <div className="row pt-5">
                <div className="col-lg-9 p-0">
                  <form action="">
                    <input className='w-[44%] h-[70px] shadow-md rounded-md my-2 ms-2 Contact' type="text" placeholder='Your name' />
                    <input className='w-[44%] h-[70px] shadow-md rounded-md my-2 ms-2 Contact' type="email" placeholder='Your email' /> <br />
                    <input className='w-[44%] h-[70px] shadow-md rounded-md my-2 ms-2 Contact' type="digit" placeholder='Your phone' />
                    <input className='w-[44%] h-[70px] shadow-md rounded-md my-2 ms-2 Contact' type="text"  placeholder='subject'/>

                    <div>
                    <textarea className='w-[89%] h-[194px]  shadow-md rounded-md Contact my-2 ms-2' name="" id="" placeholder='Your messages'>
                    
                    </textarea>
                    </div>

  
                    <div className='py-2 ms-2'>
                 <button className='download font-serif shadow-md  hover:bg-black hover:text-white '>Send me messages</button>
                    </div>
                  </form> 
                </div>

                <div className="col-lg-3 p-2">
                  <div className='flex align-items-center pt-2 cursor-pointer'>
                    <div> <span className='inline-block align-items-center justify-center d-flex text-2xl me-2 w-[58px] h-[58px] shadow-md rounded-md bg-[#FFF5EF] text-[#FF6B00]'><CiLocationOn /></span></div>
                    <div>
                      <h4 className='m-0'>Address</h4>
                      <span>202 Dog Hill Lane Beloit, KS 67420</span>
                    </div>
                  </div>

                  <div className='flex align-items-center pt-5 cursor-pointer'>
                    <div> <span className='inline-block align-items-center justify-center d-flex text-2xl me-2 w-[58px] h-[58px] shadow-md rounded-md bg-[#FFF5EF] text-[#FF6B00]'><FiPhoneCall /></span></div>
                    <div>
                      <h4 className='m-0'>Phone</h4>
                      <span>+01589634755</span>
                    </div>
                  </div>


                  <div className='flex align-items-center pt-5 cursor-pointer'>
                    <div> <span className='inline-block align-items-center justify-center d-flex text-2xl me-2 w-[58px] h-[58px] shadow-md rounded-md bg-[#FFF5EF] text-[#FF6B00]'><CiMail /></span></div>
                    <div>
                      <h4 className='m-0'>Email</h4>
                      <span>credesign@gmail.com</span>
                    </div>
                  </div>

                </div>

            </div>
        </div>
    </section>
    </>
  )
}
