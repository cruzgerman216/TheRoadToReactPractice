const app = require("./app"); // the actual Express app
const http = require("http");
const config = require("./utils/config");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});

// const http = require("http");
// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const blogSchema = mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number
// });

// const Blog = mongoose.model("Blog", blogSchema);

// const mongoUrl =
//   "mongodb+srv://username:1234user@cluster0-e5wvr.mongodb.net/test?retryWrites=true&w=majority";
// mongoose
//   .connect(mongoUrl, { useNewUrlParser: true })
//   .catch(error => console.log("error"));

// app.use(cors());
// app.use(bodyParser.json());

// app.get("/api/blogs", (request, response) => {
//   Blog.find({}).then(blogs => {
//     response.json(blogs);
//   });
// });

// app.post("/api/blogs", (request, response) => {
//   const blog = new Blog(request.body);

//   blog
//     .save()
//     .then(result => {
//       response.status(201).json(result);
//     })
//     .catch(error => console.log(error));
// });

// const PORT = 3003;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
