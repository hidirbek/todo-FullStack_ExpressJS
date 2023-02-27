const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const { read_file, write_file } = require("../fs/fs_api");
let userData = read_file("jwt.json");

let Todo = {
  GET: (req, res) => {
    let { id } = userData[0];
    let todos = read_file("todos.json").filter((user) => user.user_id === id);
    res.status(200).json(todos);
  },

  CREATE: async (req, res) => {
    try {
      let { id } = userData[0];
      let todos = read_file("todos.json");

      todos.push({
        id: uuid.v4(),
        user_id: id,
        ...req.body,
      });

      write_file("todos.json", todos);

      res.status(201).send({
        msg: "Created Course!",
      });
    } catch (error) {
      res.send(error.message);
    }
  },

  UPDATE: (req, res) => {
    let todos = read_file("todos.json");

    const { title, price, author } = req.body;

    todos.forEach((course) => {
      if (course.id === req.params.id) {
        course.title = title ? title : course.title;
        course.price = price ? price : course.price;
        course.author = author ? author : course.author;
      }
    });

    write_file("todos.json", todos);

    res.status(200).send({
      msg: "Updated course!",
    });
  },

  DELETE: (req, res) => {
    let todos = read_file("todos.json");

    const { title, price, author } = req.body;

    todos.forEach((course, idx) => {
      if (course.id === req.params.id) {
        todos.splice(idx, 1);
      }
    });

    write_file("todos.json", todos);

    res.status(200).send({
      msg: "Deleted course!",
    });
  },
};

module.exports = Todo;
