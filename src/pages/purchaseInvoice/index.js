import React, { useEffect } from 'react';

import Layout from '../../components/layout';
import Loader from '../../components/loader';
import { DEFAULTFILTERS, DEFAULT_PAGE_COUNT, PREMIUM } from '../../constants/app.constants';
import useCommonHooks from '../commons/commonHook';
import PurchaseInvoiceView from './views/purchaseInvoiceView';




const PurchaseInvoiceController = (props) => {

    
    const commonHook = useCommonHooks();

    
    useEffect(()=>{
        commonHook.setkeys();
        DEFAULTFILTERS.type = 'getPurchaseInvoiceHeader';
        DEFAULTFILTERS.billnumber = '';
        DEFAULTFILTERS.ordernumber  = '';
        DEFAULTFILTERS.branch = '';
        DEFAULTFILTERS.location = '';
        DEFAULTFILTERS.sortkey = '';
        DEFAULTFILTERS.fromDate = '';
        DEFAULTFILTERS.toDate = '';
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
                    <PurchaseInvoiceView {...props} {...commonHook}/>
                </Layout>
            </>
        )
    }
}

export default PurchaseInvoiceController;
