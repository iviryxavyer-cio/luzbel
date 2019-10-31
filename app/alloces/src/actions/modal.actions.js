import { modalConstants } from '../constants/modal.constants';

export const showModal = ({ modalProps, modalType }) => {
    dispatchEvent({
        type: modalConstants.SHOW_MODAL,
        modalProps,
        modalType
    })
}

export const hideModal = () => dispatch => {
    dispatch({
        type: modalConstants.HIDE_MODAL
    })
}