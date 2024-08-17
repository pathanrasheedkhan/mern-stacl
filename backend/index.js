import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js'
import userRoute from  './routes/user.routes.js';
import companyRoute from  './routes/company.route.js';
import jobRoute from  './routes/job.route.js';
import applicationRoute from  './routes/application.route.js';



dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const  corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent
}


app.use(cors(corsOptions));

const PORT = process.env.PORT||3000;

app.use( "/user", userRoute);
app.use("/company",companyRoute);
app.use("/job", jobRoute);
app.use("/application", applicationRoute);



app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})


