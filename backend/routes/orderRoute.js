import express from "express";
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js";
import {placeOrder,placeOrderRazopay,placeOrderStripe,allOrders,userOrders,updateStatus, verifyStripe, verifyRazorpay} from "../controllers/orderController.js";

//Admin features
const orderRouter=express.Router();
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus);

//Payment features

orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazopay);

// User features

orderRouter.post('/userorders',authUser,userOrders);
//Verify Payment
orderRouter.post('/verifyStripe',authUser,verifyStripe);
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay);
export default orderRouter;