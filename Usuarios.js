const oracledb = require('oracledb');

module.exports = readUsuario = async () => {
  let connection;
  try {

    connection = await oracledb.getConnection({ user: "admin", password: "admin", connectionString: "localhost/xepdb1" });

    const result = await connection.execute('select U.id, U.nombres, U.apellidos from usuarios u'
    ,[],
    { outFormat: oracledb.OUT_FORMAT_OBJECT })
    return(result.rows);

  } catch (err) {
    return(err);
  }
}