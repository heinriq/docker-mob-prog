const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function(req, res) { 
    res.send("Vamos pra baleia?")
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');