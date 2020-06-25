import React, { useState, useEffect } from "react";
import Styles from "./index.module.css";
// import Styles from "../TimeHour/index.module.css";
// import { ReactComponent as Left } from "./left.svg";
// import { ReactComponent as Right } from "./right.svg";

const monthsList = [];
const dateList = [];
const daysList = [[], []];
const currentDate = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calender({ setDate, changeState }) {
  const [isChanged, setIsChanged] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    date: new Date().getDate(),
    month: months[currentDate.getMonth()],
    year: new Date().getFullYear(),
  });
  const [dateThere, setDateThere] = useState(false);

  useEffect(() => {
    monthsList.splice(0);
    dateList.splice(0);
    daysList[0].splice(0);
    daysList[1].splice(0);
    renderCalender();
    console.log(currentDate);

    const id = setInterval(() => setIsChanged(), 10);
    return () => {
      clearInterval(id);
    };
  }, [isChanged]);

  currentDate.setDate(1);

  const lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  const firstDayIndex = currentDate.getDay();

  const lastDayIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const renderCalender = () => {
    for (let x = firstDayIndex; x > 0; x--) {
      daysList[0].push(prevLastDay - x + 1);
      daysList[1].push(`${Styles.prevDate}`);
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear()
      ) {
        daysList[0].push(i);
        daysList[1].push(`${Styles.today}`);
      } else if (
        i === selectedDate.date &&
        months[currentDate.getMonth()] === selectedDate.month &&
        currentDate.getFullYear() === selectedDate.year
      ) {
        daysList[0].push(i);
        daysList[1].push(`${Styles.selected}`);
      } else {
        daysList[0].push(i);
        daysList[1].push("");
      }
      dateList.push(i);
    }

    for (let j = 1; j <= nextDays; j++) {
      daysList[0].push(j);
      daysList[1].push(`${Styles.nextDate}`);
    }

    for (let index = 1; index <= nextDays; index++) {
      monthsList.push(index);
    }
  };

  return (
    <div className={Styles.containerCalender}>
      <div className={Styles.calendar}>
        <div className={Styles.selectDate}>
          <p>{selectedDate.year}</p>
          <h1>
            {selectedDate.date} {selectedDate.month}
          </h1>
        </div>
        <div className={Styles.month}>
          <button
            onClick={() => {
              setIsChanged(!isChanged);
              currentDate.setMonth(currentDate.getMonth() - 1);
            }}
          >
            {/* <Left /> */}
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.4 1.4L6 0L0 6L6 12L7.4 10.6L2.8 6L7.4 1.4Z"
                fill="black"
              />
            </svg>
          </button>
          <div className={Styles.date}>
            <h1>
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h1>
          </div>
          <button
            onClick={() => {
              setIsChanged(!isChanged);
              currentDate.setMonth(currentDate.getMonth() + 1);
            }}
          >
            {/* <Right /> */}
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.599609 1.4L1.99961 0L7.99961 6L1.99961 12L0.599609 10.6L5.19961 6L0.599609 1.4Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className={Styles.weekdays}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className={Styles.days}>
          {daysList[1].map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  console.log(
                    daysList[0][index],
                    currentDate.getMonth(),
                    currentDate.getFullYear()
                  );
                  setSelectedDate({
                    date: daysList[0][index],
                    month: months[currentDate.getMonth()],
                    year: currentDate.getFullYear(),
                  });
                  setIsChanged(!isChanged);
                  setDateThere(true);
                }}
                className={daysList[1][index]}
              >
                {daysList[0][index]}
              </div>
            );
          })}
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
            disabled={!dateThere}
            onClick={() => {
              setDate(selectedDate);
              changeState();
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
