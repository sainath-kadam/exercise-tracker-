const express = require('express');
const connectDB = require('./config/db');

// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


// app.use(cors());

// app.use(express.json());
connectDB();
 
// cors
// app.use(cors({ origin: true, credentials: true }));

// Init Middleware
// app.use(express.json({ extended: false }));
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});




// IZJoZ9wAkExUM8x5
// mongodb+srv://sai:IZJoZ9wAkExUM8x5@cluster0.zbpzjob.mongodb.net/?retryWrites=true&w=majority