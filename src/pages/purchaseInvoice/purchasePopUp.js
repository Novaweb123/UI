import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout';
import Loader from '../../components/loader';
import PurchaseOrderItemList from '../../components/tableList/OrdersList/PurchaseOrderItemList';
import PurchaseOrderList from '../../components/tableList/OrdersList/PurchaseOrderList';
import { DEFAULTFILTERS, PREMIUM } from '../../constants/app.constants';
import useHttpHandler from '../../hooks/httphandler.hook';
import useCommonHooks from '../commons/commonHook';
import AddInvoiceItemView from './views/addInvoiceItemView';



const PurchasePopUp = (props) => {

    const {post} = useHttpHandler();
    const commonHook = useCommonHooks();
    const [tableData, setTableData] = useState([]);
    
    useEffect(()=>{
        console.log("props.setModalData.id",props.modalData);
        commonHook.setLoading(true)
        post("list", {"type":"GetHeaderItem","bill_number":props.modalData.id}).then((res) => {
            
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                setTableData(data);
            }
            commonHook.setLoading(false)
        }).catch(() => commonHook.setLoading(false))
        
    },[])

   

    if(props.modalData.type == "addInvoiceItem"){
    return (
        <>
            <AddInvoiceItemView {...props} {...commonHook}/>
        </>
    )
    }else{
        if(commonHook.loading) {
            return (
                <>
                    
                        <Loader/>
                    
                </>
            )
        }else{
                return (
                    <>
                    <PurchaseOrderItemList {...props} setIsModal={props?.setIsModal} setModalData={props?.setModalData} tableData={tableData} />
                    </>
                )
        }

    }
}

export default PurchasePopUp;
