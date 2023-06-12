import { Router } from 'express';
import { galleryController } from '../controllers/galleryController.js';
import uploadMiddleware from '../middlewares/uploadMiddleware.js';

const galleryRouter = Router();

galleryRouter.post('/gallery', uploadMiddleware, galleryController);

//get gallery

//update gallery

//delete gallery

export { galleryRouter };

