const esquemaClientes =({

    Id_Cliente:{
        type: Number
    },
    nombre: {
        type: String
    },
    apellido:{
        tupe: String
    },
    cedula: {
        type: String
    },
    genero: {
        type: String
    },
    estado: {
        type: String
    },
    foto: {
        type: String
    },
    Id_Usuario: {
        type: Number
    },
    Id_Licencia: {
        type: Number
    }
})

export default esquemaClientes;