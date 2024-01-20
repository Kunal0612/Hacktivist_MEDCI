import {useState} from 'react'
// import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { IoIosArrowDropdownCircle,IoIosArrowDropupCircle} from "react-icons/io";

const FaqItem = ({item}) => {
    const [isOpen,setIsOpen] =useState(false);
    const toggleAccordion=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div className='p-3 lg:p-3 rounded-none border-b-2 border-solid 
    border-purple-500 mb-2 cursor-pointer'>
        <div className='flex items-center justify-between gap-5' onClick={toggleAccordion}>
            <h4 className='text-[16px] leading-7 lg:text-[16px] lg:leading-8 
            text-headingColor'>
                {item.question}
            </h4>
            <div className={ ` ${isOpen && 'text-purple-500  border-none'} w-10 h-10 lg:w-10 lg:h-10
             flex items-center justify-center`}>
                
                {isOpen ? <IoIosArrowDropupCircle/>: <IoIosArrowDropdownCircle/>}
                   
            </div>
        </div>
        {isOpen && <div className='mt-4'>
            <p className='text-[14px] leading-6
            lg:text-[16px] lg:leading-7 font-[400] text-textColor'>{item.content}</p>
            </div>}

        
    </div>
  )
}

export default FaqItem