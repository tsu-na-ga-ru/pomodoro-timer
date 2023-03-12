import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faXmark} from "@fortawesome/free-solid-svg-icons";
import {actionTypes} from "../../reducer.js";
import {useStateValue} from "../../context/stateProvideer.jsx";
import './Button.sass';

const Button = ({type}) => {
    const [{settingVisible}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const toggleShowSetting = () => {
        dispatch({
            ...state,
            type: actionTypes.TOGGLE_SHOW_SETTING,
            settingVisible: !settingVisible
        })
    };


    if (type === 'setting') {
        return (
            <button className="pomodoro-app__preferences" name="setting" title="show preferences pane" onClick={toggleShowSetting}>
                <FontAwesomeIcon icon={faGear}/>
            </button>
        );
    }
    if (type === "close") {
        return (
            <button className="pane__close-preferences" onClick={toggleShowSetting}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>
        );
    }

    if (type === 'apply') {
        return (
            <div className="pane__apply-row" onClick={toggleShowSetting}>
                <input type="submit" value="Apply" className="pane__apply_preferences"/>
            </div>
        )
    }
}
export default Button;