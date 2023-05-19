const esquemaPagos =({
    Id_Pago:{
        type: Number
    },
    Id_Cliente: {
        type: Number
    },
    fecha_Pago:{
        type: Date
    },
    tipo:{
        type: String
    }
})
export default esquemaPagos;