import express, { urlencoded } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import router from './src/routers/index.js';
import cronTask from './src/cron/scheduledTask.js';

// dotenv
config();

const PORT = process.env.PORT || 5000;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// db
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected successfully'))
  .catch((err) => {
    console.log('DB CONNECTION ERROR', err);
  });

// server
const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

// commented for the demo
// cronTask;

app.use('/api', router);
// if you hit the route that doesn't exist
app.all('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
