const express = require("express");
const router = express.Router();

const {
  getUsersController,
  addUserController,
  getSingleUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/users.controller.js");

router.get("/get-users", getUsersController);
router.get("/:id", getSingleUserController);
router.post("/create-user", addUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

module.exports = router;
