import React, {useEffect} from "react";
import Layout from "../../../components/layout";
import EditAdminView from "./views/EditAdminView";
import useAdmin from "./hooks/admin.hook";

const EditAdmin = props => {
    const {loading, userDetails, getAdminDetails} = useAdmin()
    useEffect(() => {
        getAdminDetails()
    }, [])
    return(
        <>
            <Layout {...props}>
                {!loading && (
                <EditAdminView {...props} userDetails={userDetails}/>
                )}
            </Layout>
        </>
    )
}

export default EditAdmin;
