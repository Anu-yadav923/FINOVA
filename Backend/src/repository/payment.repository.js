const createPaymentOrder = async (client, {
    orderId,
    userId,
    accountId,
    amountPaise,
    gatewayOderId 

}) => {
    const result = await client.query(`
        INSERT INTO payment_orders (order_id, user_id, accountId, amount_paise, currency, status, gateway_order_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        ` [orderId, userId, accountId, amountPaise, 'INR', 'PENDING', gatewayOderId]);

        return result.rows[0];
        
};


const findPaymentOrderByGatewayOrderId = async (client, gatewayOrderId) => {
    const result = await client.query(`
            SELECT * FROM payment_orders WHERE gateway_order_id = $1
            
        `, [gatewayOrderId]);

        return result.rows[0] || null;
};

module.exports = {
    createPaymentOrder,
    findPaymentOrderByGatewayOrderId
};