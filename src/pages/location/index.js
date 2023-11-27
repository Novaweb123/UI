import React, { useEffect } from 'react';

import Layout from '../../components/layout';
import Loader from '../../components/loader';
import { DEFAULTFILTERS, DEFAULT_PAGE_COUNT, PREMIUM } from '../../constants/app.constants';
import useCommonHooks from '../commons/commonHook';
import ViewLocationView from './views/viewLocationView';





const ViewLocationController = (props) => {

    
    const commonHook = useCommonHooks();

     
    useEffect(()=>{
        commonHook.setkeys();
        DEFAULTFILTERS.type = 'getLocation';
        DEFAULTFILTERS.location = '';
        DEFAULTFILTERS.address1  = '';
        DEFAULTFILTERS.address2 = '';
        DEFAULTFILTERS.state = '';
        DEFAULTFILTERS.sortkey = '';
        DEFAULTFILTERS.country = '';
        DEFAULTFILTERS.pagesize = DEFAULT_PAGE_COUNT;
        commonHook.getList(DEFAULTFILTERS)
    },[])


    if(useCommonHooks.loading) {
        return (
            <>
                <Layout {...props}>
                    <Loader/>
                </Layout>
            </>
        )
    }else{

        return (
            <>
                <Layout {...props}>
                    <ViewLocationView {...props} {...commonHook}/>
                </Layout>
            </>
        )
    }
}

export default ViewLocationController;
