const express = require('express');
const bodyParser = require('body-parser');     
const cors = require('cors');                   
const route = require('./route');
const app = express();                                                               

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});