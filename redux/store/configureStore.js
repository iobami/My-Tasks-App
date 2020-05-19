import { createStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';
import taskReducer from '../reducers/taskReducer';
import allTasksReducer from '../reducers/allTasksReducer';

const rootReducer = combineReducers(
    {
        count: countReducer,
        task: taskReducer,
        allTasks: allTasksReducer,
    }
);

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
