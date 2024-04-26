import express  from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());

//post data
const posts = {};

app.get('/posts', async (req, res) => {
    res.send(posts);
})

app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if(type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if(type === 'CommentCreated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        post.comments.push({ id, content, status });
    }

    console.log(posts);

    res.send({});

})


app.listen(4002, () => {
    console.log('Listening on 4002');
})