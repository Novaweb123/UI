import React, {useEffect} from "react";
import Layout from "../../../components/layout";
import AdminDetailsView from "./views/AdminDetailsView";
import useAdmin from "./hooks/admin.hook";

const AdminDetails = props => {
    const {loading, userDetails, getAdminDetails} = useAdmin()
    useEffect(() => {
        getAdminDetails()
    }, [])
    return (
        <>
            <Layout {...props}>
                {!loading && (
                    <AdminDetailsView {...props} userDetails={userDetails}/>
                )}
            </Layout>
        </>
    )
}

export default AdminDetails;
