vfs_thrift = require("../index.coffee");
vfs_local = require("vfs-local")({root: __dirname});

vfs_thrift.createServer(vfs_local, 9001);