import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon({ weatherID, hour }) {
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
    return (
      <ReactAnimatedWeather
        icon="SLEET"
        color="#8989ba"
        size={250}
        animate={true}
      />
    );
    // weatherIcon.style.color = "#8989ba";
    // cityName.style.color = "#8989ba";
    // currentTemperature.style.color = "#8989ba";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #8989ba 0%, #a7a6cb 100%)";
  } else if (weatherID >= 500 && weatherID < 600) {
    // rain
    return (
      <ReactAnimatedWeather
        icon="RAIN"
        color="#325A8F"
        size={250}
        animate={true}
      />
    );

    // cityName.style.color = "#325A8F";
    // currentTemperature.style.color = "#325A8F";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #330867 0%, #30cfd0 100%)";
  } else if (weatherID >= 600 && weatherID < 700) {
    // snow
    return (
      <ReactAnimatedWeather
        icon="SNOW"
        color="#7ABBE0"
        size={250}
        animate={true}
      />
    );
    // weatherIcon.style.color = "#7ABBE0";
    // cityName.style.color = "#7ABBE0";
    // currentTemperature.style.color = "#7ABBE0";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #c8d7e0 0%, #d7e7f0 100%)";
  } else if (weatherID >= 700 && weatherID < 762) {
    // 'atmosphere'
    return (
      <ReactAnimatedWeather
        icon="FOG"
        color="#939395"
        size={250}
        animate={true}
      />
    );
    // weatherIcon.style.color = "#939395";
    // cityName.style.color = "#939395";
    // currentTemperature.style.color = "#939395";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #B0B1B4 0%, #C3C4C8 52%, #dcdddf 100%)";
  } else if (weatherID === 771 || weatherID === 781) {
    //windy af
    return (
      <ReactAnimatedWeather
        icon="WIND"
        color="#626266"
        size={250}
        animate={true}
      />
    );
    // weatherIcon.style.color = "#626266";
    // cityName.style.color = "#626266";
    // currentTemperature.style.color = "#626266";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #9D9EA3 0%, #BDBBBE 100%)";
  } else if (weatherID === 800) {
    // clear

    if (hour > 7 && hour < 19) {
      return (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#6f86d6"
          size={250}
          animate={true}
        />
      );
    } else {
      return (
        <ReactAnimatedWeather
          icon="CLEAR_NIGHT"
          color="#6f86d6"
          size={250}
          animate={true}
        />
      );
    }

    // cityName.style.color = "#6f86d6";
    // currentTemperature.style.color = "#6f86d6";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #6f86d6 0%, #48c6ef 100%)";
  } else if (weatherID >= 801 && weatherID <= 803) {
    // partly cloudy

    if (hour > 7 && hour < 19) {
      return (
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="#7496CD"
          size={238}
          animate={true}
        />
      );
    } else {
      return (
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_NIGHT"
          color="#7496CD"
          size={238}
          animate={true}
        />
      );
    }

    // cityName.style.color = "#7496CD";
    // currentTemperature.style.color = "#7496CD";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #bbcae2 0%, #dee9f6 100%)";
  } else if (weatherID === 804) {
    // cloudy
    return (
      <ReactAnimatedWeather
        icon="CLOUDY"
        color="#486FB6"
        size={250}
        animate={true}
      />
    );

    // cityName.style.color = "#486FB6";
    // currentTemperature.style.color = "#486FB6";
    // app.style.backgroundImage =
    //   "linear-gradient(to right top, #6a85b6 0%, #bac8e0 100%)";
  } else {
    return "";
  }
}
