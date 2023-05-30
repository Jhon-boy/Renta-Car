const pool = require('../../config/db');
// const { esquemaRol } = require('../models/rol');



const getRoles = async (req, res, next) => {
    try {
        const consulta = await pool.query('SELECT * FROM "Roles"')
        console.log(consulta);
        res.json(consulta);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getRoles

}
