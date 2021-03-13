import React from "react";

export default function Icon({ weatherID }) {
  // console.log(props.weatherID);

  if (weatherID >= 200 && weatherID < 300) {
    // thunderstorms
    return <i class="fas fa-bolt"></i>;
    // weatherIcon.style.color = "#321575";
    // cityName.style.color = "#321575";
    // currentTemperature.style.color = "#321575";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #321575 0%, #8D0B93 50%, #FF057C 100%)";
  } else if (weatherID >= 300 && weatherID < 500) {
    // drizzle
    return <i class="fas fa-cloud-rain"></i>;
    // weatherIcon.style.color = "#8989ba";
    // cityName.style.color = "#8989ba";
    // currentTemperature.style.color = "#8989ba";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #8989ba 0%, #a7a6cb 100%)";
  } else if (weatherID >= 500 && weatherID < 600) {
    // rain
    return <i class="fas fa-cloud-showers-heavy"></i>;
    // weatherIcon.style.color = "#325A8F";
    // cityName.style.color = "#325A8F";
    // currentTemperature.style.color = "#325A8F";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #330867 0%, #30cfd0 100%)";
  } else if (weatherID >= 600 && weatherID < 700) {
    // snow
    return <i class="fas fa-snowflake"></i>;
    // weatherIcon.style.color = "#7ABBE0";
    // cityName.style.color = "#7ABBE0";
    // currentTemperature.style.color = "#7ABBE0";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #c8d7e0 0%, #d7e7f0 100%)";
  } else if (weatherID >= 700 && weatherID < 762) {
    // 'atmosphere'
    return <i class="fas fa-smog"></i>;
    // weatherIcon.style.color = "#939395";
    // cityName.style.color = "#939395";
    // currentTemperature.style.color = "#939395";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #B0B1B4 0%, #C3C4C8 52%, #dcdddf 100%)";
  } else if (weatherID === 771 || weatherID === 781) {
    //windy af
    return <i class="fas fa-wind"></i>;
    // weatherIcon.style.color = "#626266";
    // cityName.style.color = "#626266";
    // currentTemperature.style.color = "#626266";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #9D9EA3 0%, #BDBBBE 100%)";
  } else if (weatherID === 800) {
    // clear
    return <i class="fas fa-sun"></i>;
    // weatherIcon.style.color = "#6f86d6";
    // cityName.style.color = "#6f86d6";
    // currentTemperature.style.color = "#6f86d6";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #6f86d6 0%, #48c6ef 100%)";
  } else if (weatherID >= 801 && weatherID <= 803) {
    // light clouds
    return <i class="fas fa-cloud-sun"></i>;
    // weatherIcon.style.color = "#7496CD";
    // cityName.style.color = "#7496CD";
    // currentTemperature.style.color = "#7496CD";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #bbcae2 0%, #dee9f6 100%)";
  } else if (weatherID === 804) {
    // cloudy
    return <i class="fas fa-cloud"></i>;
    // weatherIcon.style.color = "#486FB6";
    // cityName.style.color = "#486FB6";
    // currentTemperature.style.color = "#486FB6";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #6a85b6 0%, #bac8e0 100%)";
  } else {
    return "";
  }
}
