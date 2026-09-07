const express = require("express");
const transactionController = require("../controllers/transaction.controllers");
const router = express.Router();

router.get("/:id",transactionController.getTransactionController);

module.exports = router;