import express from "express";

// imports de módulos para validaciones
import { verifyToken } from "../Utils/Middleware/index.js";

// Módulos controladores importados
import { SingIn } from "../Controllers/signin.js";
import { SingUp } from "../Controllers/signup.js";
import { displayHome } from "../Controllers/displayHome.js";
import { getUserById, getUsers} from "../Controllers/getUsers.js";
import { updateUser } from "../Controllers/updateUser.js";
import { deleteUser } from "../Controllers/deleteUser.js";
import { createUser } from "../Controllers/createUser.js";

import { getCustomers } from "../Controllers/getCustomers.js";
import { createSale } from "../Controllers/createSale.js";
import { getSales } from "../Controllers/getSales.js";
import { searchCustomer } from "../Controllers/searchCustomer.js";
import { getSalesReport } from "../Controllers/getSalesReport.js";





// creación del enrutador 
const router = express.Router();

// Routes
router.get("/", displayHome);
router.post("/signin", SingIn);
router.post("/signup", SingUp);
router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);
router.put("/users/:id", verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);
router.post("/users", verifyToken, createUser);

router.get("/customers", getCustomers);
router.post("/sales", createSale);
router.get("/sales", getSales);
router.get("/customers/search", searchCustomer);
router.get("/sales/report", getSalesReport);

export default router;