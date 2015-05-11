'use strict';

var _ = require('lodash');
var request = require("request");

var url = "http://vest-labs.herokuapp.com/playlist";

// Get list of playlist
var sendRequest = function(callback){
  request({ url: url, json: true}, function (err, res, body) {
    if (callback) callback(err, res, body);
  });
};

exports.index = function(req, res) {
  var n = 0;
  var callback = function(err, response, body){
    n +=1;

    if (!err && response.statusCode === 200) {
      res.json(200, body);
    }
    else{
      if (n < 5){
        sendRequest(callback);
      }
      else{
        res.json(500);
      }
    }
  };

  sendRequest(callback)
};
