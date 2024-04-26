import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/events', async (req, res) => {
    const event = req.body;
    try {
        await axios.post('http://localhost:4000/events', event) //post server
    } catch (error) {
        console.log('posts',error.message);
    }
    try {
        await axios.post('http://localhost:4001/events', event) // comments server
    } catch (error) {
        console.log('comments',error.message);
    }
    try {
        await axios.post('http://localhost:4002/events', event) // query server
    } catch (error) {
        console.log('query server',error.message);        
    }

    res.send({ status: 'OK' });
})
app.listen(4005, () => {
    console.log('Server started on port 4005');
})
