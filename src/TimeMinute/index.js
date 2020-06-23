import React, { useState, useEffect } from "react";
import Styles from "./index.module.css";

const list = ["10", "15", 20, 25, 30, 35, 40, 45, 50, 55, "00", "05"];

function TimeMinute({ selectedHour }) {
  const [selectedMinute, setSelectedMinute] = useState();

  return (
    <div className={Styles.app}>
      <div className={Styles.container}>
        <div className={Styles.selected}>
          <h1>
            <strong>{selectedHour ? selectedHour : "00"}</strong> :{" "}
            {selectedMinute ? selectedMinute.toString() : "00"}
          </h1>
        </div>
        <div className={Styles.clockParent}>
          <div className={Styles.clockBackground}>
            <div className={Styles.clock}>
              <ul class={Styles.circleContainer}>
                {list.map((item, index) => {
                  return (
                    <li
                      className={
                        selectedMinute === item
                          ? `${Styles.selectedTime}`
                          : null
                      }
                      onClick={() => {
                        setSelectedMinute(item);
                      }}
                    >
                      <h1>{item}</h1>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.okayCancelButtons}>
          <button
            onClick={() => {
              alert("cancel");
            }}
          >
            CANCEL
          </button>
          <button
            disabled={!selectedMinute}
            onClick={() => {
              alert(selectedMinute);
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeMinute;
