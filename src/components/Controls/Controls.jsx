import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
import "./controls.sass"
import useSound from "use-sound";
import bellSound from '../../assets/bell.mp3';
import clockSound from '../../assets/clock.mp3';
import {useStateValue} from "../../context/stateProvideer.jsx";
import {actionTypes} from "../../reducer.js";
import TimerMode from "../../TimerMode.js";
const Controls = () => {
   const [{timerValue, busyIndicator, sessionValue, shortBreakValue, longBreakValue, sessionCount, sessionCountValue, timerMode, soundToggle}] = useStateValue();
   const [state, dispatch] = useStateValue();

   const [playSoft] = useSound(bellSound);
   const [playWhisper] = useSound(clockSound);
   const handlePlayPause = () => {
       dispatch({
           ...state,
           type: actionTypes.TOGGLE_IS_BUSY_INDICATOR,
           busyIndicator: !state.busyIndicator
       })
   }

   const handleReset = () => {
       dispatch({
           ...state,
           type: actionTypes.RESET_TIMERS,
           busyIndicator: false,
           sessionValue: sessionValue,
           shortBreakValue: shortBreakValue,
           longBreakValue: longBreakValue,
           timerValue: sessionValue * 60,
           settingVisible: false,
           timerMode: TimerMode.SESSION,
           sessionCount: 0,
           sessionCountValue: sessionCountValue,
           timerLabel: "SESSION",
           initialTimeValue: sessionValue * 60
       })
   }

   const handleCount = () => {
       if (sessionCount == 0) {
           soundToggle ? playWhisper() : null;
           dispatch ({
               ...state,
               type: actionTypes.INCREMENT_SESSION_COUNT,
               sessionCount: sessionCount + 1
           })
       }
       dispatch({
           ...state,
           type: actionTypes.START_TIMER,
           timerValue: timerValue - 1
       })


       if (timerValue <= 0) {
            if (sessionCount >= sessionCountValue ) {
                soundToggle ? playSoft() : null;
               dispatch ({
                   ...state,
                   type: actionTypes.CHANGE_TIMER_MODE,
                   timerMode: TimerMode.LONG_BREAK,
                   initialTimeValue: longBreakValue * 60,
                   timerLabel: "LONG BREAK"
               })
               dispatch ({
                   ...state,
                   type: actionTypes.START_TIMER,
                   timerValue: (longBreakValue * 60) -1
               })
               dispatch ({
                   ...state,
                   type:actionTypes.RESET_SESSION_COUNT,
                   sessionCount: -1
               })
           }
            else if (timerMode === TimerMode.SESSION) {
                soundToggle ? playSoft() : null;

               dispatch({
                   ...state,
                   type: actionTypes.CHANGE_TIMER_MODE,
                   timerMode: TimerMode.SHORT_BREAK,
                   initialTimeValue: shortBreakValue * 60,
                   timerLabel: "SHORT BREAK"
               })
               dispatch({
                   ...state,
                   type: actionTypes.START_TIMER,
                   timerValue: (shortBreakValue * 60) - 1
               })
           }
           else if (sessionCount <= sessionCountValue) {
               soundToggle ? playWhisper() : null;
                       dispatch({
                           ...state,
                           type: actionTypes.CHANGE_TIMER_MODE,
                           timerMode: TimerMode.SESSION,
                           initialTimeValue: sessionValue * 60,
                           timerLabel: "SESSION"
                       })
                       dispatch({
                           ...state,
                           type: actionTypes.START_TIMER,
                           timerValue: (sessionValue * 60) - 1,

                       })
                       dispatch({
                           ...state,
                           type: actionTypes.INCREMENT_SESSION_COUNT,
                           sessionCount: sessionCount + 1
                       })
                   }


                }
           }



    useEffect(() => {
        if (busyIndicator) {
            let timerInterval = setInterval(() => {
                handleCount();
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    })
    return (
      <div className='controls__wrp'>
          <button type='button' id='start_stop' onClick={handlePlayPause}>
              <FontAwesomeIcon icon={busyIndicator ? faPause  : faPlay} />
          </button>
          <button type='button' id='start_stop' onClick={handleReset}>
              <FontAwesomeIcon icon={faRedo} />
          </button>
      </div>
    );
}

export default Controls;