const express = require('express');
const router = express.Router;
const app = express();

router.get('/', (req, res) => {
    res.send('Hello world');
    console.log('connected successfully')
})

app.listen(3000, () => 'listenin on port 3000');

