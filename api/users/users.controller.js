const {getUsers/*, getUserById, insertUser, updateUser*/} = require("./users.service");

// const GetUsers =

// const GetUserById = (request, response) => {
//   usersoperations.getUserById(request.params.id).then((result) => {
//     response.send(result[0].find((u) => u.Id === parseInt(request.params.id)));
//   });
// };

// const CreateUser = (request, response) => {
//   let user = {...request.body};
//   usersoperations.insertUser(user).then(result =>{
//   request.check('email', 'Invalid email').isEmail();
//   response.status(201).json(result[0].find(u => u))
// });


// const UpdateUser = (request, response) => {
//   let user = {...request.body};
//   usersoperations.updateUser(user, request.params.id).then(result =>
//     response.status(201).json(user));
// }

module.exports = {
    getUsers:(request, response) => {
        getUsers(() => {
        
          return result.json();
        });
      },
    // GetUserById:GetUserById,
    // CreateUser: CreateUser,
    // UpdateUser: UpdateUser

};
