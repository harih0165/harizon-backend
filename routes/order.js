const express = require("express")
const { singleOrder } = require("../controlers/orderController")

const router = express.Router()
router.route("/order").post(singleOrder)

module.exports = router