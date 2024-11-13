import React from "react";
// import Repor from "../components/ReportsCard";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import AttendanceCard from "../components/AttendanceCard";
// import CourseCard from "../components/UploadsCard";
import ProfileCard from "../components/ProfileCard";

import StudentAttendanceCalendar from "../components/MonthlyAttendance";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <div className="card-wrapper">
          
          <div className="profile-home-card">
            <ProfileCard />
          </div>

          <div className="attendance-chart-card">
            <AttendanceCard />
          </div>

          {/* <ReportsCard />
          <UploadsCard /> */}
          <div className="attendance-calendar-card">
            <StudentAttendanceCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
