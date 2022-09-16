const express = require("express");
const cors = require("cors");
const router = require("./controllers")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const app = express();
app.use(cors({
	origin: ["http://localhost:3000", "http://localhost:3000/login", "http://localhost:3000/user-page"],
	methods: ["GET", "POST", "PUT"],
	credentials: true
}));
app.use((req, _, next)=>{
	console.log(`${req.method}  ${req.path}`);
	next();
})
app.use(cookieParser());
app.use(bodyParser.json());
// logger
app.use((req, _, next)=>{
	console.log(`${req.method}  ${req.path}`);
	next();
})


app.use(router);


app.set('port', process.env.PORT || 3001);

const options = {
  swaggerDefinition: {
    info: {
      title: 'Michelin Social API',
      version: '1.0.0',
      servers: ["htpp://localhost:3001"] 
    },
  },
  apis: ['./controllers/index.js'], // files containing annotations as above
};

const swaggerDocument = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;