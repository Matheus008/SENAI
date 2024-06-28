const express = require('express');
const cors = require('cors');

const di = require('./config/di');
const TaskController = require('./controllers/taskController');
const taskRoutes = require('./routes/taskRoutes');

const ProductController = require('./controllers/productController');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const taskController = new TaskController(di.taskService);
const productController = new ProductController(di.productService);

app.use('/api/tarefas', taskRoutes(taskController));
app.use('/api/produtos',productRoutes(productController));

module.exports = app;