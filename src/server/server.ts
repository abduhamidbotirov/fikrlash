// import "../db/mongo.js";
// import "../db/localMongo.js";
// import "../db/globalMongo.js";
// .env faylidan o'qib oladi
import "../db/localSequelize.js";
import "../models/associations/index.js"
import express, { Application, Request, Response } from "express";
import cors from "cors";
import indexRouter from "../models/index.routes.js";
import errorMiddleware from "../middleware/errorHandler.js";
import fileUpload from "express-fileupload";
import http from "http";
import workModel from '../models/Post/model.scheme.js';
import workModelComment from '../models/PostComment/model.scheme.js';
import PostComment from '../models/PostComment/model.scheme.js';

const app: Application = express();
const server = http.createServer(app);
import { Server } from "socket.io";
import { IPostComment } from "../models/PostComment/model.interface.js";
const PORT: number = Number(process.env.PORT) || 5000;




app.use(cors());

app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${process.cwd()}/src/public`));
app.use("/api", indexRouter);

// app.get("/api", async (req: Request, res: Response) => {
//   try {
//     res.status(200).json({
//       success: true,
//       message: "Welcome to the Jop API.",
//       postmen: "https://documenter.getpostman.com/view/24139682/2s93si1pwE",
//     });
//   } catch (error: unknown) {
//     res.status(500).json({ success: false, error: (error as Error).message });
//   }
// });

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
  // 
  // Add this to see incoming chat messages
  socket.on("postComment", async (id) => {
    try {
      const postId = Number(id);
      const post = await workModel.findByPk(postId, {
        include: [{ model: PostComment }],
      });
      io.emit("postComment", { id: socket.id, post });
    } catch (error: any) {
      io.emit("postCommentError", { id: socket.id, error });
    }
  });
  socket.on("postCommentData", async (data) => {
    try {
      const { post_id, content }: IPostComment = data;
      const createPost = await workModelComment.create({ post_id, content });
      const postId = Number(post_id);
      const post = await workModel.findByPk(postId, {
        include: [{ model: PostComment }],
      });
      io.emit("postCommentData", { id: socket.id, post });
    } catch (error: any) {
      io.emit("postCommentError", { id: socket.id, error });
    }
  });
});
app.use(errorMiddleware);

server.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
