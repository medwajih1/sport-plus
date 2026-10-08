const express = require("express");

const {
  getUsers,
  getUserById,
  deleteUser,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", protect, admin, getUsers);

router.get("/:id", protect, admin, getUserById);

router.delete("/:id", protect, admin, deleteUser);

module.exports = router;