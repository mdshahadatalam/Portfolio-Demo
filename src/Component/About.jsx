import React from 'react'
import aboutImg from '../assets/images/Image (5).png'
import fram from '../assets/images/Frame (3).png'
import icon from '../assets/images/Icon.png'
import icon2 from '../assets/images/Icon (1).png'
import cheek from '../assets/images/check2-square 1.png'

export const About = () => {
  return (
    <>
    <section id='aboutSection' className='py-5 font-serif tracking-wide'>
        <div className="container">
            <div className="row justify-center align-items-center">

                <div className="col-lg-6">
                <img  className='img-fluid shadow-md rounded-sm' src={aboutImg} alt="" />
                </div>


                <div className="col-lg-6">
                    <div className='flex align-items-center'>
                    <img className='igm-fluid' src={fram} alt="" />
                    <small className='aboutMe py-2'>About Me</small>
                   </div>

                   <h3 className='canDesign'>I Can Design Anything You Want </h3>
                    <p className='aboutDami'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>

              <div className='flex align-items-center gap-x-5 pt-6'>
              <div className='flex align-items-center'>
                <div> <img className='img-fluid' src={icon} alt="" /></div>

                <div className='ps-2'>
                    <span className='number'>350+</span>
                    <h4 className='completed'>Complete Project</h4>
                </div>
               </div>


               <div className='flex align-items-center'>
                <div> <img className='img-fluid' src={icon2} alt="" /></div>

                <div className='ps-2'>
                    <span className='number'>16+</span>
                    <h4 className='completed'>Year of experience</h4>
                </div>
               </div>

              </div>

              <div className='pt-12'>
                  <div className='flex align-items-center'>
                    <img src={cheek} alt="" />
                    <small className='work ps-2'>Work simple and cline design</small>
                  </div>

                  <div className='flex align-items-center pt-3'>
                    <img src={cheek} alt="" />
                    <small className='work ps-2'>New idea and user friendly design</small>
                  </div>

                 <div className='pt-10'>
                 <button className='download font-serif my-2 shadow-md  hover:bg-black hover:text-white '>Download My CV</button>
                 </div>

              </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
