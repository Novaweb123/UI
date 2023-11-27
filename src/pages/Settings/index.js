import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Loader from '../../components/loader';
import useHttpHandler from '../../hooks/httphandler.hook';
import useSetting from './hooks/settingsHook';
import SettingView from './views/settingView';

const Settings = (props) => {
    
    const userSettingHook = useSetting();
    
    useEffect(()=>{
        
        userSettingHook.getSettings();

    },[])

    
 

    if (userSettingHook.loading) {
        return <Loader/>
    } else {
    return (
        <>
        <Layout {...props}>
            <SettingView {...props} {...userSettingHook}/>
        </Layout>
    </>
    )
    }



}

export default Settings;