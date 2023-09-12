import express from 'express'
import router from './router';
import cors from 'cors'
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:4000', // Specify the allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed HTTP methods
    credentials: true, // Enable credentials (e.g., cookies, authorization headers)
  }))
app.use(router);
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running in -> ${port}`)
})