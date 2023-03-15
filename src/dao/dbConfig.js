import mongoose from "mongoose";

const URL = 'mongodb+srv://mateo:312@mateo.j9b5hjq.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Conectado con exito a la base de datos')
    }
})