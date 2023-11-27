import React, { useState } from "react"
import Button from "../button"
import Flex from "../flex"
import Modal from "../modal"
import Text from "../text"

const GlobalInfoModalOld = props => {
    const [isModal, setIsModal] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const onClickIsModal= () => {
        setIsModal(true);
    }
    const closeModal = () => {
        setIsModal(false);
    }
    const onClickIsConfirm = () => {
        setIsConfirm(true);
    }
    const onClickDone= () => {
        setIsConfirm(false);
        setIsModal(false);
        
    }
    return(
        <>
            <Button
                type="button"
                text="Delete Video"
                onClick={onClickIsModal}
            />
            {!isConfirm && isModal && (
                <Modal
                    light
                    modalSmall
                    modalContent={
                        <div>
                            <Text
                                type="H2"
                                text="Are you sure to delete this list?"
                                className="mb-10 text-center"
                            />
                            <Text
                                type="PARAGRAPH"
                                text="Listing will be deleted permanently."
                                className="mb-5 text-center"
                            />
                            <Flex justifyContent="center">
                                <Button
                                    secondary
                                    outline
                                    large
                                    text="Cancel"
                                    onClick={closeModal}
                                />
                                <Button
                                    large
                                    text="Confirm"
                                    onClick={onClickIsConfirm}
                                />
                            </Flex>
                        </div>
                    }
                />
            )}
            {isConfirm && (
                <Modal
                    light
                    modalSmall
                    modalContent={
                        <div>
                            <Text
                                type="H2"
                                text="Listing Deleted"
                                className="mb-5 text-center"
                            />
                            <Flex justifyContent="center">
                                <Button
                                    large
                                    text="Done"
                                    onClick={onClickDone}
                                />
                            </Flex>
                        </div>
                    }
                />
            )}
        </>
    )
}

export default GlobalInfoModalOld
