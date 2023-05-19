const esquemaHistorial =({

    Id_Historial:{
        type: Number
    },
    Id_Auto: {
        type: Number
    },
    Id_Cliente: {
        type: Number
    },
    Id_Pago: {
        type: Number
    },
    fecha_Entrega: {
        type: Date
    },
    fecha_Devolucion:{
        tupe: Date
    },
    estado:{
        type:String
    }
    
})

export default esquemaHistorial;