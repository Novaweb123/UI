import useHttpHandler from "../../../../hooks/httphandler.hook";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {ADMIN, DEFAULT_PAGE_COUNT, FREEMIUM, GURU, PREMIUM} from "../../../../constants/app.constants";

const useUserManagementMain = () => {

    const userInfo = useSelector(state => state.app.userInfo)
    const [tableData, setTableData] = useState(null)
    const dispatch = useDispatch()
    const {post} = useHttpHandler()
    const [loading, setLoading] = useState(false)
    const location = useLocation()

    const getUserTypeId = ()=> {
        const urlPath = location.pathname
        if(urlPath === '/user-management/freemium-user') {
            return FREEMIUM
        } else if(urlPath === '/user-management/member') {
            return PREMIUM
        } else if(urlPath === '/user-management/guru') {
            return GURU
        } else if(urlPath === '/user-management/admin') {
            return ADMIN
        }
    }

    const defaultFilters = {
        sortby: 'asc',
        page: 1,
        perpage: DEFAULT_PAGE_COUNT,
        usertypeid: '',
    }

    const [filterKeys, setFilterKeys] = useState(defaultFilters)

    const searchFreemiumUser = (data) => {
        let keys = {
            username: data.username,
            signupplatformtype: data.signUpPlatformType,
            emailaddress: data.emailAddress,
            fromdate: data.fromDate,
            todate: data.toDate,
            page: 1,
        }
        setFilterKeys({...filterKeys, ...keys})
    }

    const searchPremiumUser = (data) => {
        console.log('searchPremiumUser')
        let keys = {
            username: data.username,
            memberid: data.memberID,
            accountstatus: data.accountStatus,
            fromdate: data.fromDate,
            todate: data.toDate,
            page: 1,
        }
        setFilterKeys({...filterKeys, ...keys})
    }

    const searchGuru = (data) => {
        console.log('searchGuru')
        console.log(data);
        let keys = {
            name: data.name,
            guruid: data.guruID,
            accountstatus: data.accountStatus,
            identityverified: data.identityVerified,
            statusofapproval: data.statusofApproval,
            fromdate: data.fromDate,
            todate: data.toDate,
            page: 1,
        }
        setFilterKeys({...filterKeys, ...keys})
    }

    const searchAdmin = (data) => {
        console.log('searchAdmin')
        let keys = {
            name: data.name,
            emailaddress: data.emailAddress,
            role: data.role,
            fromdate: data.fromDate,
            todate: data.toDate,
            page: 1,
        }
        setFilterKeys({...filterKeys, ...keys})
    }

    const sortBy = (sortBy, sortType) => {
        console.log('sortBy', sortBy)
        const keys = {
            sortby: sortBy,
            sortkey: sortType,
        }
        setFilterKeys({...filterKeys, ...keys})
    }

    const nextPage = (currentPage) => {
        console.log('currentPage', currentPage)
        const keys = {
            page: currentPage + 1
        }
        setFilterKeys({...filterKeys, ...keys})
    }

    const previousPage = (currentPage) => {
        console.log('currentPage', currentPage)
        const keys = {
            page: currentPage - 1
        }
        setFilterKeys({...filterKeys, ...keys})
    }

    const getUsers = (userTypeId) => {
        setLoading(true)
        let postData = filterKeys
        postData.usertypeid = userTypeId

        post('get_users', postData).then((res) => {
            setLoading(false)
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                setTableData(data)
            }
        }).catch(() => setLoading(false))
    }

    const changeUserStatus = (userId, isEnable) => {
        setLoading(true)

        post('admin_user_status_change', {userid: userId, isenable: isEnable, usertypeid: getUserTypeId()}).then((res) => {
            setLoading(false)
            const status = res.data.status
            const data = res.data.data
            if (status.result == '200') {
                getUsers(getUserTypeId())
            }
        }).catch(() => setLoading(false))
    }

    useEffect(() => {
        getUsers(getUserTypeId())
    }, [filterKeys])

    return {
        filterKeys,
        setFilterKeys,
        getUsers,
        loading,
        sortBy,
        searchFreemiumUser,
        searchPremiumUser,
        searchGuru,
        searchAdmin,
        tableData,
        nextPage,
        previousPage,
        userInfo,
        changeUserStatus
    }
}
export default useUserManagementMain;
