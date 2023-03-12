import {useStateValue} from "../../context/stateProvideer.jsx";
import Button from "../Button/Button.jsx";
import './Settings.sass'
import {actionTypes} from "../../reducer.js";
import React, { Component } from "react";
//import Toggle from 'react-styled-toggle';
import Switch from '@mui/material/Switch';

const Settings = () => {
    const [{settingVisible, sessionValue, shortBreakValue, longBreakValue,  soundToggle}] = useStateValue();
    const [state, dispatch] = useStateValue();



    const handleSessionTimeChange = (event) => {
        event.preventDefault();

        dispatch ({
            ...state,
            type: actionTypes.CHANGE_SESSION_TIME,
            sessionValue: event.target.value,
            timerValue: event.target.value * 60,
            initialTimeValue:  event.target.value * 60
            })

    }
    const handleShortBreakTimeChange = (event) => {
        event.preventDefault();

        dispatch ({
            ...state,
            type:actionTypes.CHANGE_SHORT_BREAK_TIME,
            shortBreakValue: event.target.value,
            timerValue: event.target.value * 60,
            initialTimeValue: event.target.value * 60
        })
    }

    const handleLongBreakTimeChange = (event) => {
        event.preventDefault();

        dispatch({
            ...state,
            type:actionTypes.CHANGE_LONG_BREAK_TIME,
            longBreakValue: event.target.value,
            timerValue: event.target.value * 60,
            initialTimeValue: event.target.value * 60
        })
    }

    const handleSessionCountChange = (event) => {
        event.preventDefault();

        dispatch({
            ...state,
            type: actionTypes.CHANGE_SESSION_COUNT,
            sessionCount: 0,
            sessionCountValue: event.target.value
        })
    }
    const handleSoundSwitch = (event) => {
        event.preventDefault();

        dispatch({
            type: actionTypes.TOGGLE_SOUND_SETTING,
            soundToggle: event.target.checked,
        })
    }

    if (settingVisible) {
        return (
            <>
                <div className="preferences preferences--visible">
                    <div className="preferences__pane">
                        <Button type="close" />
                        <h2>Settings</h2>
                        <form>
                            <h3>Time (Minutes)</h3>
                            <div className="time-setting__form">
                                <div>
                                    <label htmlFor="session">Session Minutes</label>
                                    <input type="number" name="session" id="session" min="5" max="90" defaultValue={sessionValue} onChange={handleSessionTimeChange}/>
                                </div>
                                <div>
                                    <label htmlFor="short-break">Short Break Minutes</label>
                                    <input type="number" name="shortBreak" id="short-break" min="1" max="15" defaultValue={shortBreakValue} onChange={handleShortBreakTimeChange}/>
                                </div>
                                <div>
                                    <label htmlFor="long-break">Long Break Minutes</label>
                                    <input type="number" name="LongBreak" id="long-break" min="15" max="90" defaultValue={longBreakValue} onChange={handleLongBreakTimeChange}/>
                                </div>
                                <div>
                                    <label htmlFor="session-count">How Many Sessions</label>
                                    <input type="number" name="SessionCount" id="session-count" min="1" max="10" defaultValue="4" onChange={handleSessionCountChange}/>
                                </div>
                                <div>
                                <label htmlFor="sound-toggle" className="switch_label">Sound On / Off</label>

                                <Switch
                                        checked={soundToggle}
                                        color="warning"
                                        onChange={handleSoundSwitch}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </div>
                                <Button type="apply" />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Settings;