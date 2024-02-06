const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {
    port
} = require('./config');
const subscribe = require('./subscription');
const transporter = require('./mail');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/subscribe', async(req, res) => {
    const { name, email } = req.body;
    const [info, error] = await subscribe(transporter, email, name);
    if (error) {
        res.status(500).json({ error });
    } else {
        res.status(200).json({ info });
    }
});

app.listen(port, () => {
    console.log('Server started');
});