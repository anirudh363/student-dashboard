import React, { useEffect, useState } from "react";
import profile from "../assets/pu4.jpg";
import "../styles/Profile.css";
import Navbar from "../components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await fetch(
          "https://thirty-mirrors-try.loca.lt/isr-practice/us-central1/api/students/2024PFSDC0001"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStudents(data);
        // console.log(students);
        // Save the fetched data to the state
        console.log(data); // Log the fetched data
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentsData();
  }, []);

  // Function to convert seconds and nanoseconds to a human-readable date
  function convertToHumanReadable(seconds, nanoseconds) {
    const date = new Date(seconds * 1000 + nanoseconds / 1000000);
    return date.toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
  }

  const data = {
    student: {
      name: students.name,
      id: students.rollNumber,
      batch: "ABT0",
      course: "Assistant Beauty Therapist",
      // dob: convertToHumanReadable(students.dateOfBirth._seconds, students.dateOfBirth._nanoseconds),
      dob: "08/08/2003",
      academicYear: "2024",
      gender: students.gender,
      religion: students.religion,
      bloodType: students.bloodGroup,
    },
  };

  return (
    <div className="profile-page">
      <Navbar />
      <div className="student-profile">
        <div className="profile-container">
          <div className="profile-card">
            <div className="card-header">
              <img
                className="profile_img"
                src={students.profileImage}
                alt="Profile"
              />
              <h3>{data.student.name}</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>Student ID:</strong> {data.student.id}
              </p>
              <p>
                <strong>Batch:</strong> {data.student.batch}
              </p>
              <p>
                <strong>Course:</strong> {data.student.course}
              </p>
              <p>
                <strong>Date of Birth:</strong> {data.student.dob}
              </p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">
              <h3 className="mb-0">
                <i className="far fa-clone"></i> General Information
              </h3>
            </div>
            <div className="card-body">
              <table className="info-table">
                <tbody>
                  <tr>
                    <th>Academic Year</th>
                    <td>:</td>
                    <td>{data.student.academicYear}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>:</td>
                    <td>{data.student.gender}</td>
                  </tr>
                  <tr>
                    <th>Religion</th>
                    <td>:</td>
                    <td>{data.student.religion}</td>
                  </tr>
                  <tr>
                    <th>Blood Type</th>
                    <td>:</td>
                    <td>{data.student.bloodType}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
