const pool = require("../config/database");

const findAccountByUserId = async(userId) => {
    const result = await pool.query(
        "SELECT * FROM accounts WHERE id = $1",
        [userId]
    );

    return result.rows[0];

};

module.exports = {
    findAccountByUserId
};