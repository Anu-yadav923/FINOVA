const pool = require("../config/database");

const findAccountByUserId = async(userId) => {
    const result = await pool.query(
        "SELECT * FROM accounts WHERE id = $1",
        [userId]
    );

    return result.rows[0];

};

const updateBalance = async(client,lockAccountInOrder, amountPaise) =>{
    const query = ` UPDATE accounts 
                    SET balance_paise = balance_paise + $1;
                    WHERE id = $2                
    `;
    const result = await client.query(
        query,
        [lockAccountInOrder, amountPaise]
    );

    return result.rows[0] || null;
}

module.exports = {
    findAccountByUserId,
    updateBalance
};