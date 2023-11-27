import React from "react";
import LandingLayout from "../../../components/landingLayout";
import SetNewPasswordView from "./views/SetNewPasswordView";
import './setNewPassword.scss'

const SetNewPassword = props => {
    
    return (
        <>
            <LandingLayout {...props}>
                <SetNewPasswordView {...props} />
            </LandingLayout>
        </>
    )
}

export default SetNewPassword;
