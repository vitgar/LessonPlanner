// const pool = require("../../dbconfig");
let config = require("../../dbconfig");
const sql = require("mssql");
// const sql = require('mssql');
// const Users = require('./users');
// const e = require('express');

// const  getUsers = (callBack) => {
//         pool.query("SELECT * FROM USERS",
//         [],
//         (error, results, fields) => {
//             if(error){
//                 return callBack(error)
//             }
//             return callBack(null, results[0])
//         }
//         );
// }

// async function getUsers(callBack){
//     try{
//         let connection  = await sql.connect(config);
//         let users = await connection.request().query("SELECT * FROM USERS");
//         return users.recordsets;
//     }
//     catch (errors){
//         console.log(errors);
//     }
// }

// async function getUserById(id, callback) {
//     try{
//         let connection = await sql.connect(config);
//         let user = await connection.request().query(`SELECT * FROM USERS WHERE ID = '${id}'`);
//         return user.recordsets;
//     }
//     catch(errors){
//         console.log(errors);
//     }
// }

// async function insertUser(user, callBack){
// try{
//     let connection = await sql.connect(config);
//     let iuser = await connection.request().query(
//         `INSERT INTO USERS (Name, LastName, PhotoUri, Email, Profession, Position) OUTPUT INSERTED.ID
//         VALUES('${user.Name}', '${user.LastName}', 'URL','${user.Email}', '${user.Profession}', '${user.Position}')`,
//         (error, result, fields) =>
//         {
//             if(error){
//                 return callBack(error)
//             }
//             return callBack(null, result);
//         });
//     let insertedId = await connection.request().query("SELECT SCOPE_IDENTITY()");
//     let {ID} = iuser.recordsets[0].find(r => r);
//     return getUserById(ID);

// }
// catch(errors){
//     console.log(errors);
// }
// }

// async function updateUser(user, id, callback){
//     let connection = await sql.connect(config);
//     let updatedUser = await connection.request().query(`UPDATE USERS SET NAME = '${user.Name}', LASTNAME = '${user.LastName}', PHOTOURI = 'URL', EMAIL='${user.Email}', PROFESSION = '${user.Profession}', POSITION = '${user.Position}' WHERE ID = '${id}'`);
// }
async function getUsers() {
  try {
    let connection = await sql.connect(config);
    let users = await connection.request().query("SELECT * FROM USERS");
    return users.recordset;
  } catch (errors) {
    console.log(errors);
  }
}

module.exports = {
  getUsers: getUsers,
  //   (callBack) => {
  //     pool.query("SELECT * FROM USERS", [], (error, results, fields) => {
  //       if (error) {
  //         return callBack(error);
  //       }
  //       return callBack(null, results[0]);
  //     });
  // getUserById: getUserById,
  // insertUser: insertUser,
  // updateUser: updateUser
};
