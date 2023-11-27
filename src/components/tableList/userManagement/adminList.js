import Table from "../../table";
import TH from "../../table/th";
import Pagination from "../../pagination";
import ActionMore from "../../actionsMore";
import {
    ACCOUNT_STAFF,
    ACCOUNT_STAFF_LABEL, ADMIN,
    ADMIN_LABEL, FREEMIUM,
    FREEMIUM_LABEL, GURU,
    GURU_LABEL, PREMIUM,
    PREMIUM_LABEL,
    SUPER_ADMIN,
    SUPER_ADMIN_LABEL
} from "../../../constants/app.constants";
import Button from '../../button';
import { useNavigate } from 'react-router-dom';
import useHelper from "../../../hooks/helpers.hook";

const AdminList = props => {
    const {getRoleLabel} = useHelper()
    const navigate = useNavigate()
    

    const optionsAction = (userId) => {
        return [
            {
                text: 'View Details',
                link: '/user-management/admin/details/'+userId
            },
            {
                text: 'Edit & Update',
                link: '/user-management/admin/edit-admin/'+userId
            },
        ]
    }

    const tableData = props?.tableData
console.log("props",props?.tableData);


    return (
        <>
            <Table
                thead={
                    <tr>
                        <TH sortBy={props.sortBy} sortKey="uname">Username</TH>
                        <TH sortBy={props.sortBy} sortKey="email">Email Address</TH>
                        <TH sortBy={props.sortBy} sortKey="fullname">Name</TH>
                        <TH sortBy={props.sortBy} sortKey="usertypeid">Role</TH>
                        <TH nosort>Action</TH>
                    </tr>
                }
                tbody={tableData?.map(function (item, index) {
                    return (
                        <tr>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{getRoleLabel(item.utypeid)}</td>
                            <td>
                            
                             
                            </td>
                        </tr>
                    )
                })}
            />
            <Pagination
                totalPages={props?.tableData?.totalPages}
                currentPage={props?.tableData?.currentPage}
                totalRecords={props?.tableData?.totalRecords}
                nextPage={props.nextPage}
                previousPage={props.previousPage}
                perPage={props.filterKeys.perpage}
            />
        </>
    )
}

export default AdminList;
