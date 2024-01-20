import React, { useEffect , useState} from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

const Homepage = () => {
  const [doctors,setDoctors] = useState([])
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/user/getAllDoctors",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if(res.data.success){
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div >
      <Layout className="border-2">
        <h1 className="text-center text-[30px] text-purple-600 mb-10">Home Page</h1>
        <Row className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
    gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
     
    {
            doctors && doctors.map(doctor => (
              <DoctorList doctor={doctor} />
            ))
          }
          
        </Row>
      </Layout>
    </div>
  );
};

export default Homepage;
