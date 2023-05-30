// const pool = require("../../../config/db");
const conexion = require("./dto");


module.exports = {
    async getLicencia(req, res, next) {
        try {
            const { Id_Licencia } = req.params;
            const consulta = await conexion.query('SELECT * FROM licencia WHERE id_licencia = $1', [Id_Licencia]);
            if (consulta.rows.length === 0) {
                return res.status(404).json({
                    message: 'No se pudo encontrar la licencia'
                })
            }
            res.json(consulta.rows[0]);
        } catch (error) {
            next(error);

        }
    },
    async insertarLicencia (req, res, next) {
        try {
            const {id_licencia, fecha_emision, fecha_caducidad, estado, categoria} = req.body;

            const insertarLicencia = await conexion.query('INSERT INTO licencia(id_licencia, fecha_emision, fecha_caducidad, estado, categoria) values($1, $2, $3, $4, $5)',
            [id_licencia ,fecha_emision, fecha_caducidad, estado, categoria]);
            console.log(insertarLicencia.rows[0]);
            res.send("LICENCIA CREADO");
        } catch (error) {

            next(error);
        }

    },
    async eliminarLicencia (req, res, next) {
        try {

            const {Id_Licencia }  = req.params;
            const eliminar = await conexion.query('DELETE from licencia where id_licencia= $1',[Id_Licencia]);
            if(eliminar.rowCount === 0){
                return res.status(404).json({
                    message: 'NO SE PUDO ELIMINAR LA LICENCIA'
                })
            }
            res.send("Eliminado Producto");
        } catch (error) {
            next(error);
        }
    },
    async actualizarLicencia(req, res, next){
        try {
            const { Id_Licencia } = req.params;
            const {fecha_emision, fecha_caducidad, estado, categoria} = req.body;
            const actualizar= await conexion.query('UPDATE licencia SET fecha_emision = $1, fecha_caducidad = $2, estado = $3, categoria = $4 WHERE id_licencia= $5',
            [fecha_emision, fecha_caducidad, estado, categoria, Id_Licencia]);
            if(actualizar.rows.length ===0){
                return res.status(404).json({
                    message: 'NO SE PUDO ELIMINAR EL PRODUCTO'});
            }
            console.log(actualizar);
            return   res.json(actualizar.rows[0])

        } catch (error) {
            next(error);
            
        }
    }
}

