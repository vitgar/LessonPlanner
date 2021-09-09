let config = require("./dbconfig");
const sql = require("mssql");

async function getLessonPLans() {
  try {
    let connection = await sql.connect(config);
    let lessonPLans = await connection
      .request()
      .query("SELECT * FROM LESSONPLANS");
    return lessonPLans.recordset;
  } catch (errors) {
    console.log(errors);
  }
}

async function getLessonPlanById(id) {
  try {
    let connection = await sql.connect(config);
    let lessonPlan = await connection
      .request()
      .query(`SELECT * FROM LESSONPLANS WHERE ID = '${id}'`);
    return lessonPlan.recordset;
  } catch (errors) {
    console.log(errors);
  }
}

module.exports = {
  getLessonPLans: getLessonPLans,
  getLessonPlanById: getLessonPlanById
};
