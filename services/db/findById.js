const getTask = async (db, id) => {

    if (!db.length) return null;

    let task = {};
    await db.forEach((taskObject) => {
        if (taskObject.id === id) {
            task = taskObject;
        }
    });

    if (Object.keys(task).length === 0) {
        task = {
            title: '',
            description: '',
            id: id,
            date: Date(),
        };
    }

    console.log(task);
    console.log('from find by id');
    return task;

};

export {
    getTask,
};
