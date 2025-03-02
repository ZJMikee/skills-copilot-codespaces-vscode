// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Get comments
app.get('/api/comments', function(req, res) {
  fs.readFile(commentsPath, function(err, data) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    res.json(comments);
  });
});

// Add comment
app.post('/api/comments', function(req, res) {
  fs.readFile(commentsPath, function(err, data) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),