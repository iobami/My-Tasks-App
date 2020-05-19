import AsyncStorage from "@react-native-community/async-storage";

const storeData = async (storageKey = 'newTASKS', value) => {
    console.log(value);
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(storageKey, jsonValue);
    } catch (e) {
        // saving error
    }
};

const getData = async (storageKey = 'newTASKS') => {
    try {
        const jsonValue = await AsyncStorage.getItem(storageKey);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
};

const mergeData = async (storageKey = 'TASKS', value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(storageKey, jsonValue);
    } catch(e) {
        // error reading value
    }
};

const removeData = async (storageKey = 'TASKS') => {
    try {
        return await AsyncStorage.removeItem(storageKey);
    } catch(e) {
        // error reading value
    }
};

export {
    storeData, getData, removeData,
};
