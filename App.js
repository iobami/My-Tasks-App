/**
 *  Author @iobami
 * In App.js is a new project
 */

import * as React from 'react';
// import { DeviceEventEmitter } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TaskDetailScreen from './screens/Task';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#FFFFF1',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        // fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name="Tasks"
                    component={HomeScreen}
                    options={{
                        title: 'Tasks',
                    }}
                />
                <Stack.Screen
                    name="Task"
                    component={TaskDetailScreen}
                    options={{ title: 'Task' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

/**
 * Initial set up above
 */


// import React from 'react';
// import {
//     StyleSheet,
//     View,
//     Button,
//     Text
// } from 'react-native';
// import { connect, useSelector } from 'react-redux';
// import { changeCount } from './redux/actions/counts';
// import { setTask } from './redux/actions/tasks';
//
// const decrementCount = (dispatch, count) => {
//     count--;
//     dispatch(changeCount(count));
//     dispatch(setTask('Yes yes we did!'));
// };
// const incrementCount = (dispatch, count) => {
//     count++;
//     dispatch(changeCount(count));
//     dispatch(setTask('we made it bruhh'));
// };
//
// function App({ dispatch }) {
//
//     const { count } = useSelector(state => state.count);
//     console.log(useSelector(state => state));
//
//     return (
//         <View styles={styles.container}>
//             <Text>Hi</Text>
//             <Button
//                 title="increment"
//                 onPress={() => incrementCount(dispatch, count)}
//             />
//             <Text>{count}</Text>
//             <Button
//                 title="decrement"
//                 onPress={() => decrementCount(dispatch, count)}
//             />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });
//
// export default connect()(App)
