let User = require('../models/userModel');
const { use } = require('../routes');

let userList =[];

exports.userList = function (req, res){
    // let user = new User("Dupont","Paul");
    // userList.push(user);
    res.render('userList.ejs', {users : userList});
}

exports.userFormAdd = function(req, res) {
    res.render('userAdd.ejs', {iduser:'-1', lastname: "", firstname:""});
}

exports.userUpdate = function (req, res) {
    let iduser = req.params.iduser;
    res.render('userAdd.ejs', {iduser:iduser, lastname: userList[iduser]["lastname"], firstname: userList[iduser]["firstname"]});
}

exports.userNew = function(req, res) {
    let iduser = req.body.iduser;
    let lastname = req.body.lastname;
    let firstname = req.body.firstname;

    if (iduser >= 0){
        userList[iduser]["lastname"] = lastname;
        userList[iduser]["firstname"]= firstname;
    }
    else {
        let user = new User(lastname,firstname);
        userList.push(user);
    }


    res.redirect('/user');
}

exports.userShow =function (req,res) {
    let iduser = req.params.iduser;
    res.send('Hello ' + userList[iduser]["firstname"]);
}

exports.userRemove =function(req, res) {
    let iduser = req.params.iduser;
    userList.splice(iduser,1);

    res.redirect('/user');
}