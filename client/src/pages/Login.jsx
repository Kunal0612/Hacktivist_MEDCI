import React from 'react'
import {Form, Input , message} from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading , hideLoading } from '../redux/features/alertSlice';
import {Link , useNavigate} from 'react-router-dom'
import "../styles/LoginStyles.css"

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onfinishHandler= async(values)=>{
        try {
            dispatch(showLoading())
            const res = await axios.post('http://localhost:8080/api/v1/user/login',values)
            window.location.reload()
            dispatch(hideLoading())
            if(res.data.success){
                localStorage.setItem("token",res.data.token);
                message.success('Login successful')
                navigate('/user-home')
            }
            else{
                message.error(res.data.message);
            }
        } 
        catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error('Something Went Wrong');
        }
    }
  return (
    <>
    <div className='form-container bg-gradient-to-tr  from-purple-700 from-30% via-purple-500 via-40% to-purple-700 to-70% mb-2 z-0 '>
        <Form layout="vertical" onFinish={onfinishHandler} className='p-[30px] border-4 w-[370px] border-yellow-400 rounded-lg shadow-lg shadow-purple-300 bg-white'>
            <h3 className='text-left text-purple-600 text-[30px]' >Login/Register Form</h3>
            <Form.Item label="Email" name="email" >
                <Input type="email" required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input type="password" required/>
            </Form.Item>
            <div className='flex flex-col lg:flex-row gap-2 justify-between p-2 
            '>
            <Link to="/register" className=" text-center w-[55%] text-[16px] font-[500] py-5 text-purple-500 hover:text-yellow-400 ">Click here to Register</Link>
            <button className='btn  mt-0 text-[16px] font-[500]' type="submit">
                Login
            </button>
            </div>
            
        </Form>
    </div>
    </>
  )
}

export default Login