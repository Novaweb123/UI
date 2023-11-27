import { useFormik } from "formik";
import * as Yup from 'yup';
import React, { useState } from "react";
import Flex from "../flex";
import Input from "../input";
import Table from "../table";
import TH from "../table/th";
import Select  from "react-select";
import useHttpHandler from "../../hooks/httphandler.hook";

const _EditPurchaseItem = props => {

    const {post} = useHttpHandler();
    const [item,setItem] = useState(props.item);
    var productCategoryArray = [];
   
  
    

    const formik = useFormik({

        initialValues: {
            Item_name: {id:props.item.itemid , label:props.item.Item_name},
            MSKU: props.item.Seller_SKU,
            Bill_number: props.item.Bill_number,
            Quantity:  props.item.Quantity,
            Price:  props.item.Price,
            Discount:  props.item.Discount_amount,
            GST_terms: props.item.GST_terms,
            Amount: props.item.Amount,
            Product_Category:{id:props.item.product_categoryid , label:props.item.Product_Category},
            Brand:{id:props.item.brandid , label:props.item.BrandName},
            Discount_per:props.item.discount_pergentage,
            Discount_Amount:props.item.Discount_amount,
            NetPrice:props.item.net_price,
            Item_Amount:props.item.item_amount,
            Tax_Amount:props.item.tax_amount,
            Account_type:props.item.Account_type,
            GST_Percentage:props.item.gst,
            Manuf:props.item.Manuf,
            Expiry:props.item.Expiry,
            Batch:props.item.Batch,

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



    const valuesKeyDown = (e) => {
        setAllValues(formik,item);
    }

    const onKeyDown = (e) => {
        console.log("id",props);
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
                itemid:item.idno,
                Item_name: item.Item_name,
                brandid:item.Brand,
                product_categoryid:item.Product_Category,
                Bill_number: props.id.id,
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
          
            post('add', updateData).then((res) => {
              post("list", {"type":"GetHeaderItem","bill_number":props.id.id}).then((res) => {
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
                    
                    props.setID({id:props.id.id,itemid:props.id.itemnumber,source:props.id.source,destination:props.id.destination,"cgst":cgst,"sgst":sgst,"igst":igst,'total_amount':total_amount,brand:item.Brand,brandName:item.Brand_Name});
                    
                    props.setTableData(data);
                    console.log("tabledata","")
                }
           
            }).catch(() => props.setLoading(false))
                    
            

              }).catch(() => props.setLoading(false))
              

         // e.preventDefault();
          console.log("Tab");
        }
      };

      
      var item_master_arr = [];

      function setAllValues(formik,item){
        const tempobj = {...item};  
        tempobj.presentDiscount = tempobj.discount_pergentage;
        tempobj.Product_Category_Name = item.Product_Category;
        tempobj.Product_Category = item.product_categoryid;
        setItem(tempobj);
        console.log("item",item);
        DiscountRelated(item);
        formik.setFieldValue('Product_Category', {id:item.Product_Category , label:item.Product_Category_Name})
        formik.setFieldValue('MSKU',item.Seller_SKU)
        const brand = { id:item.Brand , label:item.Brand_Name };
        formik.setFieldValue('Brand',brand);
        formik.setFieldValue('Discount_per',item.discount_pergentage);    
        formik.setFieldValue('Price',item.Price);
        const discounted_amount = parseFloat(item.discount_pergentage * item.Price / 100).toFixed(2); 
        formik.setFieldValue('Discount_Amount',discounted_amount);
        formik.setFieldValue('NetPrice',parseFloat(item.Price - discounted_amount).toFixed(2));
        formik.setFieldValue('Item_Amount',parseFloat(formik.values.NetPrice * formik.values.Quantity).toFixed(2));
        formik.setFieldValue('GST_Percentage',parseFloat(item.gst).toFixed(2));
        const tax_amount = parseFloat(formik.values.Item_Amount * item.gst / 100).toFixed(2) ;
        formik.setFieldValue('Tax_Amount',tax_amount);
        formik.setFieldValue('Amount',parseFloat(parseFloat(formik.values.NetPrice * formik.values.Quantity) + parseFloat(tax_amount)).toFixed(2)  );
        
      }

      function DiscountRelated(item){

        

        
          
        if(props.discountData?.length > 0){
            console.log("Discount Related",props.discountData,item)
            var validation = 0;
            props.discountData?.map(function (dItem, index) {
                
                if(dItem.product_category === item.Product_Category ){
                    if(dItem.brand === item.Brand){
                        validation++;
                        item.Discount_percentage = dItem.discount_percentage;
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
                                                    
                                                    props.setProductCategoryArray([]);
                                                    formik.setFieldValue('Quantity',"");
                                                    formik.setFieldValue('Brand',{ id:e.value, label: e.label })
                                                    formik.setFieldValue('Product_Category',{ id:"", label:""})
                                                    formik.setFieldValue('Item_name',{ id:"", label:""})
                                                    
                                                    props.promiseService({"type":"getItemDropDown","uri":"fetch","brand":e.value}).then((data) => {
                                                        const tempArr = [];
                                                        const tempItemArr = [];
                                                        console.log('data',data.data.data.items);
                                                        props.setitemsArray([]);
                                                        props.setProductCategoryArray([]);
                                                        {data.data.data.items.filter(item => item.Brand.includes(e.value)).map(function (item, index) { 
                                                            
                                                            const obj = { ...item};
                                                            obj.label = item.Product_Category_Name;
                                                            obj.value = item.Product_Category;
                                                            tempArr.push(obj);

                                                            item.label = item.Item_name;
                                                            item.value = item.idno;
                                                            tempItemArr.push(item);
                                                            
                                                        })}

                                                        props.setProductCategoryArray(tempArr.filter((arr, index, self) => index === self.findIndex((t) => (t.label === arr.label ))));
                                                        props.setitemsArray(tempItemArr);           

                                                    });
                                                        item.Brand = e.value;
                                                        DiscountRelated(item)
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
    onChange={((e)=>{
        formik.setFieldValue('Item_name',{ id:e.value, label: e.label })
        formik.setFieldValue('Quantity',"");
        setAllValues(formik,props.itemsArray[e.value]);
        console.log(e.value,props.itemsArray[e.value]);
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
                                                        formik.setFieldValue('Quantity',"");
                                                        formik.setFieldValue('Product_Category',{ id:e.value, label: e.label })
                                                        //formik.setFieldValue('Item_name',{ id:"", label:""})
                                                        item.Product_Category = e.Product_Category;
                                                        DiscountRelated(item)
                                                        
                                                      /*  const tempItemArr = [];
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
onKeyDown={valuesKeyDown}
onKeyUp={valuesKeyDown}
errormessage={formik.touched.Quantity && formik.errors.Quantity ? (
    formik.errors.Quantity
) : null}
className="form-control-value"

/></td>

<td className="padding-10">
    Price
    <Input
type="text"
name="Price"
placeholder="Price"
autoFocus={true}
value={formik.values.Price}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
errormessage={formik.touched.Price && formik.errors.Price ? (
    formik.errors.Price
) : null}
className="form-control-value"

/></td>
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
errormessage={formik.touched.Discount_per && formik.errors.Discount_per ? (
    formik.errors.Discount_per
) : null}
className="form-control-value"

/></td>

<td className="padding-10">
Dis Amount    
<Input
type="text"
name="Discount_Amount"
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
errormessage={formik.touched.NetPrice && formik.errors.NetPrice ? (
    formik.errors.NetPrice
) : null}
className="form-control-value"

/></td>

<td className="padding-10">
Item Amount
    <Input
type="text"
name="Item_Amount"
placeholder="Item Amount"
autoFocus={true}
value={formik.values.Item_Amount}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
errormessage={formik.touched.Item_Amount && formik.errors.Item_Amount ? (
    formik.errors.Item_Amount
) : null}
className="form-control-value"

/></td>

<td className="padding-10" width={"145px"}>

GST
    <Input
type="text"
name="GST_Percentage"
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
export default _EditPurchaseItem;



         


