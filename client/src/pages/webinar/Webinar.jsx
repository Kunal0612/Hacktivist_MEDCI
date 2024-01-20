import React, { useEffect, useState } from 'react'
import hacti from "../../assets/hacti.mp4"
import { useRef } from 'react'

const Webinar = () => {

  return (
    <div className='p-4'>
      <h1 className=" text-purple-600 text-center py-2 text-[30px] font-bold font-mono">Live Page</h1>
      <div className="flex flex-col items-center gap-3 justify-evenly w-full min-h-[50vh] rounded-lg m-4 shadow-lg">
        <div className="flex flex-row w-full justify-center h-96">
        <video width="640" height="360" controls className=' border-2 border-purple-600 rounded-lg shadow-lg' >
            <source src={hacti} type="video/mp4"  />
            Your browser does not support the video tag.
        </video>
        </div>
        <div className="text mx-4">
        <h1 className="text-center text-[30px] text-purple-600">Video Description</h1>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A saepe officiis necessitatibus beatae recusandae blanditiis, mollitia dolore vitae itaque ut, nulla quis earum exercitationem nostrum facere eligendi dolor veniam delectus quos?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam libero tempora assumenda, explicabo delectus vitae dolorem earum iure facere quod cupiditate? Vero vel, quibusdam reprehenderit iusto quaerat ipsa reiciendis beatae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam, quo voluptate non iste deleniti tempora sunt, laborum et aliquid, est quod voluptatem nam rem eum? Eum laudantium dolore eius.</p>
        </div>
      </div>

    </div>
  )
}

export default Webinar