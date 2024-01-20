import React from 'react'
import aboutImg from '../../assets/images/3784074.jpg'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px]
        xl:gap-0 flex-col lg:flex-row '>
            {/* about img container */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10
            order-2 lg:order-1 p-1'>
                <img src={aboutImg} alt="" className='rounded-lg shadow-md shadow-purple-300' />
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px]
                right-[%30] md:right-[-7%] lg:right-[22%] '>
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>
            {/* about content */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading '>Our Story: Committed to Your Health and Well-being</h2>
                <p className='text_para'
                >At MEDCI , we believe in breaking down barriers to healthcare. Our platform connects you with experienced and certified healthcare professionals who are dedicated to your well-being. Say goodbye to long waiting times and hello to the convenience of virtual consultations.Health concerns don't adhere to a schedule. Our platform is available 24/7, ensuring that you can connect with a healthcare professional whenever you need it the most.</p>
                <p className="text_para mt-[30px]">Your privacy is paramount. Our secure and encrypted platform guarantees the confidentiality of your health information, providing a safe space for your virtual consultations.From general practitioners to specialized healthcare providers, we've curated a diverse team to meet your unique health needs. Whether it's a routine check-up or specialized care, we have you covered. </p>
                <Link to='/'>
                    <button className='btn'>Learn More</button>
                </Link>
            </div>
        </div>
    </div>
  </section>
}

export default About