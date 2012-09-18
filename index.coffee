VFS = require("./gen-nodejs/VFS")
tp = require("./gen-nodejs/api_types.js")

thrift = require("thrift");

module.exports = 
  createServer : (vfs, port) ->
    server = thrift.createServer(VFS, {
        readfile : (path, options, success) ->
          vfs.readfile(path, {}, (err, meta) ->
            if (err)
              ex = new tp.IOException()
              ex.msg = "err";
              throw ex
              return
            data = "";
            meta.stream.on("data", (item) ->
              data += item;
              )
            meta.stream.on("end", () ->
              success(data);
              )
          );
        
        readdir : (path, options, success) ->
          vfs.readdir(path, {}, (err, meta) ->
            if (err)
              ex = new tp.IOException()
              ex.msg = "err";
              success(ex)
              return
            data = [];
            meta.stream.on("data", (item) ->
              fd = new tp.filedescriptor()
              fd.name = item.name
              fd.mtime = item.mtime
              fd.mime = item.mime
              fd.size = item.size
              data.push(fd);
              )
            meta.stream.on("end", () ->
              success(data);
              )
          );
        stat : (path, options, success) ->
          vfs.stat(path, {}, (err, meta) ->
            if (err)
              ex = new tp.IOException()
              ex.msg = "err";
              success(ex)
              return
            fd = new tp.filedescriptor()
            fd.name = meta.name
            fd.mtime = meta.mtime
            fd.mime = meta.mime
            fd.size = meta.size
            success(fd)
          );

    });
    server.listen(port);

  createClient : (host, port) ->
    connection = thrift.createConnection(host, port);
    return thrift.createClient(VFS, connection);
