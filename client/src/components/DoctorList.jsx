import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
    const navigate =useNavigate();
  return (
    <>
      <div className="card my-4  mx-2 border-2 p-2 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 shadow-md" style={{cursor:'Pointer'}} onClick={()=> navigate(`/doctor/book-appointment/${doctor._id}`)}>
        <div className="card-header text-start font-[500] text-[25px] text-yellow-400 px-2 shadow my-2">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
            <p className="text-white text-start px-2">
                <b>Specialization</b> {doctor.specialization}
            </p>
            <p className="text-white text-start px-2">
                <b>Experience</b> {doctor.experience}
            </p>
            <p className="text-white text-start px-2">
                <b>Fees per Consultation</b> {doctor.feesperConsultation}
            </p>
            <p className="text-white text-start px-2">
                <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
            </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
