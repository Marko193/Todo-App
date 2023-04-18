import * as dotenv from 'dotenv';
import express from 'express';
const app = express();

dotenv.config();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Todo-App backend is listening on the port ${port}`)
})