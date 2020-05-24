import * as React from 'react';
import { Platform, StyleSheet, View, Dimensions, FlatList } from 'react-native';
import axios from 'axios';

const ScreenWidth = Dimensions.get('window').width;

const instructions = Platform.select({
    ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const color = [
    'red', 'green', 'blue', 'yellow',
];

function TodoScreen() {

    return (
        
        <View style={{flex: 1, flexDirection: 'row'}}>
            
            <View style={{width: ScreenWidth / 2, backgroundColor: 'green'}}></View>

            <View style={{width: ScreenWidth / 2, backgroundColor: 'yellow'}}></View>

            <View style={{width: ScreenWidth / 2, backgroundColor: 'pink'}}></View>

            <View style={{width: ScreenWidth / 2, backgroundColor: 'yellow'}}></View>

            <View style={{width: ScreenWidth / 2, backgroundColor: 'green'}}></View>

            <View style={{width: 100, backgroundColor: 'pink'}}></View>

            {/* <FlatList
                style={{flex: 1, backgroundColor: 'red', flexDirection: 'row', flexWrap: 'wrap'}}
                data={color}
                renderItem={({ item }) => (
                    <View style={{width: 100, backgroundColor: item}}></View>
                )}
                keyExtractor={item => item}
            /> */}

        </View>

    );

}

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

export default TodoScreen;