import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserInfo,setItemData} from "../../../../store/reducers/app.reducer";

const useLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goToDashboard = () => {
        navigate('/dashboard')
    }
    const openForgotPassword = () => {
        navigate('/forgotPassword')
    }
    const [showPassword, setShowPassword] = useState(false);
    const ShowPasswordClick = () => {
        setShowPassword(state => !state);
    }


    const storeUserInfo = (data) => {
        dispatch(setUserInfo(data))
    }


    const storeItemData = (data) => {
        dispatch(setItemData(data))
    }

    const redirectTo = (redirectCode, userTypeId) => {
        let redirectUrl = ''
        redirectUrl = '/dashboard'
        navigate(redirectUrl)
    }

    return {
        goToDashboard,
        openForgotPassword,
        showPassword,
        ShowPasswordClick,
        storeUserInfo,
        redirectTo,
        storeItemData
    }

}
export default useLogin


