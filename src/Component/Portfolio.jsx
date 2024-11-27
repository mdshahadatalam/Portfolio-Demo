import React from 'react'
import fram from '../assets/images/Frame (3).png'
import plceholder1 from '../assets/images/Protfolio/Placeholder (1).png'
import plceholder2 from '../assets/images/Protfolio/Placeholder (2).png'
import plceholder3 from '../assets/images/Protfolio/Placeholder (3).png'
import plceholder4 from '../assets/images/Protfolio/Placeholder (4).png'
import plceholder5 from '../assets/images/Protfolio/Placeholder.jpg'
import plceholder6 from '../assets/images/Protfolio/Placeholder.png'

export const Portfolio = () => {
  return (
    <>
    <section id='portfolioSection' className='py-5 font-serif'>
        <div className="container">
        <div className='flex justify-center align-items-center py-2'>
                    <img className='igm-fluid' src={fram} alt="images" />
                    <small className='aboutMe py-2'>My Portfolio</small>
                </div>

                <h3 className='servicesHeadin pb-4'>VISIT MY PORTFOLIO</h3>
            <div className="row portfolioRes">
                <div className="col-lg-4 portRes">
                    <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder6} alt="images" />
                </div>
                <div className="col-lg-4 portRes">
                    <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder3} alt="images" />
                </div>
                <div className="col-lg-4 portRes">
                    <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder2} alt="images" />
                </div>

            </div>

            <div className="row portfolioRes py-3">
                <div className="col-lg-4 portRes">
                    <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder5} alt="images" />
                </div>
                <div className="col-lg-4 portRes">
                    <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder3} alt="images" />
                </div>
                <div className="col-lg-4 portRes">
                    <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder4} alt="images" />
                </div>

            </div>
        </div>
    </section>
    </>
  )
}
