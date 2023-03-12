import TimerMode from "./TimerMode.js";
export const initialState = {
    busyIndicator: false,
    sessionValue: 25,
    shortBreakValue: 5,
    longBreakValue: 15,
    timerValue: 1500,
    settingVisible: false,
    timerMode: TimerMode.SESSION,
    sessionCount: 0,
    sessionCountValue: 4,
    timerLabel: 'SESSION',
    initialTimeValue: 1500,
    soundToggle: true
}

export const actionTypes = {
    TOGGLE_IS_BUSY_INDICATOR: 'TOGGLE_IS_BUSY_INDICATOR',
    START_TIMER: 'START_TIMER',
    RESET_TIMERS: 'RESET_TIMERS',
    TOGGLE_SHOW_SETTING: 'TOGGLE_SHOW_SETTING',
    CHANGE_SESSION_TIME: 'CHANGE_SESSION_TIME',
    CHANGE_SHORT_BREAK_TIME: 'CHANGE_SHORT_BREAK_TIME',
    CHANGE_LONG_BREAK_TIME: 'CHANGE_LONG_BREAK_TIME',
    CHANGE_TIMER_MODE: 'CHANGE_TIMER_MODE',
    INCREMENT_SESSION_COUNT: 'INCREMENT_SESSION_COUNT',
    RESET_SESSION_COUNT: 'RESET_SESSION_COUNT',
    CHANGE_SESSION_COUNT: 'CHANGE_SESSION_COUNT',
    TOGGLE_SOUND_SETTING: 'TOGGLE_SOUND_SETTING',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_IS_BUSY_INDICATOR:
            return {
                ...state,
                busyIndicator: action.busyIndicator
            };
        case actionTypes.START_TIMER:
            return {
                ...state,
                timerValue: action.timerValue,
            };
        case actionTypes.TOGGLE_SOUND_SETTING:
            return {
                ...state,
                soundToggle: action.soundToggle
            }
        case actionTypes.TOGGLE_SHOW_SETTING:
            return {
                ...state,
                settingVisible: action.settingVisible
            }
        case actionTypes.CHANGE_SESSION_TIME:
            return {
                ...state,
                sessionValue: action.sessionValue,
                timerValue: action.timerValue,
                initialTimeValue: action.initialTimeValue

            }
        case actionTypes.CHANGE_SHORT_BREAK_TIME:
            return {
                ...state,
                shortBreakValue: action.shortBreakValue,
                timerValue: action.timerValue,
                initialTimeValue: action.initialTimeValue

            }
        case actionTypes.CHANGE_LONG_BREAK_TIME:
            return {
                ...state,
                longBreakValue: action.longBreakValue,
                timerValue: action.timerValue,
                initialTimeValue: action.initialTimeValue

            }
        case actionTypes.RESET_SESSION_COUNT:
            return {
                ...state,
                sessionCount: action.sessionCount
            }
        case actionTypes.CHANGE_TIMER_MODE:
            return {
                ...state,
                timerMode: action.timerMode,
                initialTimeValue: action.initialTimeValue,
                timerLabel: action.timerLabel
            }
        case actionTypes.INCREMENT_SESSION_COUNT:
            return {
                ...state,
                sessionCount: action.sessionCount
            }
        case actionTypes.CHANGE_SESSION_COUNT:
            return {
                ...state,
                sessionCount: action.sessionCount,
                sessionCountValue: action.sessionCountValue,
            }
        case actionTypes.RESET_TIMERS:
            return {
                ...state,
                busyIndicator: action.busyIndicator,
                sessionValue: action.sessionValue,
                shortBreakValue: action.shortBreakValue,
                longBreakValue: action.longBreakValue,
                timerValue: action.timerValue,
                settingVisible: action.settingVisible,
                timerMode: TimerMode.SESSION,
                sessionCount: action.sessionCount,
                sessionCountValue: action.sessionCountValue,
                timerLabel: action.timerLabel,
                initialTimeValue: action.initialTimeValue,
                soundToggle: action.soundToggle
            };
        default:
            return state;
    }
}

export default reducer;