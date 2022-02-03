require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConection } = require('./db/config');
const port = process.env.PORT;

// crear servidor de express
const app = express();

//conexion base de datos
dbConection();

//directorio publico
app.use(express.static('public'))
//cors
app.use(cors());

//lectura y parceo del body
app.use(express.json());

//Rutas
app.use('/api/auth/', require('./routes/auth'));



app.listen(port, ()=>{
    console.log(`servidor corriendo en el puerto ${port}`);
})