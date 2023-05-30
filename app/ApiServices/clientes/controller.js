const conexion = require('./dto');


module.exports = {
    //============ INSERTAR UN SOLO CLIENTE =============================
    async getCliente(req, res, next) {
        try {
            const { id_cliente } = req.params;

            const consultar = await conexion.query('SELECT * FROM clientes WHERE id_cliente =$1', [id_cliente]);
            if (consultar.rows.length === 0) {
                return res.status(404).json({
                    message: 'No se pudo encontrar la licencia'
                })
            }
            res.json(consultar.rows[0]);
        } catch (error) {
            next(error);
        }

    },
    //======================OBTENER CLIENTES =============================
    async getClientes(req, res, next) {
        try {
            const consultaClientes = await conexion.query('SELECT * FROM clientes');
            console.log("======0 INFORMACION =0======", consultaClientes);
            res.json(consultaClientes);

        } catch (error) {
            next(error);
        }

    },
    //================== INSERTAR CLIENTES =============================
    async insertarCliente(req, res, next) {
        try {
            const { nombre, apellido, cedula, genero, estado, foto, id_usuario, id_licencia } = req.body;
            const insertarCliente = await conexion.query('INSERT INTO clientes (nombre, apellido, cedula, genero, estado, foto, id_usuario, id_licencia) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [nombre, apellido, cedula, genero, estado, foto, id_usuario, id_licencia]);
            console.log(insertarCliente.rows[0]);
            res.send('USUARIO CREADO');

        } catch (error) {
            next(error);

        }

    },
    async actualizarCliente(req, res, next) {

        try {
            const { id_cliente } = req.params;
            const { nombre, apellido, cedula, genero, estado, foto } = req.body;

            const actualizar = await conexion.query(
                'UPDATE clientes SET nombre= $1, apellido= $2, cedula= $3, genero = $4, estado = $5, foto = $6 WHERE id_cliente = $7 RETURNING *',
                [nombre, apellido, cedula, genero, estado, foto, id_cliente]
            );

            if (actualizar.rows.length === 0) {
                return res.status(404).json({
                    message: 'NO SE PUDO ACTUALIZAR CORRECTAMENTE'
                })
            }
            return res.json(actualizar.rows[0])

        } catch (error) {
            next(error);
        }

    },
    async eliminarCliente(req, res, next) {
        try {
            const { id_cliente } = req.params;
            const id_licencia = await conexion.query('SELECT id_licencia FROM clientes WHERE id_licencia = $1', [id_licencia]);
            const eliminarCliente = await conexion.query('DELETE FROM clientes WHERE id_cliente = $1 ', [id_cliente]);

            const eliminLicencia = await conexion.query('DELETE FROM licencia WHERE id_licencia = $1 ', [id_licencia]);
            if (eliminarCliente.rowCount === 0 || eliminLicencia.rowCount === 0) {
                return res.status(404).json({
                    message: 'NO SE PUDO ELIMINAR LA LICENCIA'
                })
            }
            res.send("DATOS DEL CLIENTE ELIMINADO CORRECTAMENTE");
        } catch (error) {
            next(error);
        }

    }
}