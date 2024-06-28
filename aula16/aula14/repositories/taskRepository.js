const Task = require('../models/task');

class TaskRepository {
  constructor() {
    this.tasks = [{id:1, title:"Título", description:"Descrição", concluded:false}];
    this.currentId = 1;
  }

  getAll() {
    return this.tasks;
  }

  getById(id) {
    return this.tasks.find(task => task.id === id);
  }

  create(task) {
    task.id = ++this.currentId;
    this.tasks.push(task);
    return task;
  }

  update(id, taskData) {
    const task = this.getById(id);
    if (task) {
      task.title = taskData.title;
      task.description = taskData.description;
      task.concluded = taskData.concluded;
    }
    return task;
  }

  delete(id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = TaskRepository;