import React from "react";
import './modal.scss'
import Icon from '../icon'
import CloseIcon from '../svg/closeIcon'
import Button from '../button'

const Modal = props => {
    return(
        <>
            <div className={`modal-wrapper ${props.className ? props.className : ''}`}>
                <div className="backdrop" onClick={props.onOuterClose}></div>
                <div className={`modal-content ${props.light ? 'modal-light' : '' } ${props.modalSmall ? 'modal-small' : '' }`}>
                    <div className="modal-body" >
                        {props.onClose && props.canClose &&
                            <Button
                                className="modal-close"
                                type="button"
                                onClick={props.onClose}
                                link
                                text={
                                    <Icon
                                        icon={<CloseIcon />}
                                    />
                                }
                            />
                        }
                        {props.modalContent}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;

Modal.defaultProps = {
    canClose: true,
}
