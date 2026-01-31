import express from 'express';
import protect from '../middleware/auth.js';
import { changRoleToOwner } from '../controllers/ownerController.js';

const ownerRouter = express.Router()

ownerRouter.post('/change-role', protect, changRoleToOwner);


export default ownerRouter;