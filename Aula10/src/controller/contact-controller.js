const service = require('../domain/contact/service-contact');
const Contact = require('../domain/contact/contact');

class ContactController {

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
            const contact = service.findById(id);
            const modelView = {
                contact
            }
            response.render('contact/form.html',modelView);
        }   
    }
}

const controller = new ContactController();

function configure(app){
    app.get('/contacts',controller.findAll);
    app.get('/contacts/:id',controller.showForm);
}

module.exports = {
    configure
}