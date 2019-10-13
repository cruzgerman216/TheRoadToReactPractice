const initState = {
  posts: [
    {
      id: "1",
      title: "title 1",
      body:
        "aaaaaaaaaasdfsdfasdfasdfsdfsdfaaaaaaaaaasdfsdfasdfasdfsdfsdfaaaaaaaaaasdfsdfasdfasdfsdfsdf"
    },
    {
      id: "2",
      title: "title 2",
      body:
        "aaaaaaaaaasdfsdfasdfasdfsdfsdfaaaaaaaaaasdfsdfasdfasdfsdfsdfaaaaaaaaaasdfsdfasdfasdfsdfsdf"
    },
    {
      id: "3",
      title: "title 3",
      body:
        "aaaaaaaaaasdfsdfasdfasdfsdfsdfaaaaaaaaaasdfsdfasdfasdfsdfsdfaaaaaaaaaasdfsdfasdfasdfsdfsdf"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
