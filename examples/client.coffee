vfs_adapter = require('..');
vfstypes = require("../gen-nodejs/api_types.js");

client = vfs_adapter.createClient("localhost", 9001);

client.readfile("server.coffee", [], (err, response) ->
    console.log(err, response);
  );
  
client.readdir("/", [], (err, response) ->
    console.log(err, response);
  );
  
client.stat("server.coffee", [], (err, response) ->
    console.log(err, response);
  );

