var faker = require('faker');

var fname = faker.name.firstName(); // Rowan Nikolaus
var lname = faker.name.firstName(); // Rowan Nikolaus

var email = faker.internet.email(); // Kassandra.Haley@erich.biz
var telephone = faker.phone.phoneNumber();

var street = faker.address.streetAddress();
var image_url = faker.image.people();
var companyName = faker.company.companyName();

for (var i = 0; i < 10; i++){
    console.log(`{fname:${fname},lname:${lname},email:${email},telephone:${telephone},street:${street},image_url:${image_url},company_name:${companyName}}`)
}
