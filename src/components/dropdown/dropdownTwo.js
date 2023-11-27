import React, { useState } from "react";
import './dropdownTwo.scss';
import Button from "../button";
import ChevronDownIcon from "../svg/chevronDownIcon";

const DropdownNew = props => {
    const [ isActive, setIsActive] = useState(false);
    return(
    <>
        <div className={`dropdown-box ${props.right ? 'dropdown-right' : ''} ${props.secondaryDropdown ? 'dropdown-secondary' : ''}`}>
            <Button
                className="dropdown-toggle"
                onClick={(e) => setIsActive(!isActive)}
                text={props.selected.value ? props.selected.value : props?.placeholder}
                icon={<ChevronDownIcon up={isActive}/>}
                dark
                outline
            />
            {isActive &&
                <>
                    <ul className={`dropdown-menu ${props.className ? props.className : ''}`}>
                        {props.options.map((option) =>(
                            <li className="dropdown-item">
                                <div
                                    className={`dropdown-link ${props.selected?.value == option.value ? 'active' : '' }`}
                                    onClick={(e) => {
                                        props.setSelected(option);
                                        setIsActive(false);
                                    }}
                                >
                                    {option.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="dropdown-backdrop" onClick={()=>setIsActive(false)}></div>
                </>
            }
        </div>

    </>
    )
}

export default DropdownNew;

DropdownNew.defaultProps = {
    options:['Something 1', 'Something 2']
}
