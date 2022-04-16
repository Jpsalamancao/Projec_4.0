const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const users = require("../sample.json");

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const {user, name, lastname, email} = req.body;
    //if (user && name && lastname && email){
        const id = users.length + 1;
        const newUser = {id, ...req.body};
        //console.log(newUser);
        users.push(newUser);
        res.send('Saved');
        //res.json(users)
    //} else {
        //res.status(500).send('Wrong request');
        console.log(req.body);
    //}
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {user, name, lastname, email} = req.body;
    if (user && name && lastname && email){
        _.each(users, (usr, i) => {
            if (usr.id == id){
                usr.user = user;
                usr.name = name;
                usr.lastname = lastname;
                usr.email = email;
            }
        });
        res.json(users)
    } else {
        //res.status(500).send('Erorr');
        res.json(10);
    }
});

router.delete('/:id', (req, res) => {
    //console.log(req.params);
    const {id} = req.params;
    _.each(users, (user, i) => {
        if (user.id == id){
            users.splice(i, 1);
        }
    });
    //res.send('Deleted');
    res.json(users);
});

module.exports = router;