
const pool = require("../../../config/db");


module.exports = {
    async getUsuarios(req, res, next){
        try {
            const consulta = await pool.query('SELECT * FROM usuarios');
            console.log("***__-*** INFORMACION: ",consulta);
            res.json(consulta);
        } catch (error) {
            next(error);
        }
    },
    //============================================================
    async getUser(req, res, next){
        try {
            const { id } = req.params;
            const consultaUsuario = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1',[id] );
            if(consultaUsuario.rows.length ===0){
                return res.status(404).json({
                    message: 'Producto no encontrado'
                })
            }
            res.json(consultaUsuario.rows[0]);

            
        } catch (error) {
            next(error);
        }

    },
    //=================000INSERTAR USUARIO =================
    async insertUser(req, res, next){
        try {
            const {id_rol, correo, contrasena} = req.body;
            const insertar = await pool.query('INSERT INTO usuarios (id_rol, correo, contrasena) VALUES($1, $2, $3) RETURNING *',
            [id_rol, correo, contrasena]
            );
            console.log(insertar.rows[0]);
            res.send("USUARIO CREADO");


        } catch (error) {
            next(error);
        }


    },
    //================================================================

    async updateUser(req, res, next){
        try {
            const { id_usuario } = req.params;
            const {correo, contrasena} = req.body;

            const actualizar = await query.pool('UPDATE usuarios SET  correo = $1, contrasena = $2 WHERE id_usuario = $3',
            [correo, contrasena, id_usuario]);

            if(actualizar.rows.length === 0)
            return res.status(404).json({
                message: "USUARIO NO ACTUALIZADO",
            })
            console.log(actualizar);
            return   res.json(actualizar.rows[0])

        } catch (error) {
            next(error);
        }

    },
    //================================================================
    async deleteUser(req, res, next){
       try {
        const { id } = req.params;
        const eliminarUser = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1', [id]);
        if(eliminarUser.rowCount === 0){
                return res.status(404).json({
                    message: 'No SE PUDO ELIMINAR EL PRODUCTO'
                })
        }
        res.send("Eliminado USUARIO");
       } catch (error) {
        next(error);
       }

    }
}