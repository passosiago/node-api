const express = require('express');
const app = express();

app.use('/api', require('./src/routes/productRoute'));

app.listen(3000, () => {
    console.log('ok')
});