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
}

module.exports = new ContactService();