import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { randomBytes } from 'crypto';

const app = express();
app.use(cors());
app.use(express.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
});

app.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;

    try {
        await axios.post('http://localhost:4005/events', {
            type:"CommentCreated",
            data: {
                id: commentId,
                content,
                postId: req.params.id
            }
        })
    } catch (error) {
        console.log(error.message);
    }

    res.status(201).send(comments);
});


app.listen(4001, () => {
    console.log('Server started on port 4001');
})