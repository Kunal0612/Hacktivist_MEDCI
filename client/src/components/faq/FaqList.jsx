import React from 'react'
import {faqs} from './../../assets/data/faqs'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <>
    <ul className='mt-[40px]'>
        {faqs.map((item,index)=><FaqItem item={item} index={index} />)}
    </ul>
    <p className='text-gray-500 mt-1'>We hope these answers provide clarity, but if you have any further questions, don't hesitate to contact our support team. Your health and well-being are our top priorities.</p>
    <button className='btn capitalize
    '>ask any question</button>
    </>
  )
}

export default FaqList