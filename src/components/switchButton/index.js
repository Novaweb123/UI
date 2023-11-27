import React, {useState} from 'react';
import './switchButton.scss';

const SwitchButton = props => {
    const [isToggled, setIsToggled] = useState(props?.status);
    const onToggle = () => {
        setIsToggled(!isToggled)
        props?.onChange()

    };
    return (
        <label className="toggle-switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className="switch"/>
        </label>
    );
};

export default SwitchButton;
