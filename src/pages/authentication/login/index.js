import React, {useEffect} from "react";
import LandingLayout from "../../../components/landingLayout";
import LoginView from "./views/LoginView";
import './login.scss'

const Login = props => {

    useEffect(()=>{
        localStorage.removeItem('token')
    },[])

    return (
        <>
            <LandingLayout {...props}>
                <LoginView {...props} />
            </LandingLayout>
        </>
    )
}

export default Login;
