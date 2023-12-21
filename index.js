// server.js
import express from 'express';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
import userRoutes from './routes/userFrom.js';
import cors from 'cors';
// import cors from 'cors';
// const port = 3001;
const app = express();

// app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.use('/api', userRoutes);

const connect = () => {
  mongoose
    .connect('mongodb+srv://top10world1210:nZDz3qOulCdMx3U9@cluster0.0hhjmcl.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
};



const port =  3000;

app.listen(port, () => {
  connect();
  console.log(`Server connected and listening on port ${port}`);
});
