const service = require('../domain/task/service-task');

class TaskController {
    remove(request, response) {
        const {id} = request.params;
        const ok = service.remove(id);
        const message = ok ? "Registro removido com sucesso" : "Não foi possível remover o registro";
        const tasks = service.findAll();
        const modelView = {
            message,
            tasks
        }
        response.render('task/list.html', modelView);
    }

    findAll(request, response) {
        const tasks = service.findAll();
        const modelView = {
            tasks
        }
        response.render('task/list.html', modelView);
    }
    showForm(request, response) {
        const {id} = request.params;
        const task = service.findById(id) || {id: "novo"};
        if(id && id.trim().length > 0) {
            const modelView = {
                task
            }
            response.render('task/form.html', modelView);
        }
    }
    save(request, response) {
        const paramsId = request.params.id;
        const {id, title, description, completed} = request.body;
        let message = "";
        let task = null;
        let confirmCompleted = false;
        if(completed == "on") {
            confirmCompleted = true;
        }else {
            confirmCompleted = false;
        }

        if(id && id.trim() == paramsId.trim() && id != "novo") {
            task = service.update(id, title, description, confirmCompleted);
            message = "Atualizado com sucesso";
        }else {
            task = service.insert(title, description, confirmCompleted);
            message = "Registro criado com sucesso!";
        }

        const modelView = {
            task,
            message
        }
        response.render('task/form.html', modelView);
    }
}

const controller = new TaskController();

function configure(app) {
    app.get('/tasks', controller.findAll);
    app.get('/tasks/:id', controller.showForm);
    app.get('/tasks/:id/remove', controller.remove);
    app.post('/tasks/:id', controller.save);
}

module.exports = {
    configure
}