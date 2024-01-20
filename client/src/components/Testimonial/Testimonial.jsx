import React from 'react'
import {Pagination} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper 
        modules={[Pagination]} 
        spaceBetween={30} 
        slidesPerView={1}
        pagination={{clickable:true}} 
        breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            },
        }}>

        {/* I have to update the patient Section */}
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-lg transition-all hover:border-2 hover:shadow-lg hover:shadow-purple-300 border-2 border-purle-500'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px]
                        font-semibold text-headingColor'>Kamran Hussain</h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus quis possimus, iste nemo nihil officiis vero ipsam commodi eaque.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-lg bg-gradient-to-bl from-cyan-600 to-purple-500 transition-all hover:border-2 hover:shadow-lg hover:shadow-purple-300 border-2 border-purle-500'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px]
                        font-semibold text-headingColor'>Kamran Hussain</h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus quis possimus, iste nemo nihil officiis vero ipsam commodi eaque.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-lg transition-all hover:border-2 hover:shadow-lg hover:shadow-purple-300 border-2 border-purle-500'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px]
                        font-semibold text-headingColor'>Kamran Hussain</h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus quis possimus, iste nemo nihil officiis vero ipsam commodi eaque.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='py-[30px] px-5 rounded-3 border-2 border-purle-500'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px]
                        font-semibold text-headingColor'>Kamran Hussain</h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus quis possimus, iste nemo nihil officiis vero ipsam commodi eaque.
                </p>
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial;