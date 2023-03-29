const ENTER_TG_CODE = 'ENTER_TG_CODE';
const SET_CONNECTED = 'SET_CONNECTED';

const enterPageReducer = (state, action) => {

    switch (action.type) {
        case ENTER_TG_CODE:
            return {...state}
        case SET_CONNECTED:
            return {
                ...state,
                ...state.telegram,
                isConnected: true
            }
        default:
            return state
    }
}

export default enterPageReducer;

const setConnected = () => {
enterPageReducer(state, SET_CONNECTED)
}

export const checkConnection = () => (dispatch) => {
    chrome.runtime.sendMessage(
        {
            destination: "test_connection",
            data: this.value
        },
        (response) => {


            if (response >= 200 && response < 300) {
                setConnected();
            } else {
                setNotConnected()
            }
        })
}