import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../../components/layout';
import Loader from '../../components/loader';
import Loading from '../../components/svg/loading';
import { DEFAULTFILTERS, PREMIUM } from '../../constants/app.constants';
import useHttpHandler from '../../hooks/httphandler.hook';
import useCommonHooks from '../commons/commonHook';
import AddPurchaseInvoiceView from './views/addPurchaseInvoiceView';
import EditPurchaseInvoiceView from './views/editPurchaseInvoiceView';
import PurchaseInvoiceView from './views/purchaseInvoiceView';


const EditPurchaseInvoice = (props) => {

    
    const [ids, setID] = useState({})
    const [productCategoryArray, setProductCategoryArray] = useState([])
    const [itemsArray, setitemsArray] = useState([])
    const [purchaseHeader,setPurchaseHeader] = useState({});
    const {billnumber} = useParams()
    const commonHook = useCommonHooks();
    const {post} = useHttpHandler()
    const [discountData,setDiscountData] = useState([]);
    useEffect(()=>{
        commonHook.setLoading(true);
        commonHook.getDropDowns().then((dropdownres) => {
            
            post('add', {"uri":"get","type":"viewPurchaseDetails",billnumber:billnumber}).then((res) => {
                const status = res.data.status
                const data = res.data.data
                console.log("ddata-->",data);
                setPurchaseHeader(data.purchaseHeaderDetails[0]);
                
                if (status.result == '200') {
                    console.log(status,"===",status.id)
                    setID({id:status.id,itemid:status.itemnumber,source:"0",destination:"0","cgst":0,"sgst":0,"igst":0,'total_amount':0,"brand":0,"brandName":"Brand"});
                }
    
                commonHook.getList({"type":"GetHeaderItem","bill_number":billnumber}).then((listres) => {
                    commonHook.setLoading(false)
                }).catch(()=> commonHook.setLoading(false));
                
              }).catch(() => commonHook.setLoading(true))

        }).catch(()=> commonHook.setLoading(false));
        
        
        

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
                    <EditPurchaseInvoiceView {...props} {...commonHook} id={ids} setID={setID} discountData={discountData} setDiscountData={setDiscountData} productCategoryArray={productCategoryArray} setProductCategoryArray={setProductCategoryArray} itemsArray = {itemsArray} setitemsArray = {setitemsArray} purchaseHeader={purchaseHeader}/>
                </Layout>
            </>
    )
    }
}

export default EditPurchaseInvoice;
