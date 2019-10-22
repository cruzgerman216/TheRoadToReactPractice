const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const helper = require("./test_helper");
const api = supertest(app);
const User = require("../models/user");
const Blog = require("../models/blog");

describe("when there is initially one user at db", () => {
  beforeEach(async () => {
    await User.deleteMany({});
    const user = new User({ username: "root", password: "sekret" });
    await user.save();
  });
  test("creation succeeds with a fresh username", async () => {
    const usersAtStart = await helper.usersInDb();
    const newUser = {
      username: "hehe",
      name: "Matti Luukkainen",
      password: "salainen"
    };
    await api
      .post("/api/users")
      .send(newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    //expect(result.body.error).toContain("`username` to be unique");
    // const usersAtEnd = await helper.usersInDb();
    // expect(usersAtEnd.length).toBe(usersAtStart.length);
  });
});
afterAll(() => {
  mongoose.connection.close();
});
