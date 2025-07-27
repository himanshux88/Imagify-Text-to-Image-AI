import express from "express";
import {
  login,
  paymentRazorpay,
  register,
  userCredits,
  verifyRazorpay,
} from "../controllers/userController.js";
import { userAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/credits", userAuth, userCredits);
router.post("/payment", userAuth, paymentRazorpay);
router.post("/verify", userAuth, verifyRazorpay);

export default router;
