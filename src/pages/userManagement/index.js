import React from 'react';
import UserManagementView from './views/UserManagementView';
import Layout from '../../components/layout';

const UserManagementController = (props) => {

    return (
        <>
        <Layout {...props}>
            <UserManagementView {...props}/>
        </Layout>
    </>
    )
}

export default UserManagementController;
