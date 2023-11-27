import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useHttpHandler from "../../../hooks/httphandler.hook";



const useSetting = () => {

    const {post} = useHttpHandler();
    const [loading, setLoading] = useState(true)
    const [settingsData, setSettingsData] = useState(false)

    const getSettings  = async () => {

        setLoading(true)
        await post('admin_getsettings', "").then((res) => {
            setLoading(false)
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                var serviceData = {};
                serviceData.minMinutes = data[0].value;
                serviceData.minVideos = data[1].value;
                serviceData.testMail = data[2].value;
                setSettingsData(serviceData)
            }
        }).catch(() => setLoading(false))
    }


    return {
        
        getSettings,
        loading,
        settingsData
    }



}

export default useSetting;