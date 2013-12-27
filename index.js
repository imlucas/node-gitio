"use strict";

var request = require('request');

module.exports = function(url, code, callback){
  if(typeof code === 'function'){
    callback = code;
    code = null;
  }

  var opts = {url: 'http://git.io/create', method: 'post', form: {'url': url}};
  if(code) opts.form.code = code;

  request(opts, function(err, res, body){
    if (err) return callback(err);

    if (res.statusCode < 300 && res.statusCode >= 200) {
      return callback(null, 'http://git.io/' + body);
    }
    callback(new Error('Git.io ' + res.headers.status));
  });
};
