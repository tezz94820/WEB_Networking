import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { randomBytes } from 'crypto';

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id,
        title
    };

    try {
        await axios.post('http://localhost:4005/events', {
            type: 'PostCreated',
            data: {
                id,
                title
            }
        });
    } catch (error) {
        console.log(error.message);
    }

    res.status(201).send(posts[id]);
});


app.listen(4000, () => {
    console.log('Server started on port 4000');
})