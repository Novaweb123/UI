import {useNavigate, useParams} from "react-router-dom";
import useHttpHandler from "../../../../hooks/httphandler.hook";
import {useEffect, useState} from "react";

const useAdmin = () => {
    const {userId} = useParams()
    const [userDetails, setUserDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const goToDetails = (data) => {
        navigate('/user-management/admin/details/'+data.userid);
    }
    const goToEditAdmin = () => {
        navigate('/user-management/admin/edit-admin/'+userId);
    }
    const goToCancel = () => {
        navigate('/user-management/admin');
    }
    const lowercaseRegex = /(?=.*[a-z])/;
    const uppercaseRegex = /(?=.*[A-Z])/;
    const numericRegex = /(?=.*[0-9])/;
    const nonalphanumeric = /(?=.*[@$!%*#?&])/;
    const numbersOnly = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const numbers = /^[0-9]*$/;

    const {post} = useHttpHandler()
    const getAdminDetails = () => {
        setLoading(true)
        post('get_member_details', {user_id:userId}).then((res) => {
            setLoading(false)
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                setUserDetails(data)
            }
        })
    }


    return {
        goToDetails,
        goToEditAdmin,
        goToCancel,
        lowercaseRegex,
        uppercaseRegex,
        numericRegex,
        nonalphanumeric,
        numbersOnly,
        userDetails,
        loading,
        getAdminDetails,
        userId,
        numbers
    }

}
export default useAdmin;


