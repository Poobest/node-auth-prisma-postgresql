const express = require("express");
const productController = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/products", verifyToken, productController.createProduct);
router.get("/products", verifyToken, productController.getProducts);
router.get("/products/:id", verifyToken, productController.getProductById);
router.put("/products/:id", verifyToken, productController.editProduct);
router.delete("/products/:id", verifyToken, productController.deleteProduct);
// Implement other routes similarly

module.exports = router;
