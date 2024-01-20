import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import { AiFillYoutube , AiFillGithub ,AiOutlineInstagram ,AiFillLinkedin} from 'react-icons/ai'

const socialLinks=[
  {
    path:'https://github.com/Kunal0612',
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path:'https://www.linkedin.com/in/kunal-shaw-/',
    icon:<AiFillLinkedin className='group-hover:text-white w-4 h-5'/>,
  },
]
const quickLinks01=[
  {
    path:'/home',
    display:"Home",
  },
  {
    path:'/',
    display:"About us",
  },
  {
    path:'/services',
    display:"Services",
  },
  {
    path:'/',
    display:"Blog",
  },
]
const quickLinks02=[
  {
    path:'/find-a-doctor',
    display:"Find a Doctor",
  },
  {
    path:'/',
    display:"Request an Appointment",
  },
  {
    path:'/',
    display:"Find a Location",
  },
  {
    path:'/',
    display:"Get a Opinion",
  },
]
const quickLinks03=[
  {
    path:'/',
    display:"Donate",
  },
  {
    path:'/contact',
    display:"Contact us",
  },
]


const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='pb-16 pt-10 bg-purple-500'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap
      gap-[30px]'>
        {/* Social */}
        <div className=''>
          <img src={logo} alt="" className='h-[60px] border bg-white rounded-lg shadow-md' />
          <p className='text-[16px]
          leading-7 font-[400] text-white mt-4 '>Copyright {year} Developed By Hacktivist</p>
           <div className='flex items-center gap-3 mt-4'>
        {socialLinks.map((link,index)=>
        <Link to={link.path} key={index} className='w-10 h-10 border border-solid
        border-yellow-400 bg-yellow-400 shadow-inner shadow-yellow-100 rounded-full flex items-center justify-center group text-white  hover:bg-yellow-500
        hover:border-none'>
          {link.icon}
        </Link>)}
        </div>
        </div>
        {/* Quicklink1 */}
        <div>
          <h2 className='text-[20px] leadoing-[30px]
           font-[800] mb-5 text-white border-b'>
            Quick Links
           </h2>
           <ul>
            {quickLinks01.map((item,index)=><li key={index} className='mb-1'>
              <Link to={item.path} className='text-[16px] leading-7 font-[500] text-white hover:text-gray-300 mb-2'>
                {item.display}
              </Link>
            </li>)}
           </ul>
        </div>
        <div>
          <h2 className='text-[20px] leadoing-[30px]
           font-[800] mb-5 text-white border-b'>
            I Want to:
           </h2>
           <ul>
            {quickLinks02.map((item,index)=><li key={index} className='mb-1'>
              <Link to={item.path} className='text-[16px] leading-7 font-[500]  text-white hover:text-gray-300 mb-2'>
                {item.display}
              </Link>
            </li>)}
           </ul>
        </div>
        <div>
          <h2 className='text-[20px] leadoing-[30px]
           font-[700] mb-5 text-white border-b'>
            Support
           </h2>
           <ul>
            {quickLinks03.map((item,index)=><li key={index} className='mb-1'>
              <Link to={item.path} className='text-[16px] leading-7 font-[500]  text-white hover:text-gray-300 mb-2'>
                {item.display}
              </Link>
            </li>)}
           </ul>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer