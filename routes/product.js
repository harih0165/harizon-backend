const express = require("express")
const { productId, getProduct } = require("../controlers/productControler")
const router = express.Router()

router.route("/product").get(getProduct)
router.route("/product/:id").get(productId)

module.exports = router