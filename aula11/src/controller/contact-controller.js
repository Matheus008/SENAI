const service = require('../domain/contact/service-contact');
const Contact = require('../domain/contact/contact');

class ContactController {

    remove(request,response){
        const {id} = request.params;
        const ok = service.remove(id);
        const message = ok ? "Registro removido com sucesso" : "Não foi possível remover o registro";
        const contacts = service.findAll();
        const modelView = {
            message,
            contacts
        }
        response.render('contact/list.html',modelView);
    }

    findAll(request,response){
        const contacts = service.findAll();
        const modelView = {
            contacts
        }
        response.render('contact/list.html',modelView);
    }
    showForm(request,response){
        const {id} = request.params;
        if(id && id.trim().length > 0){
            const contact = service.findById(id) || {id:"novo"};
            const modelView = {
                contact
            }
            response.render('contact/form.html',modelView);
        }   
    }
    save(request,response){
        const paramsId = request.params.id;
        const {id,name, email, phone} = request.body;
        let message = "";
        let contact = null;
        if(id && id.trim() == paramsId.trim() && id != "novo"){
            contact = service.update(id,name, email, phone);
            message = "Atualizado com sucesso";
        }else{
            contact = service.insert(name,email,phone);
            message = "Registro criado com sucesso!";
        }
        
        const modelView = {
            contact,
            message
        }
        response.render('contact/form.html',modelView);
    }
}

const controller = new ContactController();

function configure(app){
    app.get('/contacts',controller.findAll);
    app.get('/contacts/:id',controller.showForm);
    app.get('/contacts/:id/remove',controller.remove);
    app.post('/contacts/:id',controller.save);
}

module.exports = {
    configure
}