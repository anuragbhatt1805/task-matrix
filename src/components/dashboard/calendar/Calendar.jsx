import React from "react";
import {
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";
const Calendar = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl flex font-bold uppercase bg-slate-500 text-white px-5 py-2 justify-center items-center">
          Calendar
        </h1>
      </div>
      <div>
        <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
