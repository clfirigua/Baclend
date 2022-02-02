const express = require('express');


// crear servidor de express

const app = express();







app.listen(4000, ()=>{
    console.log(`servidor corriendo en el puerto ${4000}`)
})