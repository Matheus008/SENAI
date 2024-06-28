const Contact = require('./contact');
let NEXT_ID = 1;
let records = [
    {id:NEXT_ID++,name:"João",email:"joao@test",phone:"33221100"}
];

class ContactService{

    findAll(){
        return records;
    }

    findById(id){
        return records.find((record)=> record.id == id);
    }

    insert(name,email,phone){
        const contact = new Contact(NEXT_ID++,name,email,phone);
        records.push(contact);
        return contact;
    }
    update(id,name,email,phone){
        records = records.map((record)=>{
            if(record.id == id){
                record.name = name;
                record.email = email;
                record.phone = phone;
            }
            return record;
        })
        return new Contact(id,name,email,phone);
    }
    remove(id){
        const oldSize = records.length;
        records = records.filter((record)=> record.id != id);
        return oldSize > records.length;
    }
}

module.exports = new ContactService();