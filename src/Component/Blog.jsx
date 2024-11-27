import React from 'react'
import fram from '../assets/images/Frame (3).png'
import blog1 from '../assets/images/blog/Image (10).png'
import blog2 from '../assets/images/blog/Image (11).png'
import blog3 from '../assets/images/blog/Rectangle 41.jpg'
import { FaArrowRight } from "react-icons/fa6";
export const Blog = () => {
  return (
   <>
   <section id='blog' className='py-5 font-serif'>
    <div className="container">
    <div className='flex justify-center align-items-center py-2'>

        <img className='img-fluid' src={fram} alt="images" />
        <small className='aboutMe py-2'>My Blog</small>
      </div>

          <h3 className='servicesHeadin pb-4'>LATEST BLOG</h3>
        <div className="row">

            <div className="col-lg-4">
                <div className='shadow-md rounded-md mt-3'>
                    <img className='img-fluid' src={blog1} alt="images" />
                    <small className='january py-2 px-4 d-inline-block'>20 January, 2023</small>

                    <p className='become py-2 px-4'>Become a UX/UI Designer With Career Foundry.</p>

                   <div>
                   <span className='readMore pb-2 ps-4 d-inline-block'>Read More...</span>
                   </div>
                </div>
            </div>
            <div className="col-lg-4">
            <div className='shadow-md rounded-md mt-3'>
                    <img className='img-fluid' src={blog2} alt="images" />
                    <small className='january py-2 px-4 d-inline-block'>15 January, 2023</small>

                    <p className='become py-2 px-4'>The Best App Development For Your Business Plan.</p>

                   <div>
                   <span className='readMore pb-2 ps-4 d-inline-block'>Read More...</span>
                   </div>
                </div>
            </div>
            <div className="col-lg-4">
            <div className='shadow-md rounded-md mt-3'>
                    <img className='img-fluid' src={blog3} alt="images" />
                    <small className='january py-2 px-4 d-inline-block'>08 January, 2023</small>

                    <p className='become py-2 px-4'>The Best Portfolio For Agency Design Thinking</p>

                   <div>
                   <span className='readMore pb-2 ps-4 d-inline-block'>Read More...</span>
                   </div>
                </div>
            </div>

        </div>
    </div>
   </section>
   </>
  )
}
