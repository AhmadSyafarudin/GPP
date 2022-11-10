import express from "express";
 
import { getUsers, Register, Login, Logout } from "../controllers/User.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
 
import { 
    getKost,
    createKost,
    getKostById,
    updateKost,
    deleteKost
} from "../controllers/Kost.js";

const router = express.Router();

//User
router.get('/user', verifyToken, getUsers);
router.post('/user/register', Register);
router.post('/user/login', Login);
router.get('/user/token', refreshToken);
router.delete('/user/logout', Logout);

//Kost
router.get('/kost', getKost);
router.get('/kost/:id', getKostById);
router.post('/kost/add', createKost);
router.patch('/kost/update/:id', updateKost);
router.delete('/kost/delete/:id', deleteKost);
 
export default router;