//Biblioteca SGAG
const mongoose = require ('mongoose')
const url_bd = 'mongodb://localhost:27017/P2'
mongoose.connect(url_bd)
.then(() => { 
    console.log ("Puedo dormir tranquila Parte2")
})
.catch((err) => {
    console.log("No jala esta chingadera Parte2")
}) 
const esquema_biblioteca = new mongoose.Schema
({
    Nombre : {
        type : String
    }, 
    Dirección : {
        type : String
    },
    NúmeroLibros : {
        type : Number
    },
    GerenteCargo : {
        type : String
    },
    Sucursales : {
        type : Number
    },
    VentaDía : {
        type :  Number
    }
})
const modelo_biblioteca = new mongoose.model 
(Tab_Datos, esquema_biblioteca)
modelo_biblioteca.create ({
    Nombre :  "Bodett ShG",
    Dirección :  "Zona Centro",
    NúmeroLibros :  44960,
    GerenteCargo :  "Gael Romero",
    Sucursales : 4,
    VentaDía : 34
})