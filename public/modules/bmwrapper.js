
var request = require('request');


module.exports = {

  /*data = {
    accesstoken: <accesstoken>,
    url: <url>
  }*/
    
    getData: function( data, callback ){
      request({
        headers: {
          'Authorization': data.accesstoken,
          'Content-Type': 'application/json;charset=utf-8'
          },
        uri: data.url,
        method: 'GET'
      }, function (err, res, body) {
             if( err ) callback(err);
             //console.log( 'data body: ' + body );
             callback( null, body);
        });  
    },


    login: function( username, password, callback ){
        request({
            headers: {
                          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                          'Accept': 'application/json;charset=utf-8',
                          'Authorization': 'Basic Y2Y6',
                          'Access-Control-Allow-Origin': '*',
                          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
                          'Access-Control-Max-Age': '1000',
                          'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token',
                          'Access-Control-Allow-Credentials': 'true'
              },
            uri: 'https://login.ng.bluemix.net/UAALoginServerWAR/oauth/token',
            method: 'POST',
            body: 'grant_type=password&username=' + username + '&password=' + password
          }, function (err, res, body) {
              if( err ) callback(err);
              //console.log( 'body: ' + body);
              callback( null, body);
            });  
   }  

};



