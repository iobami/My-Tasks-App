const updateTaskById = async (db, id, newTask) => {

    let checkNewTask = true;

    if (!db.length) return null;

    await db.forEach((taskObject) => {
        if (taskObject.id === id) {
            checkNewTask = false;
            taskObject.title = newTask.title;
            taskObject.description = newTask.description;
        }
    });

    if (checkNewTask) {
        db.push({
            title: newTask.title,
            description: newTask.description,
            id: id,
            date: Date(),
        });
    }

    return db;

};

export {
    updateTaskById,
};
