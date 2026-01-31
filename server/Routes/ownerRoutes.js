import express from 'express';
import protect from '../middleware/auth.js';
import { addCar, changRoleToOwner, deleteCar, getDashboardData, getOwnerCars, toggleCarAvailability } from '../controllers/ownerController.js';
import upload from '../middleware/multer.js';

const ownerRouter = express.Router()

ownerRouter.post('/change-role', protect, changRoleToOwner);
ownerRouter.post('/add-car', upload.single('image') ,protect, addCar);
ownerRouter.get('/cars' ,protect, getOwnerCars);
ownerRouter.post('/delete-car',protect, deleteCar);
ownerRouter.post('/toggle-car',protect, toggleCarAvailability);
ownerRouter.get('/dashboard',protect, getDashboardData);


export default ownerRouter;