import React from "react";

export default function PlayPauseStop(props){

    const{
        playPause,
        isTimerRunning,
        stopSession,
        classNames,
    } = props

    return(
        <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            className={classNames({
              oi: true,
              "oi-media-play": !isTimerRunning,
              "oi-media-pause": isTimerRunning,
            })}
          />
        </button>
        {/*Implement stopping the current focus or break session and disable when there is no active session */}
        <button
          type="button"
          className="btn btn-secondary"
          title="Stop the session"
          onClick={stopSession}
        >
          <span className="oi oi-media-stop" />
        </button>
      </div>
    )
}