import  express  from "express";
import cors from "cors";
import morgan from "morgan";    
import bodyParser from "body-parser";   
import dotenv from "dotenv";
import helmet from "helmet";
import dashboardRoutes from "./routes/dashboardRoutes";


// routes import

// config
const app = express();
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}))

// ROUTES 
app.use('/dashboard' , dashboardRoutes )

//Server
const port = process.env.PORT || 3001;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})