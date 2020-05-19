import * as React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import axios from 'axios';

const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timerValue: '00h 00m 00s',
        };
    }

    _getTasksData() {
        axios({
            method: 'GET',
            url: 'https://cephs-images-api.herokuapp.com/api/v1/images',
        }).then((res) => {
            console.log(res);
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight
                    style={styles.taskContainer}
                >
                    <View style={task.content}>
                        <Text style={task.contentTitle}>Title
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text style={task.contentSummary}>
                            Description...  lorem fhps pluem lorem fhps pluem lorem fhps pluem
                            lorem fhps pluem lorem fhps pluem
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.taskContainer}
                >
                    <View style={task.content}>
                        <Text style={task.contentTitle}>Title
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text style={task.contentSummary}>
                            Description...  lorem fhps pluem lorem fhps pluem lorem fhps pluem
                            lorem fhps pluem lorem fhps pluem lorem fhps pluem lorem fhps pluem
                            {"\n"}
                            {"\n"}
                            {"\n"}
                            {"\n"}
                            lorem fhps pluem lorem fhps pluem
                        </Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 10,
        alignContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#FFFFF1',
    },
    taskContainer: {
        margin: 3,
        flex: 6,
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
