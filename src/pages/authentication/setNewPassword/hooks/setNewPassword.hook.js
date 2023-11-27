import { useState } from "react";
import {useNavigate} from "react-router-dom";

const useSetNewPassword = () => {
    const navigate = useNavigate()
    const goToPasswordResetSuccessful = () => {
        navigate('/passwordResetSuccessful')
    }
    const [showPassword, setShowPassword] = useState(false);
    const ShowPasswordClick = () => {
        setShowPassword(state => !state);
    }
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const ShowConfirmNewPasswordClick = () => {
        setShowConfirmNewPassword(state => !state);
    }
    return {
        goToPasswordResetSuccessful,
        showPassword,
        ShowPasswordClick,
        showConfirmNewPassword,
        ShowConfirmNewPasswordClick,
    }

}
export default useSetNewPassword


