import React from 'react'
import serIcon from '../assets/images/srevice/Icon.png'
import serIcon2 from '../assets/images/srevice/Icon (2).png'
import serIcon3 from '../assets/images/srevice/Icon (3).png'
import serIcon4 from '../assets/images/srevice/Icon (4).png'
import serIcon5 from '../assets/images/srevice/Icon (5).png'
import serIon6 from '../assets/images/srevice/Icon (6).png'
import serIcon7 from '../assets/images/srevice/Icon (7).png'
import serIcon8 from '../assets/images/srevice/Icon (8).png'
import fram from '../assets/images/Frame (3).png'

export const Services = () => {
  return (
    <>
    <section id='serviceSection' className='py-5 font-serif cursor-pointer'>
        <div className="container">

              <div className='flex justify-center align-items-center py-2'>
                    <img className='igm-fluid' src={fram} alt="images" />
                    <small className='aboutMe py-2'>My Service</small>
                </div>

                <h3 className='servicesHeadin pb-4'>Services I offer</h3>

            <div className="row">
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon} alt="images" />
                        </div>
                        <h3 className='Ui'>UI/UX Design</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon2} alt="images" />
                        </div>
                        <h3 className='Ui'>Mobile App</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon3} alt="images" />
                        </div>
                        <h3 className='Ui'>Graphic Design</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon4} alt="images" />
                        </div>
                        <h3 className='Ui'>Web Developer</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
            </div>


            <div className="row pt-5">
                <div className="col-lg-3">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon5} alt="images" />
                        </div>
                        <h3 className='Ui'>SEO Optimisation</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-2 py-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIon6} alt="images" />
                        </div>
                        <h3 className='Ui'>WordPress Developer</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon7} alt="images" />
                        </div>
                        <h3 className='Ui'>App Development</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon8} alt="images" />
                        </div>
                        <h3 className='Ui'>Business Strategy</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
