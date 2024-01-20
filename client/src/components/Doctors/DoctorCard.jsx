import React from 'react'
import staricon from '../../assets/images/Star.png'
import {BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'
const DoctorCard = ({doctor}) => {
    const {
    name,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalPatients,
    hospital}=doctor;
  return (
    <div className='p-5 lg:p-5  bg-gradient-to-r from-cyan-600 to-purple-500 rounded-xl shadow-lg hover:bg-white mr-8'>
        <div>
            <img src={photo} className='w-full  shadow-2xl rounded-2xl' alt="" />
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[18px]
        lg:leading-9 text-white font-[700] mt-3 lg:mt-2'>
            {name}
        </h2>
        <div className='mt-2 lg:mt-0 flex flex-col items-start justify-between '>
            {/* <h2>kunal</h2> */}
            <span className='bg-white text-cyan-600 py-1 px-1 lg:py-1 lg:px-2 text-[12px] rounded-lg mt-1
            leading-4 lg:text-[16px] lg:leading-7 mb-1 font-semibold'>
                {specialty}
            </span>
            <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-[3px] text-[12px] leading-6
                lg:text-[16] lg:leading-7 font-semibold text-white'>
                <img src={staricon} alt="" />
                {avgRating}
                </span>
                <span className='text-[12px] leading-6
                lg:text-[16] lg:leading-7 font-semibold text-white'>({totalRating})</span>
            </div>
        </div>
        <div className='mt-1 lg:mt-1 flex items-center justify-between bg-white p-2 rounded-lg border'>
            <div>
                <h3 className='text-[16px] leading--7 lg:text-[16px] lg:leading-[16px] font-semibold text-headingColor'>
                    {totalPatients}+ Patients
                </h3>
                <p className='text-[12px] leading-6 font-[400]'> At {hospital}</p>
            </div>
            <Link to='/doctors' className='w-[40px] h-[34px] rounded-full border border-solid
            border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-purple-500
            hover:border-none'>
              <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>
        </div>
    </div>
  )
}

export default DoctorCard