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
        <div className='text-center py-2'>
            <img className='img-fluid' src={fram} alt="Portfolio Frame" />
            <small className='aboutMe py-2'>My Portfolio</small>
        </div>

        <h3 className='servicesHeadin pb-4 text-center'>VISIT MY PORTFOLIO</h3>

        <div className="row portfolioRes">
            <div className="col-12 col-sm-6 col-lg-4 portRes">
                <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder6} alt="Portfolio Item 1" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 portRes">
                <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder3} alt="Portfolio Item 2" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 portRes">
                <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder2} alt="Portfolio Item 3" />
            </div>
        </div>

        <div className="row portfolioRes py-3">
            <div className="col-12 col-sm-6 col-lg-4 portRes">
                <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder5} alt="Portfolio Item 4" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 portRes">
                <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder3} alt="Portfolio Item 5" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 portRes">
                <img className='img-fluid mt-3 shadow-md portResImg' src={plceholder4} alt="Portfolio Item 6" />
            </div>
        </div>
    </div>
</section>
    </>
  )
}
