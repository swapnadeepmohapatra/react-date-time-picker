import React, { useState } from "react";
import TimeHour from "./TimeHour";
import TimeMinute from "./TimeMinute";
import Calender from "./Calender";

function App() {
  const [state, setState] = useState(0);
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [date, setDate] = useState("00");

  const changeState = () => {
    setState(state + 1);
  };

  return (
    <div>
      {state === 0 && <TimeHour changeState={changeState} setHour={setHour} />}
      {state === 1 && (
        <TimeMinute
          changeState={changeState}
          setMinute={setMinute}
          selectedHour={hour}
        />
      )}
      {state === 2 && <Calender changeState={changeState} setDate={setDate} />}
      {state === 3 && (
        <div>
          <h1>
            Time: {hour} : {minute}
          </h1>
          <h1>
            Date : {date.date} / {date.month} / {date.year}
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;

// {/* <Calender /> */}
// {/* <TimeHour /> */}
// {/* <TimeMinute /> */}
