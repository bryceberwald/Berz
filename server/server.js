const http = require("http");
require('dotenv').config();
const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3077;

const corsOptions = {
    origin: [
        'http://127.0.0.1:3000', 
        'http://localhost:3000',
        'http://127.0.0.1:3001', 
        'http://localhost:3001',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});