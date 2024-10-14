// backend/routes/auth.js
import { Router } from 'express';
const router = Router();
import { signUpUser, loginUser } from '../controllers/authController';

router.post('/signup', signUpUser);
router.post('/login', loginUser);

export default router;
