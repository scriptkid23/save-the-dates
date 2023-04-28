import React from "react";
import { useCountdown } from "../useCountdown";
import withNoSSR from "../NoSSR";

const startTime = "2023-05-07";
function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(startTime);

  return (
    <div className="countdown-wrapper">
      {days && (
        <div className="countdown-item">
          {days < 10 ? `0${days}` : days}
          <span>days</span>
        </div>
      )}
      {hours && (
        <div className="countdown-item">
          {hours < 10 ? `0${hours}` : hours}
          <span>hours</span>
        </div>
      )}
      {minutes && (
        <div className="countdown-item">
          {minutes < 10 ? `0${minutes}` : minutes}
          <span>minutes</span>
        </div>
      )}

      <div className="countdown-item">
        {seconds < 10 ? `0${seconds}` : seconds}
        <span>seconds</span>
      </div>
    </div>
  );
}
export default withNoSSR(Countdown);
