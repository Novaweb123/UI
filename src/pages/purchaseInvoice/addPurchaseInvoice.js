import React, { useEffect, useState } from 'react';

import Layout from '../../components/layout';
import Loader from '../../components/loader';
import Loading from '../../components/svg/loading';
import { DEFAULTFILTERS, PREMIUM } from '../../constants/app.constants';
import useHttpHandler from '../../hooks/httphandler.hook';
import useCommonHooks from '../commons/commonHook';
import AddPurchaseInvoiceView from './views/addPurchaseInvoiceView';
import PurchaseInvoiceView from './views/purchaseInvoiceView';


const AddPurchaseInvoice = (props) => {

    
    const [ids, setID] = useState({})
    const [productCategoryArray, setProductCategoryArray] = useState([])
    const [itemsArray, setitemsArray] = useState([])

    const commonHook = useCommonHooks();
    const {post} = useHttpHandler()
    const [discountData,setDiscountData] = useState([]);
    useEffect(()=>{
        commonHook.setLoading(true);

        post('add', {"uri":"add","type":"AddPurchaseInvoiceHeadereEmpty"}).then((res) => {
            commonHook.getDropDowns();
            const status = res.data.status
            const data = res.data.data
            
            if (status.result == '200') {
                console.log(status,"===",status.id)
                setID({id:status.id,itemid:status.itemnumber,source:"0",destination:"0","cgst":0,"sgst":0,"igst":0,'total_amount':0,"brand":0,"brandName":"Brand"});
            }
            commonHook.getList({"type":"GetHeaderItem","bill_number":status.id})
          }).catch(() => commonHook.setLoading(false))

    },[])



    if(commonHook.loading){

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
                    <AddPurchaseInvoiceView {...props} {...commonHook} id={ids} setID={setID} discountData={discountData} setDiscountData={setDiscountData} productCategoryArray={productCategoryArray} setProductCategoryArray={setProductCategoryArray} itemsArray = {itemsArray} setitemsArray = {setitemsArray}/>
                </Layout>
            </>
    )
    }
}

export default AddPurchaseInvoice;
