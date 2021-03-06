const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10m', extended : true}));

app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

