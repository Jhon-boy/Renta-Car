const esquemaMensajes =({

    Id_Mensaje: {
        type: Number
    },
    Id_Emisor: {
        type: Number
    },
    Id_Receptor:{
        type: Number
    },
    mensaje: {
        type: Text
    },
    fecha_Emision:{
        type: Date
    }
})
 export default esquemaMensajes;