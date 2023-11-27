import React, { useEffect, useState } from 'react';
import AdminView from './views/AdminView';
import Layout from '../../../components/layout';

import useCommonHooks from '../../commons/commonHook';
import { DEFAULTFILTERS, DEFAULT_PAGE_COUNT } from '../../../constants/app.constants';
import Loader from '../../../components/loader';

const Admin = (props) => {
    
    const [thisloading,setLoading] = useState();
      
    const commonHook = useCommonHooks();
    
    useEffect(()=>{
        commonHook.setLoading(true)
        setLoading(true);
        commonHook.setkeys();
        DEFAULTFILTERS.type = 'getUsers';
        DEFAULTFILTERS.username = '';
        DEFAULTFILTERS.email  = '';
        DEFAULTFILTERS.pagesize = DEFAULT_PAGE_COUNT;
        commonHook.getListNew(DEFAULTFILTERS).then((data) => {
            console.log("data",data);
            setLoading(false);
        });
       
    },[])

  
        return (
            <>
                <Layout {...props}>
                <AdminView {...props}  {...commonHook}/>
                </Layout>
            </>
        )
    


}

export default Admin;
