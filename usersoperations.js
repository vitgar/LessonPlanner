let config = require("./dbconfig");
const sql = require("mssql");
const { response } = require("express");

async function getUsers() {
  try {
    let connection = await sql.connect(config);
    let users = await connection.request().query("SELECT * FROM USERS");
    return users.recordset;
  } catch (errors) {
    return errors;
  }
}

async function getUserById(id) {
  try {
    let connection = await sql.connect(config);
    let users = await connection
      .request()
      .query(`SELECT * FROM USERS WHERE ID = '${id}'`);
    return users.recordset;
  } catch (errors) {
    console.log(errors);
  }
}

async function insertUser(user, callBack) {
  try {
    let connection = await sql.connect(config);
    let iuser = await connection.request().query(
      `INSERT INTO USERS (Name, LastName, PhotoUri, Email, Profession, Position) OUTPUT INSERTED.ID
        VALUES('${user.Name}', '${user.LastName}', 'URL','${user.Email}', '${user.Profession}', '${user.Position}') 
        SELECT SCOPE_IDENTITY()`
    );
    let identity = iuser.recordsets[0].find((r) => r.ID);
    return getUserById(identity.ID);
  } catch (errors) {
    console.log(errors);
  }
}

async function updateUser(user, id, callback) {
  let connection = await sql.connect(config);
  let updatedUser = await connection
    .request()
    .query(
      `UPDATE USERS SET NAME = '${user.Name}', LASTNAME = '${user.LastName}', PHOTOURI = 'URL', EMAIL='${user.Email}', PROFESSION = '${user.Profession}', POSITION = '${user.Position}' WHERE ID = '${id}'`
    );
}

module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  insertUser: insertUser,
  updateUser,
  updateUser,
};
