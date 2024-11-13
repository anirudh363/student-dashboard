import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { styled } from "@mui/system";
import "../styles/Attendance.css";

// StyledCard with centered layout
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  height: "300px",
  width: "200px",
  backgroundColor: "#FFFF8F", // Adjust background color as needed
  padding: theme.spacing(3), // Increase padding for better spacing
  borderRadius: "12px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
}));

const GraphContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "250px", // Adjust height as needed
  width: "250px", // Centered and sized container
  borderRadius: "50%", // Make the container circular
  padding: theme.spacing(2),
}));

export default function AttendanceCard() {
  return (
    <StyledCard>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          className="card-heading"
          variant="h5"
          component="div"
          sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Attendance
        </Typography>
        <GraphContainer>
          <Gauge
            width={180} // Adjust gauge size
            height={180}
            value={75.2}
            className="graph-container"
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: "40px", // Adjust font size for better alignment
                fontWeight: "bold",
              },
            }}
          />
        </GraphContainer>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", width: "100%" }}>
        <Button
          size="medium"
          sx={{ fontWeight: "bold", fontSize: "0.9rem" }} // Adjust button font size
        >
        </Button>
      </CardActions>
    </StyledCard>
  );
}
