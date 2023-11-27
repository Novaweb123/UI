import React, { useEffect } from 'react';

import Layout from '../../components/layout';
import Loader from '../../components/loader';
import { DEFAULTFILTERS, DEFAULT_PAGE_COUNT, PREMIUM } from '../../constants/app.constants';
import useCommonHooks from '../commons/commonHook';
import ViewCurrencyView from './views/viewCurrencyView';





const ViewCurrencyController = (props) => {

    
    const commonHook = useCommonHooks();

    
    useEffect(()=>{
        commonHook.setkeys();
        DEFAULTFILTERS.type = 'getCurrency';
        DEFAULTFILTERS.sortkey = '';
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
                    <ViewCurrencyView {...props} {...commonHook}/>
                </Layout>
            </>
        )
    }
}

export default ViewCurrencyController;
