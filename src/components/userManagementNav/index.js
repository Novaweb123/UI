
import React from "react";
import Nav from "../nav";
import {useSelector} from "react-redux";
import {ACCOUNT_STAFF} from "../../constants/app.constants";

const UserManagementNav = props => {
    return(
        <>
            <div className="nav-tabs">
                <Nav
                    options={[
                        {
                            text:"Freemium",
                            link: "/user-management/freemium-user",
                            hideNav: false,
                        },
                        {
                            text:"Member",
                            link: "/user-management/member",
                            hideNav: false,
                        },
                        {
                            text:"Guru",
                            link: "/user-management/guru",
                            hideNav: false,
                        },
                        {
                            text:"Admin",
                            link: "/user-management/admin",
                            hideNav: props?.userInfo?.usertypeid == ACCOUNT_STAFF,
                        },
                    ]}
                />
                <div className="morelist">{props.children}</div>
            </div>
        </>
    )
}

export default UserManagementNav;
