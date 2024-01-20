import {useEffect,useRef, useState} from 'react'
import logo from "../../assets/images/logo.png"
import {NavLink,Link} from 'react-router-dom'
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from "react-icons/bi"
// import { authContext } from '../../context/authContext'

const navlinks=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/findadoctor',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]


const Header = () => {
  const [show,setShow]=useState(true);
  const headerRef=useRef(null);
  const menuRef=useRef(null);
  const handleStickyHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky_header');
      }
      else{
        headerRef.current.classList.remove('sticky_header');
      }
    })
  }
 
  useEffect(()=>{
    handleStickyHeader();
    return ()=>window.removeEventListener('scroll',handleStickyHeader);
  })
  const toggleMenu=()=>{
    menuRef.current.classList.toggle('show_menu');
  }
  return (
    <header className='header flex items-center bg-white border-b-4  rounded-lg rounded-b border-purple-500 shadow-lg  opacity-[0.9] mt-2 mb-0' ref={headerRef} >
      <div className="container">
        <div className='flex items-center justify-between'>
          <div>
            <Link to='/home'>
            <img src={logo} alt="error" className='h-[40px] bg-white '  />
            </Link>
          </div>

          {/* {menu}   yaha hai*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.5rem] mb-0">
              {
                navlinks.map((link,index)=><li>
                  <NavLink to={link.path} className={navClass=>navClass.isActive ?  
                    'text-purple-600 text-[16px] leading-7 font-[600] '
                    : 'text-textColor text-[16px] leading-7 font-[600] hover:text-purple-600'}>
                    {link.display}
                  </NavLink>
                </li>)
              }
            </ul>
          </div>
          {/*nav right*/}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} className='w-full rounded-full' alt="" />
                </figure>
              </Link>
            </div>
            <Link to='/login'>
              <button className='bg-purple-500 py-2 px-8 text-white font-[600] hover:bg-purple-600 transition-all
              h-[40px] flex items-center justify-center rounded-lg'  >
                Login</button>
            </Link>
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-8 h-8 cursor-pointer'/>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header