import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ServiceCard = ({item,index}) => {
    const {name,desc,bgColor,textColor,link}=item
  return( 
  <div className='py-[30px] px-3 lg:px-5 border shadow-lg rounded-lg bg-gradient-to-br from-cyan-600 to-purple-500 hover:scale-[1.04] hover:shadow-cyan-950'>
    <div className='flex shadow justify-between items-center gap-2 bg-white px-2 py-3 rounded-lg'> 
    <h2 className='text-[26px] leading-8 text-purple-500 font-[700]'>{name}</h2>
    <Link to={link} className='w-[50px] h-[40px] rounded-full border border-solid mx-3
            border-[#181A1E]  flex items-center justify-center group hover:bg-purple-500
            hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
    </Link>
    </div>
    
    <p className='text-[16px] leading-7 font-[500] text-white mt-4 px-2'>{desc}</p>
    
    {/* <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px]
    leading-[30px] font-[600]' style={{
        background:`${bgColor}`,
        color:`${textColor}`,
        borderRadius:'6px 0 0 6px',
    }}>
        {index + 1}
    </span> */}
    
  </div>)
}

export default ServiceCard