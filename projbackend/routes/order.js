var express = require("express");
var router = express.Router();
const { signout, signup, signin, isSignedIn, getOrders, getUserOrders, addOrders, updateOrders, removeOrders, searchOrders } = require("../controllers/order");


router.get("/", getOrders)
router.get("/view/:id", getUserOrders);
router.post("/user/add", addOrders);
router.put("/update/:id", updateOrders);
router.delete("/delete/:id", removeOrders);
router.post("/search",searchOrders)


module.exports = router;