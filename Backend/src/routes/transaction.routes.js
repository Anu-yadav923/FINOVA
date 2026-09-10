const express = require("express");
const transactionController = require("../controllers/transaction.controllers");
const {filterSchema} = require("../validators/transfer.validator");
const {validateQuery} = require("../middleware/transfer.validation");

const router = express.Router();

router.get("/:id",transactionController.getTransactionController);
router.get("/:accountId/transactions",validateQuery(filterSchema), transactionController.getTransactionsByAccountController);

module.exports = router;

