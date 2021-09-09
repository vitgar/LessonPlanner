let config = require("./dbconfig");
const sql = require("mssql");
const { response } = require("express");

async function getSchools() {
  try {
    let connection = await sql.connect(config);
    let schools = await connection.request().query("SELECT * FROM SCHOOLS");
    return schools.recordset;
  } catch (errors) {
    console.log(errors);
  }
}

async function getSchoolById(id) {
  try {
    let connection = await sql.connect(config);
    let school = await connection
      .request()
      .query(`SELECT * FROM SCHOOLS WHERE ID = '${id}'`);
    return school.recordset;
  } catch (errors) {
    console.log(errors);
  }
}
module.exports = {
  getSchools: getSchools,
  getSchoolById: getSchoolById,
};
