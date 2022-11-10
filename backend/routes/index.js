import express from "express";
 
import { 
    getUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/User.js";
 
import { 
    getKost,
    createKost,
    getKostById,
    updateKost,
    deleteKost
} from "../controllers/Kost.js";

const router = express.Router();

//User
router.get('/user', getUser);
router.get('/user/:id', getUserById);
router.post('/user/add', createUser);
router.patch('/user/update/:id', updateUser);
router.delete('/user/delete/:id', deleteUser);

//Kost
router.get('/kost', getKost);
router.get('/kost/:id', getKostById);
router.post('/kost/add', createKost);
router.patch('/kost/update/:id', updateKost);
router.delete('/kost/delete/:id', deleteKost);
 
export default router;