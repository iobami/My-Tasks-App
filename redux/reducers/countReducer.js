import { TASK_ID_COUNTER } from '../constants';

const initialState = {
    count: 400
};
const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case TASK_ID_COUNTER:
            return {
                ...state,
                count:action.payload
            };

        default:
            return state;
    }
};

export default countReducer;
