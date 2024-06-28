const Task = require('../models/task');

class TaskService {
    constructor(taskRepository) {
      this.taskRepository = taskRepository;
    }
  
    getAllTasks() {
      return this.taskRepository.getAll();
    }
  
    getTaskById(id) {
      return this.taskRepository.getById(id);
    }
  
    createTask(taskData) {
      const task = new Task(null, taskData.title, taskData.description, taskData.concluded);
      return this.taskRepository.create(task);
    }
  
    updateTask(id, taskData) {
      return this.taskRepository.update(id, taskData);
    }
  
    deleteTask(id) {
      return this.taskRepository.delete(id);
    }
  }
  
  module.exports = TaskService;