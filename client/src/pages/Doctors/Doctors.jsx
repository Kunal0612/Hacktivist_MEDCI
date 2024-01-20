import React from 'react'

import DoctorCard from '../../components/Doctors/DoctorCard'
import {doctors} from './../../assets/data/doctors'
import Testimonial from '../../components/Testimonial/Testimonial'

const Doctors = () => {
  return <>
  <section className='bg-[#fff9ea] container'>
    <div className="conatiner text-center">
      <h2 className='heading'>Find a Doctor</h2>
      <div className='max-w-[570px] mt-[30px] mx-auto bg-[#fff] rounded-s-lg
      flex items-center shadow'>
        <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full
        focus:outline-none cursor-pointer placeholder:text-gray-400' 
        placeholder='Search Doctor here'/>
        <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
    gap-2 lg:grid-cols-4 p-1'>
        {doctors.map((doctor)=><DoctorCard index={doctor.id} doctor={doctor}/>)}
    </div>
    </div>
  </section>
  
  <section>
    <div className="container">
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>What our patients say</h2>
        <p className='text_para text-center'>"Patient Testimonials: Sharing Stories of Care and Compassion at our site"</p>
      </div>
      <Testimonial/>
    </div>
  </section>
  </>
}

export default Doctors