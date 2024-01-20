import React from 'react'
import contactImg from '../assets/images/contactimg.png'


const Contact = () => {
  return <section className='mt-0'>
  
  <div className='px-4 mx-auto max-w-screen-md border-2 bg-gradient-to-r from-cyan-600 to-purple-500 rounded-lg '>
  <h2 className='heading  text-white mt-2 text-left w-full'>Contact Us</h2>
      <p className='mb-8 lg:mb-6 text-white font-light text-left text__para'>Got a technical issue we are here to solve it !</p>

      <div className='flex flex-col lg:flex-row flex-wrap justify-between p-1'>
      
      <form action="#" className='space-y-8 bg-blur w-[50%] p-2  mb-3 order-1'>
        <div>
          <label htmlFor="email" className='form_label font-[500] text-white'>
            Your Email
          </label>
          <input type="email" placeholder='example@gmail.com' id="email" 
          className='form__input mt-1 h-[30px]'/>
        </div>
        <div>
          <label htmlFor="subject" className='form_label font-[500] text-white'>
            Subject
          </label>
          <input type="text" placeholder='How Can we help you' id="subject" 
          className='form__input mt-1 h-[30px]'/>
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form_label font-[500]  text-white'>
            Your Message
          </label>
          <textarea rows='3' type="text" placeholder='Leave a Comment' id="message" 
          className='form__input mt-1'/>
        </div>
        <div className='flex items-center justify-left '>
        <button type='submit' className='btn rounded-lg mt-0 shadow-gray-100'>Submit</button>
        </div>
      </form>
      
      
      <div className=' w-1/2 order-2'>
      
      <img src={contactImg} alt='' className='w-full mt-10'/>
    </div>
    </div>

    
  </div>
    
  </section>
}

export default Contact