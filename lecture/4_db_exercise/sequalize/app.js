const db = require('./models/');

// ===== CREATING NEW DATA
// db.user.create({firstName:'Eric', lastName:'Thai', email:'eric@dc.com'})
// .then(user =>{
//     console.log(user.dataValues.id);
// });
// db.user.create({firstName:'Sobha', lastName:'Bodparti', email:'sobha@dc.com'})
// .then(user =>{
//     console.log(user.dataValues.id);
// });
// db.user.create({firstName:'Phong', lastName:'Mach', email:'phong@dc.com'})
// .then(user =>{
//     console.log(user.dataValues.id);
// });
// db.user.create({firstName:'Raul', lastName:'Menjivar', email:'raul@dc.com'})
// .then(user =>{
//     console.log(user.dataValues.id);
// });
// db.user.create({firstName:'Ray', lastName:'Yang', email:'ray@dc.com'})
// .then(user =>{
//     console.log(user.dataValues.id);
// });
// db.user.create({firstName:'John', lastName:'Argote', email:'john@dc.com'})
// .then(user =>{
//     console.log(user.dataValues.id);
// });

// // SELECT id, firstName, lastName from users
// db.user.findAll()
// .then(results =>{
//     results.forEach(index => {
//         // console.log(`${index}`) // =====> [object SequelizeInstance:user]
//         console.log(`id:${index.id} name: ${index.firstName} ${index.lastName}`)
//     });
// })

// // WHERE clause
// db.user.findAll({where:{lastName:'Ross'}})
// .then(results =>{
//     results.forEach(index=>{
//         console.log(`id:${index.id} name:${index.firstName} ${index.lastName} `)
//     });
// })

