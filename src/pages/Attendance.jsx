import * as React from "react";
import Navbar from "../components/Navbar";
import "../styles/Attendance.css";
import MonthyAttendanceChart from "../components/MonthlyAttendance";

const Attendance = () => {
  return (
    <div className="attendance-page">
      <Navbar />
      <div className="attendance-container">
        <div className="attendance-wrapper">
          <MonthyAttendanceChart />
        </div>
      </div>
    </div>
  );
};

export default Attendance;
