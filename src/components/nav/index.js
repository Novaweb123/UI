import React from 'react';
import {NavLink} from "react-router-dom";
import '../nav/nav.scss'
import DashboardIcon from '../svg/dashboardIcon';

const Nav = props => {
    return (
        <>
            <div className="nav-wrp">
                <ul className={`nav ${props.className ? props.className : ''}`}>
                    {props.options.map(function (d, idx) {
                        if (!d.hideNav) {
                            return (
                                <li className="nav-item">
                                    <NavLink key={idx} to={d.link} activeClassName="active" className="nav-link">
                                        {d.icon && <span className="nav-link-icon">{d.icon}</span>}
                                        <span className="nav-link-title">{d.text}</span>
                                    </NavLink>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </>
    );
};

export default Nav;

Nav.defaultProps = {
    options: [
        {
            text: "Something 1",
            link: "/",
            icon: <DashboardIcon/>,
        },
        {
            text: "Something 2",
            link: "/",
            icon: <DashboardIcon/>,
        },
        {
            text: "Something 3",
            link: "/",
            icon: <DashboardIcon/>,
        },
    ]
};
