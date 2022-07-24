import React from "react";
import { useSelector } from "react-redux";

const EventCalendar = (props) => {
  const events = useSelector(state => state.calendar.events)


  /*
    big picture: dado que, temos um array de eventos, itere em cada item e execute:
    - pegue o start and end date do evento
    - extrai a hora do start date
    - constroi o ID que seria "hour-${hourStartDate}"
    - procura no DOM a section associada a esse ID
    - renderiza o component com o devido conteudo
    <span className="eventCal__timeStamp-event">
      <p className="eventCal__timeStamp-eventHeader">
        summary
      </p>
      <p className="eventCal__timeStamp-eventTime">startTime - endTime</p>
    </span>
  */

  return (
    <>
      <section className="eventCal__timeStamp">
        <span className="eventCal__timeStamp-timeString">{props.rowHour}h</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
        {(() => {
          let eventsAtThisHour = []

          if(events.payload === undefined) {
            return;
          }

          for (const event of events.payload) {
            const eventStartHour = new Date(event.start.dateTime).getHours();

            if(eventStartHour === props.rowHour) {
                eventsAtThisHour.push(
                <span className="eventCal__timeStamp-event">
                  <p className="eventCal__timeStamp-eventHeader">
                    {event.summary}
                  </p>
                  <p className="eventCal__timeStamp-eventTime">{new Date(event.start.dateTime).toLocaleString('en-US', { hour: 'numeric', hour12: true })} - {new Date(event.end.dateTime).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</p>
                </span>
              )
            }
          }
          
          return eventsAtThisHour;
        })()}
      </section>
    </>
  );
};

export default EventCalendar;
