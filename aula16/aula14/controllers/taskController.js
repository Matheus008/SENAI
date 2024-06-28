class TaskController {
    constructor(taskService) {
      this.taskService = taskService;
    }
  
    getAllTasks(req, res) {
      const tasks = this.taskService.getAllTasks();
      res.json(tasks);
    }
  
    getTaskById(req, res) {
      const task = this.taskService.getTaskById(parseInt(req.params.id));
      if (task) {
        res.json(task);
      } else {
        res.status(404).send('Task not found');
      }
    }
  
    createTask(req, res) {
      const task = this.taskService.createTask(req.body);
      res.status(201).json(task);
    }
  
    updateTask(req, res) {
      const task = this.taskService.updateTask(parseInt(req.params.id), req.body);
      if (task) {
        res.json(task);
      } else {
        res.status(404).send('Task not found');
      }
    }
  
    deleteTask(req, res) {
      const success = this.taskService.deleteTask(parseInt(req.params.id));
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Task not found');
      }
    }
  }
  
  module.exports = TaskController;