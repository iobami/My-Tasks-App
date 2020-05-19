import { GET_ALL_TASK } from '../constants';

const initialState = {
    allTasks: [],
};

const allTasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_TASK:
            return {
                ...state,
                allTasks: action.allTasks,
            };
        default:
            return state;
    }
};
export default allTasksReducer;
