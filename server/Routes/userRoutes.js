import express from 'express'
import { getUserData, loginUser, registerUser } from '../controllers/userController.js'
import protect from '../middleware/auth.js';
import { changRoleToOwner } from '../controllers/ownerController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data',protect , changRoleToOwner);



export default userRouter;