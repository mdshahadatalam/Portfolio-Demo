import React from 'react'
import fram from '../assets/images/Frame (3).png'
import clint1 from '../assets/images/clinet/Image (6).png'
import clint2 from '../assets/images/clinet/Image (7).png'
import clint3 from '../assets/images/clinet/Image (9).png'

import patter1 from '../assets/images/pattar/Logo (5).png'
import patter2 from '../assets/images/pattar/Logo (6).png'
import patter3 from '../assets/images/pattar/Logo (8).png'
import patter4 from '../assets/images/pattar/Logo (9).png'
import patter5 from '../assets/images/pattar/Logo (10).png'
import patter6 from '../assets/images/pattar/Logo (11).png'

export const Testimonial = () => {
  return (
    <>
    <section id='testimonialSec' className='py-5 font-serif cursor-pointer'>
        <div className="container">
        <div className='flex justify-center align-items-center py-2'>
                    <img className='img-fluid' src={fram} alt="images" />
                    <small className='aboutMe py-2'>Testimonial</small>
                </div>

                <h3 className='servicesHeadin pb-4'>Client Feedback</h3>
            <div className="row">
                <div className="col-lg-4 portRes">

                    <div className='bg-[#FFF5EF] rounded-md shadow-md p-6 portResImg'>
                     <div className='flex align-items-center py-4'>
                        <div> <img className='img-fluid' src={clint1} alt="images" /></div>

                        <div className='ps-3'>
                            <h3 className='siam'>Siam Talukder</h3>
                            <span className='ctoOfficer'>CTO, Xyz Group</span>
                        </div>
                    </div>
                    <p className='clintDami'>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                    </div>

                </div>
                <div className="col-lg-4 portRes">

                <div className='bg-[#FFF5EF] rounded-md shadow-md p-6 portResImg'>
                     <div className='flex align-items-center py-4'>
                        <div> <img className='img-fluid' src={clint2} alt="images" /></div>

                        <div className='ps-3'>
                            <h3 className='siam'>ABM Shawon Islam</h3>
                            <span className='ctoOfficer'>CEO, Abc Agency</span>
                        </div>
                    </div>
                    <p className='clintDami'>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                    </div>

                </div>
                <div className="col-lg-4 portRes">

                <div className='bg-[#FFF5EF] rounded-md shadow-md p-6 portResImg'>
                     <div className='flex align-items-center py-4'>
                        <div> <img className='img-fluid' src={clint3} alt="images" /></div>

                        <div className='ps-3'>
                            <h3 className='siam'>Azmir Uddin Alif</h3>
                            <span className='ctoOfficer'>Director, Techso</span>
                        </div>
                    </div>
                    <p className='clintDami'>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>



    <section className='py-5'>
  <div className="container">
    <div className='flex justify-center align-items-center py-2'>
      <img className='img-fluid' src={fram} alt="images" />
      <small className='aboutMe py-2'>Partners</small>
    </div>

    <h3 className='servicesHeadin pb-4'>REPUTED PARTNER</h3>
    <div className="row">
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter1} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter2} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter3} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter4} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter5} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter6} alt="images" />
      </div>
    </div>
  </div>
</section>
    </>
  )
}
