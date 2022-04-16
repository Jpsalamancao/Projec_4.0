const {Router} = require('express');
const router = Router();

const fetch = require("node-fetch");

router.get('/', async (req, res) => {
    //const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    console.log(photos);
    res.send('Photos');
})

module.exports = router