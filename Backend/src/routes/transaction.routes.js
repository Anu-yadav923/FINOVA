const express = require("express");
const transactionController = require("../controllers/transaction.controllers");
const router = express.Router();

router.get("/:id",transactionController.getTransactionController);
router.get("/:accountId/transactions", transactionController.getTransactionsByAccountController);

module.exports = router;

