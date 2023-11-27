import React,{ useEffect }  from 'react';
import DashboardView from './views/DashboardView';
import Layout from '../../components/layout';
import './dashboard.scss';
import useDashboard from './hooks/dashboard.hook';
import Loader from '../../components/loader';

const DashboardController = (props) => {

    const dashboardMainHook = useDashboard();

    
    useEffect(()=>{
        dashboardMainHook.getDashboardData();
    },[])

    if (dashboardMainHook.loading) {
        return <Loader/>
    } else {
    return (
        <>
        <Layout {...props}>
            <DashboardView {...props} {...dashboardMainHook}/>
        </Layout>
    </>
    )
    }

}

export default DashboardController;
