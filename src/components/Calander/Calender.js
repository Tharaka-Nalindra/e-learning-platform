import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import './Calender.css';
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";




const Calender = () => {

    // const handleDateClick = (arg) => { // bind with an arrow function
    //     alert(arg.dateStr)
    //   }
    //   const handleEventDrop = (arg) => {
    //     alert(`Event moved from ${arg.oldEvent.startStr} to ${arg.event.startStr}`);
    // }

    const [selectedDate, setSelectedDate] = useState(null);
    const [calendarEvents, setCalendarEvents] = useState([]);


     // Load events from the server on component mount
        useEffect(() => {
            const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/postevent');
                if (response.ok) {
                const events = await response.json();
                setCalendarEvents(events);
                } else {
                console.error('Failed to fetch events.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
            };

            fetchEvents();
        }, []);



    const handleDateClick = async (arg) => {
        setSelectedDate(arg.date);
        // Prompt the user for event details here (you can use a modal, a form, etc.)
        const eventName = prompt("Enter event name:");
        if (eventName) {
            const eventData = {
                title: eventName,
                start: arg.date,
                allDay: true, // Adjust as needed based on your event structure
            };
            try {
                // Send a POST request to the server to create a new event
                const response = await fetch('http://localhost:5000/api/postevent', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(eventData),
                });
        
                if (response.ok) {
                  // Update the state to add the new event to the calendar
                  setCalendarEvents([...calendarEvents, eventData]);
                  alert(`Event "${eventName}" created on ${arg.dateStr}`);
                } else {
                  alert('Failed to create event. Please try again.');
                }
              } catch(error){

            }

            // Update the state to add the new event to the calendar
            setCalendarEvents([...calendarEvents, eventData]);

            // Here you can submit the event data to your API if needed
            // alert(`Event "${eventName}" created on ${arg.dateStr}`);
        }
    }

    const handleEventDrop = async (arg) => {
        const updatedEvent = {
          id: arg.event.id,
          title: arg.event.title,
          start: arg.event.start,
          allDay: arg.event.allDay,
        };
    
        try {
          const response = await fetch(`http://localhost:5000/api/updateevent/${arg.event.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEvent),
          });
    
          if (response.ok) {
            const updatedEvents = calendarEvents.map(event =>
              event.id === arg.event.id ? updatedEvent : event
            );
            setCalendarEvents(updatedEvents);
            alert(`Event "${arg.event.title}" moved to ${arg.event.startStr}`);
          } else {
            alert('Failed to update event. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
        }
      };

  return (
    <div  className="scheduule">
        <div className="options">
                <CgProfile className="CgProfile-icon"/>
            <ul className="Dash-links" >
                <li><Link to="/Dashboard" >Dashboard</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/Homework">Homework</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/Progress">Progress</Link></li>
                <li><Link to="#">Settings</Link></li>
                <li><Link to="#">Help</Link></li>
            </ul>
        </div>
        <div className="calenderr" style={{width:"160vh"}}>
        <FullCalendar
      plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
      initialView={"dayGridMonth"}
      headerToolbar={{
        start:"today prev,next",
        center:"title",
        end:"dayGridMonth,timeGridWeek,timeGridDay"
      }}
      height={"90vh"}
      editable={true}
      events={calendarEvents}
      // eventDidMount={(info) => {
      //   return new bootstrap.Popover(info.el, {
      //     title: info.event.title,
      //     placement: "auto",
      //     trigger: "hover",
      //     customClass: "popoverStyle",
      //     content:
      //       "<p>Please subscribe<strong>Bootstrap popover</strong>.</p>",
      //     html: true,
      //   });
      // }}
      

      dateClick={handleDateClick}
      eventDrop={handleEventDrop}
    //   eventDrop={handleEventDrop}
        // eventResize={handleEventResize}
       
      />
        </div>
      
    </div>
  )
  
}

export default Calender
