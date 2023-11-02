// Create web server
// 1. Create web server
// 2. Connect to database
// 3. Create schema
// 4. Create model
// 5. Create routes
// 6. Create views

// Import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./models/comment');

// Create web server
var app = express();

// Connect to database
mongoose.connect('mongodb://localhost/comment');

// Create schema
// var commentSchema = mongoose.Schema({
//   name: String,
//   comment: String
// });

// Create model
// var Comment = mongoose.model('Comment', commentSchema);

// Create routes
app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/comments', function(req, res){
  Comment.find(function(err, comments){
    if(err) return console.error(err);
    res.json(comments);
  });
});

app.post('/comments', function(req, res){
  var comment = new Comment({
    name: req.body.name,
    comment: req.body.comment
  });
  comment.save(function(err, comment){
    if(err) return console.error(err);
    res.json(comment);
  });
});

app.listen(3000, function(){
  console.log('Server is running');
});