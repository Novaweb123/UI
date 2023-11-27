import React from "react";
import './appStatus.scss';

const PaymentGatewayStatus = props => {
    return(
        <div className="app-status-wrapper" {...props}>
            {props.status == '0' && (
                <div className="app-status pending">Pending</div>
            )}
            {props.status == '1' && (
                <div className="app-status approved">Approved</div>
            )}
            {props.status == '2' && (
                <div className="app-status rejected">Rejected</div>
            )}
            {props.status == '4' && (
                <div className="app-status successful">Successful</div>
            )}
            {props.status == '5' && (
                <div className="app-status unsuccessful">Unsuccessful</div>
            )}

            {props.status == 'successfullycomplete' && (
                <div className="app-status successful">Successful</div>
            )}
            {props.status == 'insufficientfunds' && (
                <div className="app-status rejected">Insufficient Funds</div>
            )}
             {props.status == 'payerbanksystemerror' && (
                <div className="app-status pending">Payerbank System Error</div>
            )}
            
        </div>
    )
}

export default PaymentGatewayStatus;