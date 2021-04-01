import React from "react";

export default function ForecastIcon(props) {
  // console.log(props);

  if (props.iconCode >= 200 && props.iconCode < 300) {
    // thunderstorms
    return <i className="fas fa-bolt" />;
  } else if (props.iconCode >= 300 && props.iconCode < 500) {
    // drizzle
    return <i className="fas fa-cloud-rain" />;
  } else if (props.iconCode >= 500 && props.iconCode < 600) {
    // rain
    return <i className="fas fa-cloud-showers-heavy" />;
  } else if (props.iconCode >= 600 && props.iconCode < 700) {
    // snow
    return <i className="fas fa-snowflake" />;
  } else if (props.iconCode >= 700 && props.iconCode < 762) {
    // 'atmosphere'
    return <i className="fas fa-smog" />;
  } else if (props.iconCode === 771 || props.iconCode === 781) {
    //windy af
    return <i className="fas fa-wind" />;
  } else if (props.iconCode === 800) {
    // clear
    return <i className="fas fa-sun" />;
  } else if (props.iconCode >= 801 && props.iconCode <= 803) {
    // light clouds
    return <i className="fas fa-cloud-sun" />;
  } else if (props.iconCode === 804) {
    // cloudy
    return <i className="fas fa-cloud" />;
  } else {
    return null;
  }
}
