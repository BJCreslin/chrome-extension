import enterPageReducer from "./enter-page-reducer";
import {ConnectedType, WindowType} from "./consts";

let store = {
    _state: {
        config: {
            windowType: WindowType.Enter
        },
        telegram: {
            url: 'https://t.me/mHelperTgBot',
            isConnected: ConnectedType.Unknown
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.config = enterPageReducer(this._state.config, action);

        this._callSubscriber(this._state);
    }
}

export default store;