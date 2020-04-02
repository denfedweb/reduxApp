import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hideAlert} from "../redux/actions";

const Alert = () => {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);
    const {alertType, showed, text} = alert;
    if(showed){
        return (<div className={`alert alert-${alertType}`} role="alert">
            {text}
            <button type="button" className="close" onClick={()=>dispatch(hideAlert())}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>)
    } else {
        return false
    }
};

export default Alert;
