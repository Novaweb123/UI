import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useHttpHandler from "../../../hooks/httphandler.hook";
import {toast} from "react-toastify";
import LandingLayout from "../../../components/landingLayout";

const ResetPassword = props => {
    const {post} = useHttpHandler()
    const navigate = useNavigate()
    let {token} = useParams();
    let verifyTokenSent = false

    const goToSetNewPassword = () => {
        navigate('/setNewPassword')
    }

    const verifyToken = () => {
        verifyTokenSent = true
        post('email_verify_token', {token}).then((res) => {
            const status = res.data.status
            if (status.result == '200') {
                sessionStorage.setItem('email', status.email)
                goToSetNewPassword()
            } else {
                toast.error(status.msg)
            }
        })
    }

    useEffect(() => {
        if(!verifyTokenSent)
        verifyToken()
    }, [])

    return (
        <>
            <LandingLayout {...props}>
            </LandingLayout>
        </>
    )
}

export default ResetPassword;
