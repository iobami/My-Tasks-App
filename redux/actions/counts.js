import { TASK_ID_COUNTER } from '../constants';

export const changeCount = (count) => {
    return {
        type: TASK_ID_COUNTER,
        payload: count
    }
};
