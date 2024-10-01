import express from 'express';
import { Server } from 'socket.io';
import { createServer} from 'node:http';


const app = express()
const server = createServer(app)

const io = new Server(server)

io.on('connection', ()=>{
    console.log('connection are establish')
})


server.listen(4000, ()=>{
    console.log("server are runing on port 4000")
})


