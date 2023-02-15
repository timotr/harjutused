import express from 'express';
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded());

const tasks = [];
const users = [];

app.get('/tasks', (req, res) => {
  res.send(tasks);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});