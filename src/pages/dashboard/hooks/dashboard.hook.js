import { useState } from "react";
import useHttpHandler from "../../../hooks/httphandler.hook";

const useDashboard = () => {

    const {post} = useHttpHandler();
    const [loading, setLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(false)
    const getDashboardData = async () => {
        
        await post('admin_dashboard', {}).then((res) => {
            setLoading(false)
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                setDashboardData(data)
            }
        }).catch(() => setLoading(false))
    }

    return {
        getDashboardData,
        dashboardData,
        loading
    }

}
export default useDashboard;


