const express = require('express');
const mysql = require('mysql');
// 连接池
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blogng'
});

module.exports = function () {
  const router = express.Router();

  router.get('/get_banners', (req, res) => {
    db.query('SELECT * FROM banner_table', (err, data) => {
      if (err) {
        res.status(500).send('database error').end();
      } else {
        res.send(data).end();
      }
    });
  });

  router.get('/get_evaluations', (req, res) => {
    db.query('SELECT * FROM custom_evaluation_table', (err, data) => {
      if (err) {
        res.status(500).send('database error').end();
      } else {
        res.send(data).end();
      }
    });
  });

  return router;
};
