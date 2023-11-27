import { useFormik } from "formik";
import * as Yup from 'yup';
import React, { useState } from "react";
import Flex from "../flex";
import Input from "../input";
import Table from "../table";
import TH from "../table/th";
import Select  from "react-select";
import useHttpHandler from "../../hooks/httphandler.hook";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PurchaseItem = props => {

    const {post} = useHttpHandler();
    const [item,setItem] = useState(props.item);
    const [itemKey,setItemKey] = useState("");
    var productCategoryArray = [];
    const {billnumber} = useParams()
  
    
    const itemData = useSelector(state => state.app.storeItemData)
    const formik = useFormik({

        initialValues: {
            Item_name: {id:props.item.itemid , label:props.item.Item_name},
            MSKU: props.item.MSKU,
            Bill_number: props.item.Bill_number,
            Quantity:  props.item.Quantity,
            Price:  props.item.Price,
            Discount:  props.item.Discount,
            GST_terms: props.item.GST_terms,
            Amount: props.item.Amount,
            Product_Category:{value:item.product_categoryid,id:props.item.product_categoryid , label:props.item.Product_Category },
            Brand:{value:props.item.Brand, id:props.item.Brand , label:props.item.BrandName },
            Discount_per:props.item.discount_pergentage,
            Discount_Amount:props.item.Discount_amount,
            NetPrice:props.item.net_price,
            Item_Amount:props.item.Amount,
            Tax_Amount:props.item.tax_amount,
            Account_type:'',
            GST_Percentage:props.item.gst,
            Batch:props.item.Batch,
            Manuf:props.item.Manuf,
            Expiry:props.item.Expiry
        },
        validationSchema: Yup.object({
            billnumber: '',
            ordernumber: '',
            branch: '',
            location:'',
            fromDate: '',
            toDate: '',
        }),
        onSubmit: (values, actions) => {
          
        },
    });



    const quantityValuesKeyDown = (e) => {
        qualityValueChange(formik,item,e);
    }

    const netPriceValuesKeyDown = (e) => {
        netPriceValueChange(formik,item,e);
    }

    


    const discountKeyDown = (e) => {
        discountPerChange(formik,item,e);
    }

    

    const onKeyDown = (e) => {
        console.log("id",item);
        if (e.key === "Tab") {

            var cgst = 0;
            var sgst = 0;
            var igst = 0;

            if(props.id.source === props.id.destination){
                cgst = formik.values.Tax_Amount / 2;
                sgst = cgst;
            }else{
                igst = formik.values.Tax_Amount;
            }

            var updateData = {
                itemid: formik.values.Item_name.id,
                Item_name: formik.values.Item_name.label,
                brandid:formik.values.Brand.value,
                product_categoryid:formik.values.Product_Category.value,
                Bill_number: billnumber,
                Account_type:1,
                Quantity: formik.values.Quantity,
                Price:  formik.values.Price,
                discount_pergentage:formik.values.Discount_per,
                Discount_amount: formik.values.Discount_Amount,
                net_price:formik.values.NetPrice,
                item_amount:formik.values.Item_Amount,
                gst:formik.values.GST_Percentage,
                tax_amount:formik.values.Tax_Amount,
                GST_terms: 0,
                Amount: formik.values.Amount,
                CGST:cgst,
                SGST:sgst,
                IGST:igst,
                type:"AddPurchaseItem",
                id:props.item.idno,
                Manuf:formik.values.Manuf,  
                Expiry:formik.values.Expiry,
                Batch:formik.values.Batch,
            }

            console.log("updateData",updateData);
          
           // if(updateData.product_categoryid == null || updateData.product_categoryid === "" ){

               // alert("Please select Product Category");

            //}else{
            post('add', updateData).then((res) => {
                props.setisTableData(false);
              post("list", {"type":"GetHeaderItem","bill_number":billnumber}).then((res) => {
                const status = res.data.status
                const data = res.data.data
                if (status.result == '200') {
                    console.log("props",props,props.tableData,data)
                    //props.setTableData(data)
                    var cgst = 0;
                    var sgst = 0;
                    var igst = 0;
                    var total_amount = 0;
                    data?.map(function (item, index) {
                       
                       if(item.CGST != null){
                        cgst =  parseFloat(cgst) + parseFloat(item.CGST);
                        sgst =  parseFloat(sgst) + parseFloat(item.SGST);
                        igst =  parseFloat(igst) + parseFloat(item.IGST);
                        total_amount = parseFloat(total_amount) + parseFloat(item.Amount);
                       }
                    })
                    
                    


                    const gstType = data.filter((arr, index, self) => index === self.findIndex((t) => (t.gst === arr.gst )));
                      const gstOutputArr = [];
                      const tempArr = [];
                      {gstType.map(function (gstitem, index) {
                        
                          if(gstitem.gst != "" && gstitem.gst != null){
                          tempArr.push({"gstType":gstitem.gst,"Amount":0,cgst:0,sgst:0,igst:0});
                          }
                      })}
                  
                      {data?.map(function (item, index) {
                         
                          {tempArr.map(function (gitem, index) {
                          
                              if(gitem.gstType == item.gst){
                                  gitem.Amount = parseFloat(gitem.Amount) + parseFloat(item.tax_amount);
                              }
                          })}
                  
                      })}
                  
                      if(igst != 0.00){
                        {tempArr.map(function (gitem, index) {
                            gstOutputArr.push({"type":"IGST"+gitem.gstType + " [" + gitem.gstType + "%]", "amount":gitem.Amount})
                        })}
                      }else{

                        {tempArr.map(function (gitem, index) {
                            gstOutputArr.push({"type":"CGST"+ parseFloat(gitem.gstType / 2)+ " [" + parseFloat(gitem.gstType / 2) + "%]", "amount":parseFloat(gitem.Amount / 2)})
                            gstOutputArr.push({"type":"SGST"+ parseFloat(gitem.gstType / 2)+ " [" + parseFloat(gitem.gstType / 2) + "%]", "amount":parseFloat(gitem.Amount / 2)})
                        })}

                      }
                      

                    
                    props.setID({id:props.id.id,itemid:props.id.itemnumber,source:props.id.source,destination:props.id.destination,"cgst":cgst,"sgst":sgst,"igst":igst,'total_amount':total_amount,brand:item.Brand,brandName:item.Brand_Name,bottomData:gstOutputArr});
                    
                    props.setTableData(data);
                    props.setisTableData(true);
                    console.log("tabledata","")
                }
           
            }).catch(() => props.setLoading(false))
                    
            

              }).catch(() => props.setLoading(false))
        //    }

         // e.preventDefault();
          console.log("Tab");
        }
      };

      
      var item_master_arr = [];

      function setAllValues(formik,item){
      
        DiscountRelated(item);
        console.log("newitem",item);
        formik.setFieldValue('Product_Category',{"value":item.Product_Category,"label":item.Product_Category_Name})
        formik.setFieldValue('MSKU',item.Seller_SKU)
        formik.setFieldValue('Brand',{"value":item.Brand,"label":item.Brand_Name});
        formik.setFieldValue('Discount_per',item.Discount_percentage);    
        formik.setFieldValue('Price',item.MRP_INR);
        const discounted_amount = parseFloat(item.Discount_percentage * item.MRP_INR / 100).toFixed(2); 
        formik.setFieldValue('Discount_Amount',discounted_amount);
        formik.setFieldValue('NetPrice',parseFloat(item.MRP_INR - discounted_amount).toFixed(2));
        formik.setFieldValue('Item_Amount',parseFloat(formik.values.NetPrice * formik.values.Quantity).toFixed(2));
        formik.setFieldValue('GST_Percentage',parseFloat(item.GST_Percentage).toFixed(2));
        const tax_amount = parseFloat(formik.values.Item_Amount * item.GST_Percentage / 100).toFixed(2) ;
        formik.setFieldValue('Tax_Amount',tax_amount);
        formik.setFieldValue('Amount',parseFloat(parseFloat(formik.values.Item_Amount) + parseFloat(tax_amount)).toFixed(2) );
        setItem(item);
       
      }



      function qualityValueChange(formik,item,e){
          
        var tempObj = {...item}
        if(item?.Discount_percentage){
            tempObj["presentDiscount"] = item.Discount_percentage;
            tempObj["discount_pergentage"] = item.Discount_percentage;
        }else{
            tempObj["presentDiscount"] = item.discount_pergentage;
            tempObj["discount_pergentage"] = item.discount_pergentage;
        }

        if(item?.GST_Percentage){
            tempObj["gst"] = item.GST_Percentage;
            
        }else{
            tempObj["gst"] = item.gst;
        }

        if(item?.MRP_INR){
            tempObj["MRP_INR"] = item.MRP_INR;
            
        }else{
            tempObj["MRP_INR"] = item.Price;
        }
        
        console.log("item-> Quanity",tempObj,formik.values,e.target.value)
        
        setItem(item);
       // DiscountRelated(item);
        formik.setFieldValue('Discount_per',tempObj.discount_pergentage);    
        //formik.setFieldValue('Price',11 );
        const discounted_amount = parseFloat(tempObj.discount_pergentage * tempObj.MRP_INR / 100).toFixed(2); 
        console.log("quality",tempObj,discounted_amount)
        formik.setFieldValue('Discount_Amount',discounted_amount);
        formik.setFieldValue('NetPrice',parseFloat(tempObj.MRP_INR - discounted_amount).toFixed(2));
        formik.setFieldValue('Item_Amount',parseFloat(formik.values.NetPrice * parseInt(e.target.value)).toFixed(2));
        formik.setFieldValue('GST_Percentage',parseFloat(tempObj.gst).toFixed(2));
        const tax_amount = parseFloat(formik.values.Item_Amount * tempObj.gst / 100).toFixed(2) ;
        formik.setFieldValue('Tax_Amount',tax_amount);
        formik.setFieldValue('Amount',parseFloat(parseFloat(formik.values.Item_Amount) + parseFloat(tax_amount)).toFixed(2) );
        
      }

      function netPriceValueChange(formik,item,e){
          
        var tempObj = {...item}
        /*if(item?.Discount_percentage){
            tempObj["presentDiscount"] = item.Discount_percentage;
            tempObj["discount_pergentage"] = item.Discount_percentage;
        }else{
            tempObj["presentDiscount"] = item.discount_pergentage;
            tempObj["discount_pergentage"] = item.discount_pergentage;
        }*/

        if(item?.GST_Percentage){
            tempObj["gst"] = item.GST_Percentage;
            
        }else{
            tempObj["gst"] = item.gst;
        }

        if(item?.MRP_INR){
            tempObj["MRP_INR"] = item.MRP_INR;
            
        }else{
            tempObj["MRP_INR"] = item.Price;
        }
        
        console.log("item-> Quanity",tempObj,formik.values,e.target.value)
        
        setItem(item);
       // DiscountRelated(item);
      
        //formik.setFieldValue('NetPrice',parseFloat(tempObj.MRP_INR - discounted_amount).toFixed(2));
        formik.setFieldValue('Item_Amount',parseFloat(formik.values.NetPrice * parseInt(formik.values.Quantity)).toFixed(2));
        formik.setFieldValue('GST_Percentage',parseFloat(tempObj.gst).toFixed(2));

        const discount_amount =  parseFloat(((parseFloat(tempObj.MRP_INR) - parseFloat(formik.values.NetPrice))  / parseFloat(tempObj.MRP_INR)) * 100).toFixed(2);

        formik.setFieldValue('Discount_per',discount_amount);    
        //formik.setFieldValue('Price',11 );
        const discounted_amount = parseFloat(discount_amount * tempObj.MRP_INR / 100).toFixed(2); 
        console.log("quality",tempObj,discounted_amount)
        formik.setFieldValue('Discount_Amount',discounted_amount);
        const tax_amount = parseFloat(formik.values.Item_Amount * tempObj.gst / 100).toFixed(2) ;
        formik.setFieldValue('Tax_Amount',tax_amount);
        formik.setFieldValue('Amount',parseFloat(parseFloat(formik.values.Item_Amount) + parseFloat(tax_amount)).toFixed(2) );
        
      }


      function discountPerChange(formik,item,e){
          
        var tempObj = {...item}
        if(item?.Discount_percentage){
            tempObj["presentDiscount"] = formik.values.Discount_per;
            tempObj["discount_pergentage"] = formik.values.Discount_per;
        }else{
            tempObj["presentDiscount"] = formik.values.Discount_per;
            tempObj["discount_pergentage"] = formik.values.Discount_per;
        }

        if(item?.GST_Percentage){
            tempObj["gst"] = item.GST_Percentage;
            
        }else{
            tempObj["gst"] = item.gst;
        }

        if(item?.MRP_INR){
            tempObj["MRP_INR"] = item.MRP_INR;
            
        }else{
            tempObj["MRP_INR"] = item.Price;
        }
        
        console.log("item-> Quanity",tempObj,formik.values,e.target.value)
        
        setItem(item);
       // DiscountRelated(item);
        formik.setFieldValue('Discount_per',tempObj.discount_pergentage);    
        //formik.setFieldValue('Price',11 );
        const discounted_amount = parseFloat(tempObj.discount_pergentage * tempObj.MRP_INR / 100).toFixed(2); 
        //console.log("quality",tempObj,discounted_amount)
        formik.setFieldValue('Discount_Amount',discounted_amount);
        formik.setFieldValue('NetPrice',parseFloat(tempObj.MRP_INR - discounted_amount).toFixed(2));
        formik.setFieldValue('Item_Amount',parseFloat(formik.values.NetPrice * parseInt(formik.values.Quantity)).toFixed(2));
        const tax_amount = parseFloat(parseFloat(formik.values.NetPrice * parseInt(formik.values.Quantity)).toFixed(2)  / 100 * formik.values.GST_Percentage).toFixed(2) ;
        formik.setFieldValue('Tax_Amount',tax_amount);
        formik.setFieldValue('Amount',parseFloat(parseFloat(formik.values.NetPrice * parseInt(formik.values.Quantity)) + parseFloat(tax_amount)).toFixed(2));
        
      }

      function DiscountRelated(item){

        

        
          
        if(props.discountData?.length > 0){
            console.log("Discount Related",props.discountData,item)
            var validation = 0;
            props.discountData?.map(function (dItem, index) {
                
                if(dItem.Product_Category === item.Product_Category ){
                    if(dItem.Brand === item.Brand){
                        validation++;
                        item.Discount_percentage = dItem.Discount_percentage;
                    formik.setFieldValue('Discount_per',item.Discount_percentage);     
                    console.log("Discount Related",props.discountData)
                    }
                }
            })
            
            if(validation == 0){
                item.Discount_percentage = item.presentDiscount;
                    formik.setFieldValue('Discount_per',item.Discount_percentage);     
            }
            
        }



      }


    return(
        <>

<table style={{borderCollapse:'collapse'}} border="1">
  
  <tr>
                        <td colspan="9">

                            <table width="100%">
                                    <tr>
                                        <td width="10%">
                                        <Select
                                                
                                                placeholder={props.id?.brandName}
                                                className="form-select-container   "
                                                classNamePrefix="form-select-styled"
                                                name="Brand"
                                                value={formik.values.Brand}
                                                onChange={((e)=>{
                                                    console.log("---<>",e)
                                                        formik.setFieldValue('Quantity',1);
                                                        formik.setFieldValue('Brand',{ "value":e.value, "label": e.label })
                                                        formik.setFieldValue('Product_Category',{ "value":"", "label":""})
                                                        formik.setFieldValue('Item_name',{ "value":"", "label":""})
                                                        props.setitemsArray([]);

                                                })}  
                                                
                                                
                                                options={props.dropdownsData?.brands}
                                            />
                                        </td>
                                        <td width="20%">
                                
                                      

                                        <Select

className="form-select-container "
classNamePrefix="form-select-styled"
name="Item_name"
value={formik.values.Item_name}
onKeyDown={
    ((e)=>{

        if (e.key === "Tab") {
        }else{
    
        if(e.key != "Backspace" || e.key != "Meta" || e.key != "Tab"){
            console.log("e--->",formik.values.Brand)
            setItemKey(itemKey + e.key);

            formik.setFieldValue('Item_name',{ id:e.target.value, label: e.label,value:e.target.value })
         
            post("GetItemMasterDropDown", {"type":"GetItemMasterDropDown","brandid":formik.values.Brand.value,"item":e.target.value}).then((res) => {
                const status = res.data.status
                const data = res.data.data
                console.log("res---->",res)
                if (status.result == '200') {
                    props.setitemsArray(data);
               
                }
           
            }).catch(() => props.setLoading(false))
          
        }
        if(e.key == "Backspace" || e.key == "Meta" ){
            setItemKey("");
        }

        }
       // console.log("key do",itemKey)
    
    })

}

onChange={((e)=>{
    formik.setFieldValue('Item_name',{ value:e.value, label: e.label ,id:e.value})
    formik.setFieldValue('Quantity',1);
    console.log("key change");

    const object = props.itemsArray.find(obj => obj.value === e.value);
    console.log("index",object)

    setAllValues(formik,object);
   
    
})}
options={props.itemsArray}
/>


                        
                            </td>
                                        <td width="10%">
                                            <Select
                                                    placeholder="Product Category"
                                                    className="form-select-container "
                                                    classNamePrefix="form-select-styled"
                                                    name="Product_Category"
                                                    value={formik.values.Product_Category}
                                                    onChange={((e)=>{
                                                        formik.setFieldValue('Quantity',1);
                                                        formik.setFieldValue('Product_Category',{ id:e.value, label: e.label,value:e.value })
                                                        //formik.setFieldValue('Item_name',{ id:"", label:""})
                                                        item.Product_Category = e.Product_Category;
                                                        DiscountRelated(item)

                                                        /*
                                                        const tempItemArr = [];
                                                        props.itemsArray.map(function (item, index) { 
                                                            tempItemArr.push(item);
                                                        })

                                                        {tempItemArr.filter(item => item.Product_Category.includes(e.value)).map(function (item, index) { 
                                                            item.label = item.Item_name;
                                                            item.value = item.idno;
                                                            tempItemArr.push(item);
                                                            console.log(item);
                                                        })}
                                                        
                                                        console.log("tempItemArr",tempItemArr);
                                                        props.setitemsArray([]);
                                                        props.setitemsArray(tempItemArr);     
                                                        */
                                                        
                                                    
                                                    })}  
                                                    options={props.productCategoryArray}
                                            />
                                        </td>
                                        

                                        <td width="10%">
                                            <Input
                                            type="text"
                                            name="MSKU"
                                            placeholder="MSKU"
                                            disabled="true"
                                            autoFocus={true}
                                            value={formik.values.MSKU}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            errormessage={formik.touched.MSKU && formik.errors.MSKU ? (
                                                formik.errors.MSKU
                                            ) : null}
                                            className="form-control-value"
                                            style={{heigh:'5px',marginTop:'20px'}}   
                                            />
                                        </td>
                                        <td width="10%">
                                        <Select
                                            placeholder="Account Type"
                                                className="form-select-container"
                                                classNamePrefix="form-select-styled"
                                                name="Account_type"
                                                defaultValue={ {id:props.dropdownsData?.account_type[0].idno, label:"Cost Of Sale" }}
                                                onChange={((e)=>{
                                                    console.log("account_type", props.dropdownsData?.data?.account_types[e.value],e.value,props.dropdownsData?.data.account_types[0].idno)
                                                    formik.setFieldValue('Account_type', props.dropdownsData?.data?.account_types[e.value].idno )
                                                
                                                })}  
                                                options={props.dropdownsData?.account_type}
                                        />  
                                        </td> 
                                        <td width="10%">
                                        
                                        <Input
                                            type="text"
                                            name="Batch"
                                            placeholder="Batch"
                                            autoFocus={true}
                                            value={formik.values.Batch}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            errormessage={formik.touched.Batch && formik.errors.Batch ? (
                                                formik.errors.Batch
                                            ) : null}
                                            className="form-control-value"
                                            style={{heigh:'5px',marginTop:'20px'}}   
                                         /> 
                                         
                                        </td> 

                                        <td width="10%">
                                         
                                         <Input
                                            type="date"
                                            name="Manuf"
                                            placeholder="Manuf"
                                            autoFocus={true}
                                            value={formik.values.Manuf}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            errormessage={formik.touched.Manuf && formik.errors.Manuf ? (
                                                formik.errors.Manuf
                                            ) : null}
                                            className="form-control-value"
                                            style={{heigh:'5px',marginTop:'20px'}}   
                                         /> 
                                         
                                        </td> 

                                        <td width="10%">
                                                
                                        <Input
                                            type="date"
                                            name="Expiry"
                                            placeholder="Expiry"
                                            autoFocus={true}
                                            value={formik.values.Expiry}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            errormessage={formik.touched.Expiry && formik.errors.Expiry ? (
                                                formik.errors.Expiry
                                            ) : null}
                                            className="form-control-value"
                                            style={{heigh:'5px',marginTop:'20px'}}   
                                         /> 
                                         
                                        </td> 


                                    </tr>   


                            </table>   
                          
                                
                        </td>


                    </tr>
  
  
<tr>

<td className="padding-10">
Quantity
<Input
type="text"
placeholder="Quantity"
name="Quantity"
autoFocus={true}
value={formik.values.Quantity}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
onKeyDown={quantityValuesKeyDown}
onKeyUp={quantityValuesKeyDown}
errormessage={formik.touched.Quantity && formik.errors.Quantity ? (
    formik.errors.Quantity
) : null}
className="form-control-value"
/>
</td>
<td className="padding-10">
Price
<Input
type="text"
name="Price"
disabled="true"
placeholder="Price"
autoFocus={true}
value={formik.values.Price}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
errormessage={formik.touched.Price && formik.errors.Price ? (
    formik.errors.Price
) : null}
className="form-control-value"
/>
</td>
<td className="padding-10">
Dis %
<Input
type="text"
name="Discount_per"
placeholder="Dis %"
autoFocus={true}
value={formik.values.Discount_per}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
onKeyDown={discountKeyDown}
onKeyUp={discountKeyDown}
errormessage={formik.touched.Discount_per && formik.errors.Discount_per ? (
    formik.errors.Discount_per
) : null}
className="form-control-value"
/>
</td>
<td className="padding-10">
Dis Amount    
<Input
type="text"
name="Discount_Amount"
disabled="true"
placeholder="Dis Amount"
autoFocus={true}
value={formik.values.Discount_Amount}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
errormessage={formik.touched.Discount_Amount && formik.errors.Discount_Amount ? (
    formik.errors.Discount_Amount
) : null}
className="form-control-value"
/></td>

<td className="padding-10">
Net Price
<Input
type="text"

name="NetPrice"
placeholder="Net Price"
autoFocus={true}
value={formik.values.NetPrice}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
onKeyDown={netPriceValuesKeyDown}
onKeyUp={netPriceValuesKeyDown}
errormessage={formik.touched.NetPrice && formik.errors.NetPrice ? (
    formik.errors.NetPrice
) : null}
className="form-control-value"
/>
</td>

<td className="padding-10">
Item Amount
<Input
type="text"
name="Item_Amount"
disabled="true"
placeholder="Item Amount"
autoFocus={true}
value={formik.values.Item_Amount}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
errormessage={formik.touched.Item_Amount && formik.errors.Item_Amount ? (
    formik.errors.Item_Amount
) : null}
className="form-control-value"
/>
</td>
<td className="padding-10" width={"145px"}>
GST
<Input
type="text"
name="GST_Percentage"
disabled="true"
placeholder="GST"
autoFocus={true}
value={formik.values.GST_Percentage}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
errormessage={formik.touched.GST_Percentage && formik.errors.GST_Percentage ? (
    formik.errors.GST_Percentage
) : null}
className="form-control-value"
/>
</td>
<td className="padding-10">
Tax Amount
<Input
type="text"
name="Tax_Amount"
disabled="true"
placeholder="Tax Amount"
autoFocus={true}
value={formik.values.Tax_Amount}
errormessage={formik.touched.Tax_Amount && formik.errors.Tax_Amount ? (
    formik.errors.Tax_Amount
) : null}
className="form-control-value"
/></td>
<td className="padding-10">
Amount  
<Input
type="text"
placeholder="Amount"
name="Amount"
autoFocus={true}
value={formik.values.Amount}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
onKeyDown={onKeyDown}
errormessage={formik.touched.Amount && formik.errors.Amount ? (
    formik.errors.Amount
) : null}
className="form-control-value"
/></td>
</tr>
</table> 
</>
)
}
export default PurchaseItem;



         


