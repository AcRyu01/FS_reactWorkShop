import { createServer } from 'http';
import { Server, Socket } from "socket.io";
import {ClientToServerEvents, ServerToClientEvents,
        InterServerEvents,SocketData} from './socketIO.model'  


const httpServer = createServer();
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket : Socket) => {
  socket.on("emit", (data) => {
    socket.broadcast.emit("message", { ...data });
  });
});

httpServer.on('error', (e) => {
  console.log(`ERROR: ${e}`)
});

httpServer.listen(8080, () => {
  console.log("server is listening to port 8080")
});