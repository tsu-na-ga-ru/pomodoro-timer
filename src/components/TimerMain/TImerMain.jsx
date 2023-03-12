import './TimerMain.sass';
import Controls from '../Controls/Controls.jsx'
import {useClockify} from "../../hook/useCrockify.jsx";
import { Donut, DonutValue } from 'react-donut-component'
import {useStateValue} from "../../context/stateProvideer.jsx";
import Button from "../Button/Button.jsx";
import Settings from "../Settings/Settings.jsx";
import timerMode from "../../TimerMode.js";
import TimerMode from "../../TimerMode.js";
import {useState} from "react";

const TImerMain = () => {
    const [{ timerMode, timerValue, timerLabel, initialTimeValue, sessionCount}] = useStateValue();
    const [sessionMode, setSssionMode] = useState(true);
    const clockFieldValue = useClockify();
    const ProjectName = "REACT POMODORO TIMER";



    return (
        <>
        <div className="timer">
            <h2 className="timer__maintitle">{ProjectName}</h2>
            <h3 id="timer-label" className="timer__label">{timerLabel} {(timerMode === TimerMode.SESSION) ?"   " + sessionCount: ''}</h3>
            <div className="donut__container">
                <Donut className="donut"
                    linecap="round"
                    strokeWidth={4}
                    styleTrack={{opacity:0.5, stroke: '#ffffff',}}
                    styleIndicator = {{
                        opacity:0.3,
                        stroke:'#D91129',
                }}>
                    <DonutValue showValue={false} symbol=" ">
                        {timerValue * (100 / initialTimeValue)}
                    </DonutValue>
                    <h1 id="time-left" className="timer__time">{clockFieldValue}</h1>
                </Donut>
                </div>
            <Controls />
            <Button type="setting" />
            <Settings />

        </div>
        </>
    );
}

export default TImerMain;