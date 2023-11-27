import React from "react";
import Avatar from "../avatar";
import DP from '../../assets/images/dp.png';
import Text from "../text";
import { useState } from "react";
import './displayProfile.scss';
import Nav from "../nav";
import { useMediaQuery } from "react-responsive";

const DisplayProfile = props => {    
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    const {userInfo} = props
    const [ dropdownDP, setDropdownDP] = useState(false);
    const ToggleDP = () => {
        setDropdownDP( state => !state);
    }
    return(
        <>
            <div className="dp-wrapper">
                <div className="dp-heading" onClick={ToggleDP}>
                    <Avatar
                        large={isMobile ? false : true}
                        src={DP}
                        alt={userInfo?.fullname}
                    />
                    {!isMobile && (
                        <div className="dp-details">
                            <Text type="H4" className="text-capitalize" text={userInfo?.fullname} />
                            <Text type="PARAGRAPH" text={userInfo?.email} />
                        </div>
                    )}
                </div>
                {dropdownDP &&
                    <div className="dp-dropdown">
                        {isMobile && (
                            <div className="dp-details">
                                <Text type="H4" className="text-capitalize" text={userInfo?.fullname} />
                                <Text type="PARAGRAPH" text={userInfo?.email} />
                            </div>
                        )}
                        <Nav
                            options={[
                                {
                                    text:"My Profile",
                                    link: "/account",
                                },
                                {
                                    text:"Logout",
                                    link: "/logout",
                                },
                            ]}
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default DisplayProfile;
