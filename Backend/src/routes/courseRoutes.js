import express  from "express";
import { createCourse, getCourse,register,login, postevent, getevent, updateevent } from "../controllers/courseControllers.js";
const router = express.Router();

router.get("/posts", getCourse)
router.post("/createpost", createCourse)
router.get("/post/:id")
router.put("/updatepost/:id")
router.delete("/deletepost/:id")

router.post("/createstudent", register)
router.post("/loginstudent", login)

router.post("/postevent",postevent)
router.post("/getevent",getevent)
router.put("/updateevent/:id",updateevent)

export default router;