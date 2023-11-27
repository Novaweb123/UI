import { useFormik } from "formik";
import * as Yup from 'yup';
import React, { useState } from "react";
import Flex from "../flex";
import Input from "../input";
import Table from "../table";
import TH from "../table/th";
import Select  from "react-select";
import useHttpHandler from "../../hooks/httphandler.hook";
import OtpInput from "react-otp-input";

const PurchaseItemBottom = props => {

    
 

console.log("table",props?.id?.bottomData);


  
  return(
  
  <>


      
   
  <table style={{borderCollapse:'collapse'}} border="1">
  
  <tr>
                        <td colspan="9">

                            <table width="100%">
                                   
                            </table>   
                          
                                
                        </td>


                    </tr>
  
  
<tr>

<td colspan="9">


Total Amount


</td>



<td className="padding-10">

<>


<tr>
                                        <td width="20%">
                                            CGST
                                        </td>

                                        <td width="20%">
                                        { parseFloat(props?.id?.cgst).toFixed(2)}
                                        </td>
                                        </tr>
<tr>
                                        <td width="20%">
                                            SGST
                                        </td>

                                        <td width="20%">
                                        { parseFloat(props?.id?.sgst).toFixed(2)}
                                            
                                        </td>
</tr>
<tr>
                                        <td width="20%">
                                        IGST
                                        </td> 
                                        <td width="20%">
                                        
                                        { parseFloat(props?.id?.igst).toFixed(2)}
                                        </td> 

                                        

                                    </tr> 

                                    <tr>
                                        <td width="20%">
                                        Total Amount
                                        </td> 
                                        <td width="20%">
                                        { parseFloat(props?.id?.total_amount).toFixed(2)}
                                        
                                        
                                        

                                 

                                        </td> 

                                        

                                    </tr>   
                                    <tr>
                                        <td>Tax Break UP</td>
                                    </tr>

                                    {props?.id?.bottomData?.map(function (item, index) {
    console.log("item-->",item)
    
     return(
         <>
              
                                   
                                                               
    <tr>
                                            <td width="20%">
                                            {item.type}
                                            </td> 
                                            <td width="20%">
                                           {parseFloat(item.amount).toFixed(2)}
                                            
                                            </td> 
    
                                            
    
                                        </tr>  

                                           
                                        </>
     )
    })}


                                                                            



</>






 

</td>
</tr>

 
</table> 


        </>
    )
}
export default PurchaseItemBottom;



         


