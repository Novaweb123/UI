import moment from "moment";
import {
    ACCOUNT_STAFF, ACCOUNT_STAFF_LABEL,
    ADMIN,
    ADMIN_LABEL,     
    PREMIUM,
    SUPER_ADMIN,
    SUPER_ADMIN_LABEL
} from "../constants/app.constants";

const useHelper = () => {

    const formatDateDDMMYYHms = (date) => {
        return date ? moment(date).format('DD-MM-YYYY, H:mm:ss') : '-'
    }

    const formatDateDateAndTime = (date) => {
        return moment(date).format('DD MMM YYYY | HH:MM:A');
    }

    const formatDateMMDDYYHms = (date) => {
        return moment(date).format('MMM DD, YYYY | h:mm A')
    }

    const getMonthYear = (date) => {
        return moment(date).format('MMMM YYYY')
    }

    const formatDateDDMMYY = (date) => {
        return date ? moment(date).format('DD-MM-YYYY') : '-'
    }

    const formatDateMMMDYYYY = (date) => {
        return date ? moment(date).format('MMM D,YYYY') : '-'
    }

    const formatDateYYYYMMDD = (date) => {
        return date ? moment(date).format('YYYY-MM-DD') : '-'
    }

    const getRoleLabel = (roleId) => {
        let typeId = roleId?.toString()
        if (typeId === SUPER_ADMIN) {
            return SUPER_ADMIN_LABEL
        } else if (typeId === ADMIN) {
            return ADMIN_LABEL
        } else if (typeId === ACCOUNT_STAFF) {
            return ACCOUNT_STAFF_LABEL
        }
    }

    const getUserTypeId = () => {
        return localStorage.getItem('currentUserTypeId')
    }

    const getToken = () => {
        return localStorage.getItem('token')
    }

    const hasToken = () => {
        const token = getToken()
        return token ? true : false
    }

    const isSuperAdmin = (userInfo) => {
        if (hasToken()) {
            return getUserTypeId() == SUPER_ADMIN
        } else {
            return false
        }
    }

    const isAdmin = (userInfo) => {
        if (hasToken()) {
            return getUserTypeId() == ADMIN
        } else {
            return false
        }
    }

    const isAccountStaff = (userInfo) => {
        if (hasToken()) {
            return getUserTypeId() == ACCOUNT_STAFF
        } else {
            return false
        }
    }

    const getFileExtension = (filename) => {
        return filename.split('.').pop();
    }

    const getFileSize = (filesize) => {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let l = 0, n = parseInt(filesize, 10) || 0;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }

    const getCurrentMonthRangeByMonth = (month) => {
        const startOfMonth = moment().month(month).startOf('month').format('DD/MM');
        const endOfMonth = moment().month(month).endOf('month').format('DD/MM');
        return {
            month: month, range: startOfMonth + ' - ' + endOfMonth
        }
    }

    const getMonthOptions = (year) => {
        let currentYear = new Date().getFullYear()
        let monthOptions = []
        const loopTime = year == currentYear ? moment().month() + 1 : 12
        for (let i = 0; i < loopTime; i++) {
            const monthRange = getCurrentMonthRangeByMonth(i)
            monthOptions.push({value: monthRange.month + 1, label: monthRange.range})
        }
        return monthOptions
    }

    const getYearOptions = () => {
        let currentYear = new Date().getFullYear(), years = [];
        let startYear = currentYear - 5;
        while (startYear <= currentYear) {
            const val = startYear++
            years.push({label: val, value: val})
        }
        return years;
    }




    return {
        formatDateDDMMYYHms,
        formatDateDDMMYY,
        getRoleLabel,
        getUserTypeId,
        isSuperAdmin,
        isAdmin,
        isAccountStaff,
        getFileExtension,
        getFileSize,
        formatDateMMMDYYYY,
        formatDateDateAndTime,
        formatDateMMDDYYHms,
        getMonthYear,
        getYearOptions,
        getMonthOptions,
        formatDateYYYYMMDD
    }

}
export default useHelper


