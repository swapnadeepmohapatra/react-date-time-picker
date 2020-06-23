import React, { useState } from "react";
import Styles from "./index.module.css";

function TimeHour() {
  const [selectedHour, setSelectedHour] = useState();
  const [selectedFormat, setSelectedFormat] = useState(true);

  const list = selectedFormat
    ? [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
    : [15, 16, 17, 18, 19, 20, 21, 22, 23, "00", 13, 14];

  return (
    <div className={Styles.app}>
      <div className={Styles.container}>
        <div className={Styles.selected}>
          <h1>
            {selectedHour ? selectedHour.toString() : "00"} :
            <strong> 00</strong>
          </h1>
        </div>
        <div className={Styles.clockParent}>
          <div className={Styles.clockBackground}>
            <div className={Styles.clock}>
              <div className={Styles.mid}>
                <div
                  onClick={() => {
                    setSelectedFormat(!selectedFormat);
                  }}
                >
                  <svg
                    style={{
                      transform: selectedFormat ? "rotate(180deg)" : null,
                    }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 2.8L16.1622 0L4 12L16.1622 24L19 21.2L9.67568 12L19 2.8Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <ul class={Styles.circleContainer}>
                {list.map((item, index) => {
                  return (
                    <li
                      className={selectedHour === item ? "selectedTime" : null}
                      onClick={() => {
                        setSelectedHour(item);
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
            disabled={!selectedHour}
            onClick={() => {
              alert(selectedHour);
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeHour;
