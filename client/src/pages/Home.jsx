import React from 'react'

import heroImg01 from '../assets/images/homee.png'
// import heroImg02 from '../assets/images/3796679.jpg'
// import heroImg03 from '../assets/images/TaeAugust11.jpg'
import icon01 from '../assets/images/TaeAugust11.jpg'
import icon02 from '../assets/images/location.jpg'
import icon03 from '../assets/images/TaeAugust07.jpg'
import {BsArrowRight} from 'react-icons/bs' 
import { MdMarkUnreadChatAlt } from "react-icons/md";
import {Link} from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import About from '../components/about/About'
import ServiceList from '../components/services/ServiceList'
import featureImg from '../assets/images/5093164.jpg'

import videoicon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import DoctorList from '../components/Doctors/DoctorList'
import faqImg from '../assets/images/doctor_consultation_03.jpg'
import FaqList from '../components/faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate('/login')
  }
  return <>
  {/* Hero Section */}
  <>
  <section className='hero_section pt-[50px] 2xl:h-[800px] bg-gradient-to-br from-purple-700 from-30% via-purple-500 via-40% to-purple-700 to-70%'>
    <div className='container'>

      <div className='flex flex-col lg:flex-row gap-[30px]  lg:gap-[0px] h-full 
      justify-between  mb-4'>
        {/* hero content */}
        <div className=' mt-1'>
          <div className='lg:w-[550px]'>
            <h1 className='text-[30px]
            leading-[30px] text-headingColor
            font-[800]
            md:text-[40px]
            md:leading-[55px] mb-1 text-white shadow-sm'>Your Health, Your Way!</h1>
            <span className='text-[30px] lg:text-[30px]
            leading-[30px] text-headingColor
            font-[600]
            md:text-[40px]
            md:leading-[55px] text-white shadow'>Seamless Online Doctor Visits at Your Fingertips . . .</span>
            
            <p className='text_para text-black-500 font-[400] text-white'>
            "Seamless Care, Anywhere: Your Virtual Hub for Health and Wellness."
            </p>
            <div className='flex flex-col lg:flex-row gap-2'>
            <button onClick={handleLogin} className=' btn shadow-inner shadow-white bg-yellow-400 text-purple-700 hover:text-white'>
              Request an Appointment
            </button>
            <Link to={'/live'} onClick={handleLogin} className=' btn shadow-inner shadow-white bg-yellow-400 text-purple-700 hover:text-white'>
              Live Webinar
            </Link>
            </div>
            
          </div>

          {/* hero counter */}
          <div className='mt-[30px] lg:mt-[20px] flex flex-row
          lg:flex-row items-center gap-10 lg:gap-[40px]'>

            <div>
              <h2 className=' w-[60px] h-[60px] text-[36px] leading-[56px] lg:text-[36px] md:text-[20px] p-3 shadow-inner shadow-gray-100 text-center
              lg:leading-[54px] font-[700] 
              rounded-full bg-yellow-400 text-purple-700 hover:bg-purple-500'><MdMarkUnreadChatAlt/></h2>
             
            </div>

            <div>
              <h2 className=' w-[60px] h-[60px] text-[36px] leading-[56px] lg:text-[30px] md:text-[20px] p-3 shadow-inner shadow-gray-100 text-center
              lg:leading-[54px] font-[700] 
              rounded-full bg-yellow-400 text-purple-700 hover:bg-purple-500'><FaPhoneAlt/></h2>  
             
            </div>

            <div>
              <h2 className=' w-[60px] h-[60px] text-[36px] leading-[56px] lg:text-[36px] md:text-[20px] p-3 shadow-inner shadow-gray-100 text-center
              lg:leading-[54px] font-[700] 
              rounded-full bg-yellow-400 text-purple-700 hover:bg-purple-500'><BiSolidDonateHeart/></h2>   
              
            </div>
          </div>

        </div>


        {/* hero content */}
        <div className='flex justify-between h-[300px] lg:h-[400px] lg:w-[500px] hover:motion-safe:animate-pulse'>
          <div className='w-full h-full m-0'>
            <img className='w-full p-2 h-full block rounded-lg ' src={heroImg01} alt="" />
          </div>
          {/* <div className=' w-1/2 h-full border ml-0'>
            <img src={heroImg02} alt="" className='w-full h-1/2  rounded-lg shadow-inner'/>
            <img src={heroImg03} alt="" className='w-full h-1/2  rounded-lg shadow-inner'/>
          </div> */}
        </div>
      </div> 
    </div>
  </section>
  {/* Hero Section end*/}
  <section className='container lg:mt-5 bg-purple-50 '>
    
    <div className='flex flex-wrap items-center justify-between flex-col md:flex-row gap-5
     lg:gap-[30px] mt-[20px]'>

      <div className='lg:w-[570px] mx-auto py-3 px-6 rounded-lg shadow-lg bg-gradient-to-r from-cyan-600 to-purple-500 border  hover:motion-safe:animate-pulse '>
      <h2 className='heading text-center text-white'>Providing the best medical services</h2>
      <p className='text_para text-center text-gray-200'>Access quality healthcare from the comfort of your home. Our user-friendly platform ensures a seamless virtual experience, allowing you to consult with a doctor with just a few clicks</p>
    </div>
     </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-5 lg:gap-[30px] mt-[30px] lg:mt-[50px]'>

        <div className='bg-white rounded-lg shadow-md py-[30px] px-5 hover:border hover:shadow-md hover:shadow-purple-500'>
          <div className='flex items-center justify-center border rounded-md shadow-md h-[150px] '>
            <img src={icon01} alt="" className='h-full bg-cover' />
          </div>
          <div className='mt-[20px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor
            </h2>
            <p className='text-[15px] leading-7 text-textColor font-[400] mt-4 text-justify'>Discover Care on Your Terms! Find a Doctor: Your Shortcut to Expert Healthcare. Connect Instantly, Your Health, Your Choice!
            </p>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid
            border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-purple-500
            hover:border-none mt-1'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>
        </div>
        
        <div className=' bg-white rounded-lg shadow-md  py-[30px] px-5 hover:border hover:shadow-md hover:shadow-purple-500'>
          <div className='flex items-center justify-center border rounded-md shadow-md p-2 h-[150px]'>
            <img src={icon02} alt="" className='h-full bg-cover' />
          </div>
          <div className='mt-[20px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location
            </h2>
            <p className='text-[15px] leading-7 text-textColor font-[400] mt-4 text-justify'>Locate Your Nearest Health Hub! Find a Location: Navigate to Our Trusted Centers. Your Convenience, Your Health – Seamless Access to Quality Care!
            </p>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid
            border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-purple-500
            hover:border-none mt-1'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-md  py-[30px] px-5 hover:border hover:shadow-md hover:shadow-purple-500'>
          <div className='flex items-center justify-center border rounded-md shadow-md  p-2 h-[150px] '>
            <img src={icon03} alt="" className='h-full ' />
          </div>
          <div className='mt-[20px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book an Appointment
            </h2>
            <p className='text-[15px] leading-7 text-textColor font-[400] mt-4 text-justify'>Book Your Spot on the Path to Wellness! Schedule an Appointment: Your Quick Link to Expert Care. Swift, Simple, and All About Your Health!
            </p>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid
            border-[#181A1E] mx-auto flex mt-1 items-center justify-center group hover:
            hover:bg-purple-500 hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
          </div>
        </div>
      </div>
  </section>

  {/* About Section */}
  <About/>


  {/* services section */}
  <section>
    <div className="container">
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our medical Services</h2>
        <p className='text_para text-center'>A Commitment to Your Well-being and Comprehensive Healthcare Solutions. Your Health, Our Priority.</p>
      </div>
      <ServiceList/>
    </div>
  </section>

  {/* Feature Section */}
  <section className='bg-yellow-50'>
    <div className='container'>
      <div className='flex items-center justify-between flex-col lg:flex-row gap-2 '>
        {/* feature content */}
        <div className='w-[100%]  lg:w-[600px]'>
          <h2 className='heading'>Get virtual Treatment anytime</h2>
          <ul className="pl-4">
            <li className='text_para'>
              1. Effortless Scheduling: Book appointments with ease, adjusting to your busy lifestyle.
            </li>
            <li className="text_para">
              2.Flexible Availability: Enjoy the freedom to schedule appointments that align with your daily routine, ensuring you never compromise on your health.
            </li>
            <li className="text_para">
              3.Time-Efficient Planning: Say goodbye to long waiting times – our platform prioritizes prompt scheduling, providing you with virtual treatment precisely when you need it.
            </li>
          </ul>
          <Link to='/'>
              <button className='btn'>Learn More</button>
          </Link>
        </div>
        {/* Feature */}
        <div className='relative z-10 w-[670] h-[300px] flex justify-end mt-[50px]
          lg:mt-0 '>
            <img src={featureImg} className='w-full shadow-lg h-full rounded-lg' alt=""/>
            

            <div className='w-[150px] md:w-[170px] lg:w-[240px] bg-white absolute bottom-[15px]  top-35 
            left-0 md:bottom-[40px] md:left-1 lg:top-[200px] lg:bottom-[-30px] z-20 p-2  pb-6 lg:pt-4 lg:pb-[30px] shadow-lg
            rounded-[10px] '>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[6px] lg:gap-3'>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] 
                  text-headingColor font-[600]'>Fri,30</p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] 
                  text-textColor font-[500]'>11AM -8PM </p>
                </div>
                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center
                justify-center bg-yellowColor rounded py-1 px-[6px]
                lg:py-3 lg-px-[9px]'>
                  <img src={videoicon} alt="" />
                </span>
              </div>
              <div className='w-[65px] lg:w-[96px] bg-cyan-500 py-1
              lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px]
              lg:text-[12px] lg:leading-4 text-white font-[500]
              mt-2 lg:mt-2 mb-2 rounded-full'>
                Consultation
              </div>
              <div className='flex items-cneter gap-[6px] lg:gap-[10px]
              '>
                <img src={avatarIcon} alt="" />
                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] capitalize
                text-headingColor'>Raman raj</h4>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  {/* great doctors */}
  <section>
    <div className="container">
    <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our Skilled Practitioners</h2>
        <p className='text_para text-center'>"Introducing Our Care Champions: Get to Know the Faces Behind Your Health and Wellness!"</p>
    </div>
    <DoctorList/>
    <a href='https://blue-rooms.vercel.app/auth' className="flex flex-row justify-center mt-10">
      <button className="px-5 py-4 bg-purple-500 rounded-md text-white">Chat with doctor</button>
    </a>
    </div>
  </section>
  {/* faq section */}
  <section className='bg-white'>
    <div className="container">
      <div className='flex justify-between gap-[50px] lg:gap-0 '>
        <div className='w-1/2 hidden md:block p-4'>
          <img src={faqImg} alt="" className='p-1 shadow-b' />
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='heading'>
            Most questions by our beloved patients
          </h2>
          <FaqList/>
        </div>
      </div>
    </div>
  </section>
  {/* testimonial */}

  <section>
    <div className="container">
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>What our patients say</h2>
      </div>
      <Testimonial/>
    </div>
  </section>
  
  </>
  </>
}

export default Home