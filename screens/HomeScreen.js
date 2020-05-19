// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, FlatList} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { FAB } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { getData } from '../services/localStorage';
import { setAllTasks } from '../redux/actions/allTasks';

// import db from '../db/tasks';

// const DeviceWidth = Dimensions.get('window').width;

const goToTask = (navigation, name, task) => {
    // console.log(task);
    return navigation.navigate(name, {
        id: task.id,
    });
};

const AddTaskBtn = ({ nav, name, task }) => (
    <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => goToTask(nav, name, task)}
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

    // const [db, setDb] = React.useState([]);

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused

            async function fetchData() {

                if (db.length) return;

                const response = await getData();

                // ... get avavilable tasks from localStorage
                dispatch(setAllTasks(response));
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
                task={{
                    id: '401',
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignContent: 'space-between',
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#FFFFF1',
    },
    taskContainer: {
        margin: 3,
        // maxHeight: 250,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#585858',
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
        backgroundColor: '#FF4081'
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
    },
    contentSummary: {
        fontSize: 12,
        color: '#383838',
    },
});

export default connect()(HomeScreen);
