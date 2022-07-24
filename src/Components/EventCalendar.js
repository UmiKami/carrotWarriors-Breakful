import React from "react";
import { useSelector } from "react-redux";

const EventCalendar = () => {
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
    <div className="eventCal">
      {
        events.payload != undefined && events.payload.length == 0 ? <div>vazio</div> : <div>funfou</div>
      }
      <section className="eventCal__timeStamp" id="hour-1">
        <span className="eventCal__timeStamp-timeString">1 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
        <span className="eventCal__timeStamp-event">
          <p className="eventCal__timeStamp-eventHeader">
            Group Sprint Daily Meeting
          </p>
          <p className="eventCal__timeStamp-eventTime">1:00 am - 2:00 am</p>
        </span>
      </section>
      <section className="eventCal__timeStamp" id="hour-2">
        <span className="eventCal__timeStamp-timeString">2 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-3">
        <span className="eventCal__timeStamp-timeString">3 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-4">
        <span className="eventCal__timeStamp-timeString">4 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-5">
        <span className="eventCal__timeStamp-timeString">5 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-6">
        <span className="eventCal__timeStamp-timeString">6 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-7">
        <span className="eventCal__timeStamp-timeString">7 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-8">
        <span className="eventCal__timeStamp-timeString">8 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
        <span className="eventCal__timeStamp-event">
          <p className="eventCal__timeStamp-eventHeader">Physics Class</p>
          <p className="eventCal__timeStamp-eventTime">8:00 am - 9:00 am</p>
        </span>
      </section>
      <section className="eventCal__timeStamp" id="hour-9">
        <span className="eventCal__timeStamp-timeString">9 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-10">
        <span className="eventCal__timeStamp-timeString">10 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-11">
        <span className="eventCal__timeStamp-timeString">11 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-12">
        <span className="eventCal__timeStamp-timeString">12 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-13">
        <span className="eventCal__timeStamp-timeString">1 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-14">
        <span className="eventCal__timeStamp-timeString">2 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-15">
        <span className="eventCal__timeStamp-timeString">3 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-16">
        <span className="eventCal__timeStamp-timeString">4 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-17">
        <span className="eventCal__timeStamp-timeString">5 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-18">
        <span className="eventCal__timeStamp-timeString">6 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-19">
        <span className="eventCal__timeStamp-timeString">7 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-20">
        <span className="eventCal__timeStamp-timeString">8 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-21">
        <span className="eventCal__timeStamp-timeString">9 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-22">
        <span className="eventCal__timeStamp-timeString">10 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-23">
        <span className="eventCal__timeStamp-timeString">11 PM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
      <section className="eventCal__timeStamp" id="hour-24">
        <span className="eventCal__timeStamp-timeString">12 AM</span>
        <span className="eventCal__timeStamp-timeOutline"></span>
      </section>
    </div>
  );
};

export default EventCalendar;
