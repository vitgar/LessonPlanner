class Users{
    constructor(id,name,lastName,birthDate,gender,photoUri,email,profession,position,addressId){
        this.id=id;
        this.name=name;
        this.lastName=lastName;
        this.birthDate=birthDate;
        this.gender=gender;
        this.photoUri=photoUri;
        this.email=email;   
        this.profession=profession;
        this.position=position;
        this.addressId = addressId;
    }
}

module.exports = Users;