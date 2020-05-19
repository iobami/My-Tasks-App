import { GET_ALL_TASK } from '../constants';

export const setAllTasks = (data) => {
    return {
        type: GET_ALL_TASK,
        allTasks: data,
    }
};
