import Table from '../../table';
import TH from "../../table/th";
import Pagination from '../../pagination';
import useHelper from "../../../hooks/helpers.hook";
import {useNavigate} from 'react-router-dom';
import ActionMore from '../../actionsMore';
 
import {DEFAULTFILTERS} from "../../../constants/app.constants";
import Button from '../../button';

const CurrencyList = props => {
     

    const tableData = props?.tableData?.listData
    
    const {formatDateMMMDYYYY} = useHelper()
    const navigate = useNavigate()
  

    return (
        <>
            <Table
                thead={
                    <tr>
                        <TH sortBy={props.location} sortKey="sequence">Currency</TH>
                        <TH sortBy={props.address1} sortKey="ansoption">Country</TH>
                        <TH nosort>Action</TH>
                    </tr>
                }
                tbody={tableData?.map(function (item, index) {
                    return (
                        <tr>
                            <td>{item.Currency}</td>
                            <td>{item.Country}</td>
                            <td>-</td>
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

export default CurrencyList;
