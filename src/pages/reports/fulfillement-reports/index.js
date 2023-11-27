import React, { useEffect } from 'react';


import Loader from '../../../components/loader';
import { DEFAULTFILTERS, DEFAULT_PAGE_COUNT} from '../../../constants/app.constants';
import useCommonHooks from '../../commons/commonHook';
import FulfillementView from './views/fullfimentView';
import Layout from '../../../components/layout';




const FulfillementController = (props) => {

    
    const commonHook = useCommonHooks();

    
    useEffect(()=>{
        commonHook.getDropDowns();
        commonHook.setkeys();


        DEFAULTFILTERS.type = 'getFulfillmentReports';
        DEFAULTFILTERS.branch ='';
        DEFAULTFILTERS.location ='';
        DEFAULTFILTERS.delivery_state ='';
        DEFAULTFILTERS.sales_channel='';
        DEFAULTFILTERS.billnumber = '';
        DEFAULTFILTERS.ordernumber  = '';
        DEFAULTFILTERS.branch = '';
        DEFAULTFILTERS.location = '';
        DEFAULTFILTERS.sortkey = '';
        DEFAULTFILTERS.fromDate = '';
        DEFAULTFILTERS.toDate = '';
        DEFAULTFILTERS.pagesize = 1000000;
        DEFAULTFILTERS.perpage = 1000000;
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
                    <FulfillementView {...props} {...commonHook}/>
                </Layout>
            </>
        )
    }
}

export default FulfillementController;
