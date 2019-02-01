const express = require('express');
const app = express();
const db = require('./models/')
var faker = require('faker');

// db.types.create({name:'buildings'})
// .then(result =>{
//     console.log(result);
// });
// db.types.bulkCreate([{name:'Spell'},{name:'Troops'}]).then(results=>console.log(results))

app.set('view engine','ejs');
app.set('views','views')

app.use(express.static('public'))
app.use(require('./routes/index'))

for (var i = 0; i < 10; i++){
var fname = faker.name.firstName(); // Rowan Nikolaus
var lname = faker.name.firstName(); // Rowan Nikolaus

var email = faker.internet.email(); // Kassandra.Haley@erich.biz
var telephone = faker.phone.phoneNumber();

var street = faker.address.streetAddress();
var image_url = faker.image.people();
var companyName = faker.company.companyName();
    console.log(`{fname:'${fname}',lname:'${lname}',email:'${email}',telephone:'${telephone}',street:'${street}',city:'',zipcode:'',state_code:'TX', image_url:'${image_url}',company_name:'${companyName}'}`)
}


app.listen(3000,()=>{
    console.log('listening on port 3000')
})