import  express  from "express";
import { processForm, uploadMiddleware ,getdata } from "../controllers/userFrom.js";
const router = express.Router();

router.post('/submit', uploadMiddleware, processForm);
router.get("/club",getdata);
export default router;