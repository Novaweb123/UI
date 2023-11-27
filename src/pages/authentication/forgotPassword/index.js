import React from "react";
import LandingLayout from "../../../components/landingLayout";
import ForgotPasswordView from "./views/ForgotPasswordView";
import './forgotPassword.scss'

const ForgotPassword = props => {
    
    return (
        <>
            <LandingLayout {...props}>
                <ForgotPasswordView {...props} />
            </LandingLayout>
        </>
    )
}

export default ForgotPassword;
