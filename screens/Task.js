// In App.js in a new project

import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {connect, useSelector} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { getTask } from "../services/db/findById";
import { updateTaskById } from "../services/db/updateById";
import { setAllTasks } from "../redux/actions/allTasks";

function TaskScreen({ route, dispatch }) {

    // get all tasks from store
    const allTasksObject = useSelector(state => state);
    const { allTasks: db } = allTasksObject.allTasks;

    const { id } = route.params;
    const [taskObject, getTaskObject] = React.useState({});

    const [title, onChangeText] = React.useState('');
    const [noteValue, onChangeNote] = React.useState('');

    useFocusEffect(
        React.useCallback(() => {
            // Do something when the screen is focused
            async function fetchData() {

                if (Object.keys(taskObject).length !== 0) return;

                // pass data to findby id func
                const Tasks = await getTask(db, id);
                getTaskObject(Tasks);
                onChangeText(Tasks.title);
                onChangeNote(Tasks.description);

            }
            fetchData().then();

            return () => {
                // Do something when the screen is unfocused
                updateTaskById(db, id, {title: title, description: noteValue}).then(res => {
                    dispatch(setAllTasks(res));
                });

            };
        }, [title, noteValue])
    );

    return (
        <View style={task.container}>
            <TextInput
                style={task.contentTitle}
                onChangeText={text => {
                    onChangeText(text);
                }}
                placeholder="Title"
                underlineColorAndroid='transparent'
                value={ title }
            />
            <TextInput
                style={task.content}
                onChangeText={text => {
                    onChangeNote(text);
                }}
                placeholder="Note"
                value={ noteValue }
                multiline = {true}
                blurOnSubmit={false}
            />
        </View>
    );
}

const task = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        backgroundColor: '#FFFFF1',
    },
    content: {
        marginTop: 5,
        padding: 12,
    },
    contentTitle: {
        fontSize: 24,
        padding: 6,
    },
    contentSummary: {
        fontSize: 12,
        color: '#383838',
    },
});

export default connect()(TaskScreen);
