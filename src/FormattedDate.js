import React from "react";

export default function FormattedDate(props) {
  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  // const day = days[props.rawDateTime.getDay()];

  const rawDateTime = new Date(props.rawDateTime);

  return rawDateTime;
}
