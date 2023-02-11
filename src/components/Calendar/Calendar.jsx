import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Box, useTheme } from "@mui/system";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const theme = useTheme();
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box display="flex" justifyContent="space-between">
      <Box
        flex="1 1 20%"
        p="15px"
        backgroundColor={`${theme.palette.background.add}`}
      >
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                margin: "10px 0",
                borderRadius: "2px",
                backgroundColor: "secondary.dark",
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box flex="1 1 100%" ml="15px">
        <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {
              id: "1",
              title: "Angela Birthday",
              date: "2023-02-14",
            },
            {
              id: "2",
              title: "IT Conference",
              date: "2023-02-28",
            },
          ]}
        />
      </Box>
    </Box>
  );
}
