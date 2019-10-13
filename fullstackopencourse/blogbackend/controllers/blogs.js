const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });

  response.json(blogs.map(blog => blog.toJSON()));
});

const getTokenFrom = request => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

blogsRouter.post("/", async (request, response) => {
  console.log("retqst tokenm", request.token);
  //  const token = getTokenFrom(request);
  try {
    console.log("retqst tokenm", request.token);
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    console.log("token", decodedToken);

    if (!request.token || !decodedToken.userId) {
      return response.status(401).json({ error: "token missing or invalid" });
    }
    const body = request.body;
    const user = await User.findById(body.userId);

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id
    });
    const saveBlog = await blog.save();
    user.blogs = user.blogs.concat(saveBlog._id);
    await user.save();
    response.json(saveBlog.toJSON());
  } catch (exception) {
    console.log(exception);
  }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  try {
    console.log(request.token);
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    console.log("ths is decode", decodedToken);
    const blog = await Blog.findById(request.params.id);
    console.log("this is blog idd", blog);
    console.log("decodedtoken.id", decodedToken.id);
    if (blog.user && blog.user.toString() === decodedToken.id) {
      await Blog.findByIdAndRemove(request.params.id);

      return response.status(204).end();
    } else {
      console.log("did not happen");
    }

    return response
      .status(401)
      .send({ error: "Only the creator can delete the post" });
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.get("/:id", async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id);
    if (blog) {
      response.json(blog.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  };

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updateBlog => {
      response.json(updateBlog.toJSON());
    })
    .catch(error => next(error));
});
module.exports = blogsRouter;
