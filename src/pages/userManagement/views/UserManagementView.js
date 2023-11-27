import React, {useEffect} from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
import useUserManagement from '../hooks/userManagement.hook';
import {useNavigate} from "react-router-dom";

const UserManagementView = (props) => {
    const navigate = useNavigate()

    const BreadcrumbList = [
        {
            text: "User Management",
            link: "/user-management"
        }
    ]

    useEffect(()=>{
        navigate('/user-management/pending-user')
    },[])

    return (
        <>
            <Breadcrumbs
                pageTitle="User Management"
                breadcrumbList={BreadcrumbList}
            />
        </>
    );
};

export default UserManagementView;
