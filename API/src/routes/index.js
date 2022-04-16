const { Router } = require('express');
const router = Router();

router .get('/', (req, res) => {
    const data = {
        "name": "Krloz",
        "email": "camedinal@correo.udistrital.edu.co",
    };
    res.json(data);
})

module.exports = router;