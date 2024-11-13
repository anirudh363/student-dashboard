import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

// StyledCard with light blue background and flex properties
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "200px", // Adjust the height as needed
  backgroundColor: "yellow", // Light blue background color
  padding: theme.spacing(2), // Adjust padding if needed
}));

const ProfileCard = () => {
  const [studentData, setStudentData] = useState(null);
  const rollNumber = "2024PFSDC0001"; // Your roll number

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://thirty-mirrors-try.loca.lt/isr-practice/us-central1/api/students/${rollNumber}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [rollNumber]);

  if (!studentData) {
    return <Typography>Loading...</Typography>; // Show loading state
  }

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontSize: "1.25rem" }}>
          Profile
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          Name - {studentData.name}
          <br />
          Roll Number - {studentData.rollNumber}
          <br />
          Mobile No. - {studentData.phone}
          <br />
          Course - TBK
          <br />
          Batch - TBK
          <br />
          Trainer - TBK
          <br />
          Mid Term - TBK
          <br />
          End Term - TBK
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ fontWeight: "bold" }} // Make the button text bold
        >
          <Link to="/profile">More Details</Link>
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ProfileCard;
