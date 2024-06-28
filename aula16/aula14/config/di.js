const TaskRepository = require('../repositories/taskRepository');
const TaskService = require('../services/taskService');
const ProductRepository = require('../repositories/productRepository');
const ProductService = require('../services/productService');

module.exports = {
  taskRepository: new TaskRepository(),
  taskService: new TaskService(new TaskRepository()),
  productRepository: new ProductRepository(),
  productService: new ProductService(new ProductRepository()),
};