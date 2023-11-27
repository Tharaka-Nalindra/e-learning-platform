import  express  from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./config/db.js";
import Course from "./model/courseModel.js";
import courseRoutes from './routes/courseRoutes.js'

dotenv.config();
connectDB()

const PORT = 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", courseRoutes)

app.get("/", (req,res)=>{
    res.send("<h1>hello world</h1>")
})

//create course




app.listen(PORT,() => console.log("server started"))