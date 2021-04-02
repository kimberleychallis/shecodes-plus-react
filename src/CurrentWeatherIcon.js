import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon({ weatherID, hour }) {
  if (weatherID >= 200 && weatherID < 300) {
    // thunderstorms
    return <i class="fas fa-bolt"></i>;
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
          size={260}
          animate={true}
        />
      );
    }
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
  } else {
    return "";
  }
}
