// file for defining methods that will interact w/ the users tbl
// import 
const pool = require('../config/db');

class userModel {  // methods that will interact w/ the db
    async getAllUsers() {
        const query = 'SELECT * FROM users'; // SQL query string
        const result = await pool.query(query);
        return result.rows;
    }

    async getUserById(id) {
        const query = 'SELECT * FROM users WHERE id = $1'; // $1 = placeholder
        const result = await pool.query(query, [id]);  // pool.query = sends the sql query to postgres through pool
        return result.rows[0]; // "return 1st el of array"
    }
    
    async updateUserById(id, userData) {
        const { email, username, first_name, last_name } = userData;
        const query = 'UPDATE users SET email=$1, username=$2, first_name=$3, last_name=$4 WHERE id=$5 RETURNING *'; 
        const result = await pool.query(query, [email, username, first_name, last_name, id]);
        return result.rows[0];
    }

    async addUser(email, username, first_name, last_name, hashedPassword) {
        const query = 'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await pool.query(query, [email, username, first_name, last_name]);
        
        const userId = result.rows[0].id;

        const hashQuery = 'INSERT INTO hashpwd (username, password) VALUES ($1, $2) RETURNING *';
        pool.query(hashQuery, [username, hashedPassword]);

        return userId;
    }
}

// export
module.exports = new userModel();
