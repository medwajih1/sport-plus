const express = require("express");

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const router = express.Router();

// User
router.post("/", protect, createOrder);

router.get("/my-orders", protect, getMyOrders);

// Admin
router.get("/", protect, admin, getAllOrders);

router.put(
  "/:id/status",
  protect,
  admin,
  updateOrderStatus
);

module.exports = router;