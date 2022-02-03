const mongoose = require('mongoose');


const dbConection = async () =>{

    try {
        await mongoose.connect(process.env.DBCLOSTER);
        console.log('base de datos online')
    } catch (err) {
        throw new Error('Error en la base de datos')
    }
}

module.exports={
    dbConection
}