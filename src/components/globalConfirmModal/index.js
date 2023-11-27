import React from 'react';
import Flex from "../flex";
import Text from "../text";
import Button from "../button";
import Modal from "../modal";
import {useNavigate} from "react-router-dom";

const GlobalConfirmModal = props => {
    const navigate = useNavigate()
    const closeModal = () => {
        props.setIsModal(false)
        if (props.navigateBack) {
            navigate(-1)
        }
    }
    const onClickOuterClose = () => {
        if (props.outerClose) {
            props.setIsModal(false)
        }
    }
    return (
        <Modal
            onClose={closeModal}
            onOuterClose={onClickOuterClose}
            light
            modalSmall={props?.smallModal}
            canClose={props.canClose}
            modalContent={
                <Flex
                    flexColumn
                    alignItemsCenter
                    justifyContent="center"
                >
                    <Text
                        type="H2"
                        className="text-center mb-10"
                        text={props?.title}
                    />
                    {props?.subtitle && (
                        <Text
                            type="PARAGRAPH"
                            className="text-center mb-30"
                            text={props?.subtitle}
                        />
                    )}
                    <Flex justifyContent="center">
                        {props.cancelButtonText && (
                            <Button
                                secondary
                                outline
                                large
                                text={props?.cancelButtonText}
                                onClick={closeModal}
                            />
                        )}
                        <Button
                            large
                            text={props.confirmButtonText}
                            onClick={props?.onClickConfirmButton}
                        />
                    </Flex>
                </Flex>
            }
        />
    );
};

export default GlobalConfirmModal;
GlobalConfirmModal.defaultProps = {
    navigateBack: false,
    outerClose: false,
    title: '',
    subtitle: '',
    buttonText: '',
    buttonType: '',
    smallModal: true,
    confirmButtonText: 'Confirm',
}


