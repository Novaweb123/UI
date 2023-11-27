import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../../components/layout';
import Loader from '../../components/loader';
import { DEFAULTFILTERS, PREMIUM } from '../../constants/app.constants';
import useCommonHooks from '../commons/commonHook';
import AddPurchaseInvoiceView from './views/addPurchaseInvoiceView';
import PurchaseInvoiceView from './views/purchaseInvoiceView';
import ViewPurchaseInvoiceView from './views/viewPurchaseInvoiceView';


const ViewPurchaseInvoice = (props) => {


    
    const commonHook = useCommonHooks();

    const {billnumber} = useParams()
    useEffect(()=>{
        
        const params = {uri:"get",type:"viewPurchaseDetails",billnumber:billnumber};
        commonHook.getCustomData(params);
        
    },[])
    if (commonHook.loading) {
        return <Loader/>
    } else{

        return (
            <>
            
            <Layout {...props}>
                <ViewPurchaseInvoiceView {...props} {...commonHook}/>
            </Layout>
        </>
        )
   
    }



  
}

export default ViewPurchaseInvoice;
