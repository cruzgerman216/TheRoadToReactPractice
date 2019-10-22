const Blog = require("../models/blog");
const User = require("../models/user");
const initialBlogs = [
  {
    title: "blog 1",
    author: "It's a mario",
    url: "www.mario.com",
    likes: 0,
    id: "5d5b0d9713c0d73b20d92172"
  },
  {
    title: "blog 2",
    author: "String",
    url: "String",
    likes: 3,
    id: "5d5b19930efbb624501ac820"
  },
  {
    title: "Grapes of Wrath",
    author: "john steinbeck",
    url: "GOW.com",
    likes: 4,
    id: "5d727e3473c49d2294ea9cb2"
  },
  {
    title: "Grapes of Wrath",
    author: "john steinbeck",
    url: "GOW.com",
    likes: 4,
    id: "5d8957b8b28a1a1c7c1bc525"
  }
];
const nonExistingLikes = async () => {
  const blog = new Blog({ author: "test", url: "test", title: "adfsdfsdfd" });
  blog.likes = 0;
  await blog.save();
  await blog.remove();
  return blog;
};

const blogsinDB = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};
const usersInDb = async () => {
  const users = await User.find({});
  return users.map(u => u.toJSON());
};
module.exports = { nonExistingLikes, initialBlogs, blogsinDB, usersInDb };
