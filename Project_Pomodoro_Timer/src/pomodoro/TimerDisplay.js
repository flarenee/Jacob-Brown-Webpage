import React from "react";
import {minutesToDuration} from "../utils/duration";
import {secondsToDuration} from "../utils/duration";



export default function TimeDisplay(props){
    const{
        activeSession,
        modeFocus,
        timerMinutes,
        timerSeconds,
        focusDuration,
        breakDuration,
    } = props;

    function percentage(currentMinutes, currentSeconds, initialMinutes) {
        return 100 - (((currentMinutes * 60) + currentSeconds) / (initialMinutes * 60) * 100);
      }

    return(
        <div style={activeSession ? {display: "block"} : {display: "none"}}>
        {/*This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/*Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">{modeFocus? "Focusing" : "On Break"} for {modeFocus? minutesToDuration(focusDuration) : minutesToDuration(breakDuration)} minutes</h2>
            {/*Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
            {secondsToDuration((timerMinutes * 60) + timerSeconds)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={modeFocus?percentage(timerMinutes, timerSeconds, focusDuration):percentage(timerMinutes, timerSeconds, breakDuration)} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${modeFocus?percentage(timerMinutes, timerSeconds, focusDuration):percentage(timerMinutes, timerSeconds, breakDuration)}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
}