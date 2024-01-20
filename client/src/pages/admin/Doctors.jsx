import React ,{useEffect,useState} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { Table, message } from 'antd'

const Doctors = () => {
    const [doctors,setDoctors] = useState([])
    const getDoctors = async()=>{
        try {
            const res = await axios.get('http://localhost:8080/api/v1/admin/getAllDoctors',{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            if(res.data.success){
                setDoctors(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleAccountStatus = async(record,status)=>{
        try {
            const res = await axios.post('http://localhost:8080/api/v1/admin/changeAccountStatus',
            {doctorId:record._id,userId:record.userId,status:status},
            {    
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            if(res.data.success){
                message.success(res.data.success)
                window.location.reload()
            }
        } catch (error) {
            message.error("Something went wrong")
        }
    }

    useEffect(()=>{
        getDoctors()
    },[])
    const columns =[
        {
            title:'Name',
            dataIndex:'name',
            render:(text,record)=>(
                <span>{record.firstName} {record.lastName}</span>
            )
        },
        {
            title:'Status',
            dataIndex:'status',
        },
        {
            title:'Phone',
            dataIndex:'phone',
        },
        {
            title:'Actions',
            dataIndex:'actions',
            render:(text,record)=>(
                <div className='d-flex text-center m-2'>
                    {
                        record.status === 'pending' ? (
                            <button className='btn btn-success' onClick={()=> handleAccountStatus(record,'approved')}>Approve</button>
                        ) : (
                            <button className='btn btn-success'>Reject</button>
                        )
                    }
                </div>
            ),
        },
    ];
  return (
    <Layout>
      <h1>Doctors List</h1>
      <Table columns={columns} dataSource={doctors} />
    </Layout>
  );
}

export default Doctors