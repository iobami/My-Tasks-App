// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, FlatList} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { FAB } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
// import { getData } from '../services/localStorage';
import { changeCount } from '../redux/actions/counts';
import { setAllTasks } from '../redux/actions/allTasks';
// import { storeData } from '../services/localStorage';

import dbStore from '../db/tasks';

// const DeviceWidth = Dimensions.get('window').width;

const goToTask = (navigation, name, task) => {
    // console.log(task);
    return navigation.navigate(name, {
        id: task.id,
    });
};

const AddTaskBtn = ({ nav, name, dispatch, taskId }) => (
    <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
            const task = {
                id: `${taskId}`,
            };
            dispatch(changeCount(taskId + 1));
            goToTask(nav, name, task)
        }}
    />
);

function Tasks({ taskObject, navigation }) {
    return (
        <TouchableHighlight
            key={taskObject.title}
            style={styles.taskContainer}
            underlayColor="white"
            onPress={() => goToTask(navigation, 'Task', taskObject)}
        >
            <View style={task.content}>
                <Text style={task.contentTitle}>{ taskObject.title }
                    {"\n"}
                    {"\n"}
                </Text>
                <Text style={task.contentSummary}>
                    { taskObject.description }
                </Text>
            </View>
        </TouchableHighlight>
    );
}

function HomeScreen({ navigation, dispatch }) {

    /**
     * useSelector to get state and set all tasks into const db
     */

    const taskObject = useSelector(state => state);
    const { allTasks: db } = taskObject.allTasks;
    const { count } = taskObject.count;

    // const [db, setDb] = React.useState([]);

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused

            async function fetchData() {

                if (db.length) return;

                // const response = await getData();

                // ... get avavilable tasks from localStorage
                // dispatch(setAllTasks(response));
                dispatch(setAllTasks(dbStore));
                // ...
            }
            fetchData().then();

            return () => {
                // Do something when the screen is unfocused
            };
        }, [db])
    );

    return (
        <View style={styles.container}>

            <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                {/*{ getTasks(navigation) }*/}
                <FlatList
                    data={db}
                    renderItem={({ item }) => (
                        <Tasks
                            taskObject={item}
                            navigation={navigation}
                        />
                    )}
                    keyExtractor={item => item.id}
                    extraData={taskObject}
                />
            </View>

            <AddTaskBtn
                nav={navigation}
                name={'Task'}
                dispatch={dispatch}
                taskId={count}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
        alignContent: 'space-between',
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#fdfaff',
    },
    taskContainer: {
        margin: 3,
        // maxHeight: 250,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#321e45',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#4a2370'
    },
});

const task = StyleSheet.create({
    content: {
        paddingVertical: 9,
        paddingLeft: 10,
        paddingRight: 10,
        maxHeight: 150,
    },
    contentTitle: {
        fontSize: 18,
        color: '#321e45',
    },
    contentSummary: {
        fontSize: 12,
        color: '#321e45',
    },
});

export default connect()(HomeScreen);
