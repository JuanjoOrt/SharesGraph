
import type from '../parameters/dailyGraph'

const _initialState = () => ({
    dataAppleDaily: null,
    type: null,
});

const _setData = (state, {dataAppleDaily}) => ({...state, dataAppleDaily});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.FETCH_SUCCESS:
            return _setData(state, action);
        case type.CLEAR_BUFFER:
            return _setData(state, action);
        default:
            return state;
    }
};