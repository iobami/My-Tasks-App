import { SET_TASK } from '../constants';

let nextTaskId = 300;
let taskId;

export const setTask = (data) => {

    if (data.id === '') {
        console.log(data);
        console.log('---------------');
        taskId = `${nextTaskId++}`;
    } else {
        taskId = data.id;
    }

    return {
        type: SET_TASK,
        title: data.title,
        description: data.description,
        id: taskId,
    }
};

