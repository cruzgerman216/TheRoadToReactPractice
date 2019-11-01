const blogs = [
  {
    id: "5a451df7571c224a31b5c8ce",
    title: "HTML is easy",
    author: "2a1",
    url: "url1",
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    },
    likes: 0
  },
  {
    id: "5a451e21e0b8b04a45638211",
    title: "title2",
    author: "a2",
    url: "url2",
    likes: 1,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    }
  },
  {
    id: "5a451e30b5ffd44a58fa79ab",
    title: "title3",
    author: "a3",
    url: "url3",
    likes: 1,
    user: {
      _id: "5a437a9e514ab7f168ddf138",
      username: "mluukkai",
      name: "Matti Luukkainen"
    }
  }
];

const getAll = () => {
  return Promise.resolve(blogs);
};

export default { getAll };
