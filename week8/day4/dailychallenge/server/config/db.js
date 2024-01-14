const { Pool } = require('pg'); // extracting class from 'pg' library, which manages a pool of connections to the postgresql server

const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    database: 'exercises-bc',
    password: 'alaylm013',
    port: 5432
});

// export
module.exports = pool;