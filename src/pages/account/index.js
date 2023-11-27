import React from 'react';
import AccountView from './views/AccountView';
import Layout from '../../components/layout';

const AccountController = (props) => {

    return (
        <>
        <Layout {...props}>
            <AccountView {...props}/>
        </Layout>
    </>
    )

}

export default AccountController;
