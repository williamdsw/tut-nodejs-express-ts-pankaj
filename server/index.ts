import express = require('express');

const app: express.Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => { 
    response.send('Hello World!')
});

app.listen(PORT, () => { 
    console.log('App is listening on port', PORT);
});