import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DatePicker, TimePicker, message } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const Bookingpage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [isAvailibale, setIsAvailibale] = useState();
  const dispatch = useDispatch();
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleBooking = async () => {
    try {
        setIsAvailibale(true);
        if(!date && !time){
            return alert("Date and time required");
        }
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/booking-availbility",
        { doctorId: params.doctorId, date, time },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailibale(true);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <h3 className="text-center text-purple-600 text-[30px] m-4">Booking Page</h3>
      <div className="p-4">
        {doctors && (
          <div className="border-2 p-2 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600">
            <h4 className="text-[26px] text-white  inline capitalize ">
              Dr. {doctors.firstName} {doctors.lastName}
            </h4>
            <h4 className="text-[20px] mt-2 text-white capitalize"> Fees : {doctors.feesPerCunsaltation}</h4>
            <h4></h4>
            <div className="d-flex flex-column">
              <DatePicker
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) => {
                  setIsAvailibale(false);
                  setDate(moment(value).format("DD-MM-YYYY"));
                }}
              />
              <TimePicker
                className="m-2"
                format="HH:mm"
                onChange={(value) => {
                  setIsAvailibale(false);
                  setTime(moment(value).format("HH:mm"));
                }}
              />
             
                
              <button
                className="btn m-2 shadow-inner show-white border border-white"
                onClick={handleAvailability}
              >
                Check Availability
              </button>
              {!isAvailibale && (
                <button className="btn btn-dark m-2 shadow-inner show-white border border-white" onClick={handleBooking}>
                  Book Now
                </button>

              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Bookingpage;
