import React from "react";

export default function FormattedDate(props) {
  const rawDateTime = new Date(props.rawDateTime);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[rawDateTime.getDay()];
  const date = rawDateTime.getDate();

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
  const month = months[rawDateTime.getMonth()];

  const year = rawDateTime.getFullYear();

  const hour = rawDateTime.getHours();
  let minutes = rawDateTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const formattedDateTime = `${day}, ${date} ${month} ${year} ${hour}:${minutes}`;

  return formattedDateTime;
}
