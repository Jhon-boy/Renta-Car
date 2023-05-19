const pool = require('../../config/db');
// const { esquemaRol } = require('../models/rol');



const getRoles = async (req, res) => {
    try {
        const consulta = await pool.query('SELECT * FROM "Roles"')
        console.log(consulta);
        res.json(consulta);
    } catch (error) {
        console.log('No se ejecuto'+ error.message);
    }
}


module.exports = {
    getRoles

}