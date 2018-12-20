const express = require('express');

const server = express();

const userRouter = express.Router();
userRouter.get('/1.html', function (req, res) {
  res.send('user1');
});
userRouter.get('/2.html', function (req, res) {
  res.send('user2');
});
server.use('/user', userRouter);

const itemRouter = express.Router();
itemRouter.get('/22.html', function (req, res) {
  res.send('item 22');
});
itemRouter.get('/23.html', function (req, res) {
  res.send('item 23');
});
server.use('/item', itemRouter);

server.listen(8080);
