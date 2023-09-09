import express from "express";
import images from './data/images.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
dotenv.config();

const port = process.env.PORT || 5000;
connectDB()
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.get('/api/images', (req, res) => {
    res.json(images)
});
app.get('/api/images/:id', (req, res) => {
    const image = images.find((img) => img._id === req.params.id);
    res.json(image)
})


app.listen(port, () => console.log(`Server is running on port ${port}`));