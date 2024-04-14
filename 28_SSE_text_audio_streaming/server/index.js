import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import http from 'http';

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get('/api/text', (req,res) => {
    
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });

    const text = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eget nibh tincidunt ut laoreet dolore magna aliquyam erat volutpat ut wisi enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat';
    let i=0;

    const sendText = () => {
        if(i<text.length){
            res.write(`data: ${text.slice(i, i += 1)}\n\n`);
        }
        else{
            clearInterval(interval);
        }
    }

    const interval = setInterval(sendText, 30);
    req.on('close', () => clearInterval(interval));

});



const filePath = path.join(process.cwd(), 'data/audio.mp3');
const chunkSize = 100 * 1024;



app.get('/api/audio', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    let start = 0;
    let end = chunkSize - 1;

    const sendChunk = () => {
        const readStream = fs.createReadStream(filePath, { start, end });
        readStream.pipe(res, { end: false });

        start = end + 1;
        end = start + chunkSize - 1;

        readStream.on('end', () => {
            if (start < fs.statSync(filePath).size) {
                setTimeout(sendChunk, 10000); 
            } else {
                res.end();
            }
        });
    };

    sendChunk();
});



server.listen(5000, () => {
    console.log('Server is running on port 5000');
});