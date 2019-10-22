const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  var getlikes = 0;
  for (let i = 0; i < blogs.length; i++) {
    getlikes += blogs[i].likes;
  }
  return getlikes;
};

const favoriteBlog = blogs => {
  var getlikes = 0;
  var getobjects = {};
  for (let i = 0; i < blogs.length; i++) {
    if (getlikes < blogs[i].likes) {
      getlikes = blogs[i].likes;
      getobjects.title = blogs[i].title;
      getobjects.author = blogs[i].author;
      getobjects.likes = blogs[i].likes;
    } else if (getlikes == blogs[i].likes) {
      getobjects.title = blogs[i].title;
      getobjects.author = blogs[i].author;
      getobjects.likes = blogs[i].likes;
    }
  }
  return getobjects;
};

const mostBlogs = blogs => {
  var authorarray = [];
  //make a for loop, iterate each blog post,
  //if a blog post is not the
  for (let i = 0; i < blogs.length; i++) {
    if (authorarray.length == 0) {
      authorarray = [{ author: blogs[i]["author"], blogs: 1 }];
    } else {
      var on = true;

      for (let j = 0; j < authorarray.length; j++) {
        if (authorarray[j]["author"] == blogs[i]["author"]) {
          authorarray[j]["blogs"] += 1;
          on = false;
          j = authorarray.length;
        }
      }
      if (on) {
        authorarray = [
          ...authorarray,
          { author: blogs[i]["author"], blogs: 1 }
        ];
      }
    }
  }
  let getauthor = {};
  for (let i = 0; i < authorarray.length; i++) {
    if (i == 0) {
      getauthor = authorarray[i];
    } else {
      if (getauthor.blogs < authorarray[i]["blogs"]) {
        getauthor = authorarray[i];
      }
    }
  }
  return getauthor;
};

const mostLikes = blogs => {
  var getblog = {};
  var mostlikes = 0;
  for (let i = 0; i < blogs.length; i++) {
    if (mostlikes < blogs[i]["likes"]) {
      mostlikes = blogs[i]["likes"];
      getblog.author = blogs[i]["author"];
      getblog.likes = blogs[i]["likes"];
    }
  }
  console.log(getblog);
  return getblog;
};
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};
