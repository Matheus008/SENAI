const Task = require('./task');
let Next_ID = 1;
let records = [];

class TaskService {
    
    findAll() {
        return records;
    }

    findById(id) {
        return records.find((record) => record.id == id);
    }

    insert(title, description, completed) {
        const task = new Task(Next_ID++,title, description, completed);
        records.push(task);
        return task;
    }
    update(id, title, description, completed) {
        records = records.map((record) => {
            if (record.id == id) {
                record.title = title;
                record.description = description;
                record.completed = completed;
            }
            return record;
        });
        return new Task(id, title, description, completed);
    }
    remove(id){
        const oldSize = records.length;
        records = records.filter((record) => record.id != id);
        return oldSize > records.length;
    }
}

module.exports = new TaskService();