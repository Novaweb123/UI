import React from "react"
import { Link, useLocation } from "react-router-dom";
import './breadcrumbs.scss'
import Text from '../text';

const Breadcrumbs = props => {
    const { pathname } = useLocation();
    return (
        <>
            <div className="breadcrumb-wrapper">
                {props.pageTitle && <Text type="H1" text={props.pageTitle} />}
                <div className="breadcrumb-main">
                    <div className="breadcrumb-row">
                        <Link to="/dashboard">
                            Main Page
                        </Link>
                    </div>
                    {props.breadcrumbList.map(function(d, idx){
                        return (
                            <div key={idx} className="breadcrumb-row">
                                <span className="breadcrumb-arrow-icon">
                                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <Link 
                                    to={d.link}
                                    className={pathname === d.link ? "active" : ""}
                                >
                                    {d.text}
                                </Link>
                            </div>
                        )
                    })}                    
                </div>
            </div>
        </>
    )
}
export default Breadcrumbs

