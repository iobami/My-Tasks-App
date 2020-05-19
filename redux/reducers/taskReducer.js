import { SET_TASK } from '../constants';

const initialState = {
    title: '',
    description: '',
    id: '',
};

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TASK:
            return {
                ...state,
                id: action.id,
                title: action.title,
                description: action.description,
            };
        default:
            return state;
    }
};
export default taskReducer;
