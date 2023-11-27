import React, { useEffect } from 'react';

import Layout from '../../components/layout';
import { DEFAULTFILTERS, PREMIUM } from '../../constants/app.constants';
import useCommonHooks from '../commons/commonHook';
import AddLocationView from './views/addLocationView';




const AddLocationController = (props) => {

    
    const commonHook = useCommonHooks();

    
    useEffect(()=>{
        commonHook.setkeys();
        DEFAULTFILTERS.uri = 'getPurchaseInvoiceHeader';
        commonHook.getList(DEFAULTFILTERS)
    },[])




    return (
    <>
        <Layout {...props}>
            <AddLocationView {...props} {...commonHook}/>
        </Layout>
    </>
    )
}

export default AddLocationController;
