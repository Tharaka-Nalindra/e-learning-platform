import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./CalanderModule.css";

function Calendar() {
  const events = [
    {
      title: "The Title",
      start: "2023-01-05T08:00:00",
      end: "2023-01-05T16:00:00", // 4 pm
    },
  ];

  const calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: "timeGridWeek",
    headerToolbar: {
      start: "today prev,next",
      center: "title",
      end: "timeGridWeek,timeGridDay",
    },
    height: "90vh",
    events: events,
    slotMinTime: "08:00:00", // Set the minimum time to 8 am
    slotMaxTime: "16:00:00", // Set the maximum time to 4 pm
    eventDidMount: (info) => {
      return new bootstrap.Popover(info.el, {
        title: info.event.title,
        placement: "auto",
        trigger: "hover",
        customClass: "popoverStyle",
        content: "<p>Please subscribe<strong>Bootstrap popover</strong>.</p>",
        html: true,
      });
    },
    themeSystem: "bootstrap", // Use Bootstrap theme system
  };

  return (
    <div className="calendar-container"> {/* Add a class for custom styling */}
      <FullCalendar {...calendarOptions} />
    </div>
  );
}

export default Calendar;
