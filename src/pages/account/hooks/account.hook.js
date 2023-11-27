import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAccount = () => {
    const [showExistingPassword, setShowExistingPassword] = useState(false);
    const ShowExistingPasswordClick = () => {
        setShowExistingPassword(state => !state);
    }
    const navigate = useNavigate();
    const [showNewPassword, setShowNewPassword] = useState(false);
    const ShowNewPasswordClick = () => {
        setShowNewPassword(state => !state);
    }
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const ShowConfirmNewPasswordClick = () => {
        setShowConfirmNewPassword(state => !state);
    }
    const goToHomePage = () => {
        navigate('/dashboard')
    }
    return {
        showExistingPassword,
        ShowExistingPasswordClick,
        showNewPassword,
        ShowNewPasswordClick,
        showConfirmNewPassword,
        ShowConfirmNewPasswordClick,
        goToHomePage
    }

}
export default useAccount;


