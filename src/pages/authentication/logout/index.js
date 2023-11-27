import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {setUserInfo} from "../../../store/reducers/app.reducer";
import {useDispatch} from "react-redux";

const Logout = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const goToHome = () => {
        navigate('/')
    }

    useEffect(() => {
        localStorage.clear()
        sessionStorage.clear()
        dispatch(setUserInfo(null))

        goToHome()
    }, [])

    return (
        <>

        </>
    )
}

export default Logout;
