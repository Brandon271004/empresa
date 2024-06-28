const mongoose = require('mongoose');
const url_bd = 'mongodb://localhost:27017/Empresa2';

mongoose.connect(url_bd)
    .then(() => {
        console.log("Conexión exitosa a la base de datos");
    })
    .catch((err) => {
        console.error("Error al conectar a la base de datos", err);
    });

// Creo esquema
const Esquema_Empresa = new mongoose.Schema({
    Name: {
        type: String
    },
    Apellido_Paterno: {
        type: String
    },
    Apellido_Materno: {
        type: String
    },
    edad: {
        type: Number
    },
    NSS: {
        type: String
    },
    RFC: {
        type: String
    },
    CURP: {
        type: String
    }
});

// Creando colección
const Company_model = mongoose.model('DatosPersonales', Esquema_Empresa);

// Crear datos
Company_model.create({
    Name: "Brandon Miguel",
    Apellido_Paterno: "Martinez",
    Apellido_Materno: "Castillo",
    edad: 19,
    NSS: "23IUN13",
    RFC: "NV284NM2",
    CURP: "MACB102704HASRSR04"
})

