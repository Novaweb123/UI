import {useNavigate} from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate()
    const goToForgotPasswordSendEmail = (email) => {
        navigate('/forgotPasswordSendEmail?email='+email)
    }
    return {
        goToForgotPasswordSendEmail,
    }

}
export default useLogin


