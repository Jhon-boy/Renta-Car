const esquemaReserva=({

    Id_Reserva:{
        type: Number
    },
    Id_Cliente: {
        type: Number
    },
    fecha_Entrega:{
        type: Date
    }
    ,fecha_Devolucion:{
        type: Date
    }
})

export default  esquemaReserva;