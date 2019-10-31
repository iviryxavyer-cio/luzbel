import { modalConstants } from '../constants/modal.constants';

const initialState = {
    modalType: null, 
    modalProps: {
        open: false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case modalConstants.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case modalConstants.HIDE_MODAL:
            return initialState
        default:
            return state
    }
}