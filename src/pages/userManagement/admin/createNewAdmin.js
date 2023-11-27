import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/layout";
import Loader from "../../../components/loader";
import useCommonHooks from "../../commons/commonHook";
import CreateNewAdminView from "./views/CreateNewAdminView";

const CreateNewAdmin = props => {

    const {id} = useParams();
    const commonHook = useCommonHooks();
    const [data,setData] = useState({});
    
    useEffect(()=>{
        commonHook.setLoading(true);
        if(id != 0){
            
            var values = {"uri":"getDetails","type":"Userdetails","id":id}
            commonHook.promiseService(values).then((data) => {
                commonHook.setLoading(false);
                if(data.data.status.result === 200){
                    //console.log("data----->",data.data.data[0])
                    setData(data.data.data[0]);
                }else{
                
                }
            });

        }else{
            commonHook.setLoading(false);
        }
    },[])

    if (commonHook.loading) {
      
        return <Loader/>
    
    } else {
    
            return (
            <>
                <Layout {...props}>
                    
                    <CreateNewAdminView {...props} {...commonHook} data={data} setData={setData}/>
                </Layout>
            </>
            )
    }


  
}

export default CreateNewAdmin;