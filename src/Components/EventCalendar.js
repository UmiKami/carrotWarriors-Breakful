import React from "react";
import { useSelector } from "react-redux";

const EventCalendar = ({rowHour}) => {
  const events = useSelector(state => state.calendar.events)

  return (
      <>
          <section className="eventCal__timeStamp" >
              <span className="eventCal__timeStamp-timeString">
                  {rowHour}h
              </span>
              <span className="eventCal__timeStamp-timeOutline"></span>
              {(() => {
                  let eventsAtThisHour = [];

                  if (events.payload === undefined) {
                      return;
                  }

                  for (const event of events.payload) {
                      const eventStartHour = new Date(
                          event.start.dateTime
                      ).getHours();

                      if (eventStartHour === rowHour) {
                          eventsAtThisHour.push(
                              <span className="eventCal__timeStamp-event">
                                  <p className="eventCal__timeStamp-eventHeader">
                                      {event.summary}
                                  </p>
                                  <p className="eventCal__timeStamp-eventTime">
                                      {new Date(
                                          event.start.dateTime
                                      ).toLocaleString("en-US", {
                                          hour: "numeric",
                                          hour12: true,
                                      })}{" "}
                                      -{" "}
                                      {new Date(
                                          event.end.dateTime
                                      ).toLocaleString("en-US", {
                                          hour: "numeric",
                                          hour12: true,
                                      })}
                                  </p>
                              </span>
                          );
                      }
                  }

                  return eventsAtThisHour;
              })()}
          </section>
      </>
  );
};

export default EventCalendar;
