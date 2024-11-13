import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

const initialValue = dayjs(); // Set to today's date

// Attendance data for each month
const attendanceDataByMonth = {
  10: {
    // November
    present: [1, 2, 4, 5, 6],
    absent: [3],
  },
  9: {
    // October
    present: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22,
    ],
    absent: [],
  },
  8: {
    // September
    present: [2, 3, 5, 6, 8, 10, 11, 12, 14, 16, 18, 19, 20, 22, 25],
    absent: [],
  },
};

function AttendanceDay(props) {
  const {
    presentDays = [],
    absentDays = [],
    day,
    outsideCurrentMonth,
    ...other
  } = props;

  // Determine if the day is marked as present or absent
  const isPresent = !outsideCurrentMonth && presentDays.includes(day.date());
  const isAbsent = !outsideCurrentMonth && absentDays.includes(day.date());

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      sx={{
        ".MuiBadge-badge": {
          backgroundColor: isPresent
            ? "#4CAF50"
            : isAbsent
            ? "#f44336"
            : "transparent",
          color: isPresent || isAbsent ? "#fff" : undefined,
          width: 6,
          height: 6,
          borderRadius: "50%",
        },
      }}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        sx={{
          borderRadius: "50%",
          backgroundColor: isPresent
            ? "#C8E6C9"
            : isAbsent
            ? "#FFCDD2"
            : undefined,
          color: isPresent || isAbsent ? "#000" : undefined,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: isPresent
              ? "#66BB6A"
              : isAbsent
              ? "#E57373"
              : "#f0f0f0",
          },
          "&.Mui-selected": {
            backgroundColor: "#3f51b5 !important",
            color: "#fff",
          },
        }}
      />
    </Badge>
  );
}
export default function StudentAttendanceCalendar() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [attendanceData, setAttendanceData] = React.useState({
    present: [],
    absent: [],
  });

  // Update attendance data based on the selected month
  const handleMonthChange = (date) => {
    setIsLoading(true);
    const month = date.month(); // Get month as a number (0 = January, 11 = December)
    setAttendanceData(
      attendanceDataByMonth[month] || { present: [], absent: [] }
    );
    setTimeout(() => setIsLoading(false), 500); // Simulate loading
  };

  React.useEffect(() => {
    // Set initial month data based on today's month
    const month = initialValue.month();
    setAttendanceData(
      attendanceDataByMonth[month] || { present: [], absent: [] }
    );
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: AttendanceDay,
        }}
        slotProps={{
          day: {
            presentDays: attendanceData.present,
            absentDays: attendanceData.absent,
          },
        }}
        sx={{
          backgroundColor: "", // Set calendar background to grey
          borderRadius: "8px", // Optional: Add rounded corners for a softer look
          padding: "10px", // Optional: Add padding for a more spacious look
        }}
      />
    </LocalizationProvider>
  );
}
