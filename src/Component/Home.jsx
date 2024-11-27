import React from 'react'
import firstImg from '../assets/images/Image (3).png'
import fram from '../assets/images/Frame (3).png'

export const Home = () => {
  return (
    <>
    <section id='homeSection' className='py-5'>
      <div className="container">
        <div className="row justify-center align-items-center font-serif">
          <div className="col-lg-6">
           
           <div className='flex align-items-center gap-x-2'> 
           <img  className='img-fluid' src={fram} alt="" />
           <small className='designer'> I AM DESIGNER</small>
           </div>

            <h3 className='creative'>Creative Design and Web Solutions</h3>
            <p className='homeDami'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.</p>

            <button className='download font-serif my-2 shadow-md  hover:bg-black hover:text-white'>Download My CV</button>
          </div>
          <div className="col-lg-6">
            <img  className='img-fluid shadow-md rounded-sm' src={firstImg } alt="" />
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
