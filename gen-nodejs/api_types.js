//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
var option = module.exports.option = function(args) {
  this.name = null;
  this.value = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.value !== undefined) {
      this.value = args.value;
    }
  }
};
option.prototype = {};
option.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

option.prototype.write = function(output) {
  output.writeStructBegin('option');
  if (this.name) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.value) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 2);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IOException = module.exports.IOException = function(args) {
  Thrift.TException.call(this, "IOException")
  this.name = "IOException"
  this.msg = null;
  if (args) {
    if (args.msg !== undefined) {
      this.msg = args.msg;
    }
  }
};
Thrift.inherits(IOException, Thrift.TException);
IOException.prototype.name = 'IOException';
IOException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.msg = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IOException.prototype.write = function(output) {
  output.writeStructBegin('IOException');
  if (this.msg) {
    output.writeFieldBegin('msg', Thrift.Type.STRING, 1);
    output.writeString(this.msg);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var filedescriptor = module.exports.filedescriptor = function(args) {
  this.name = null;
  this.mime = null;
  this.mtime = null;
  this.size = null;
  if (args) {
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.mime !== undefined) {
      this.mime = args.mime;
    }
    if (args.mtime !== undefined) {
      this.mtime = args.mtime;
    }
    if (args.size !== undefined) {
      this.size = args.size;
    }
  }
};
filedescriptor.prototype = {};
filedescriptor.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.mime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.mtime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.size = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

filedescriptor.prototype.write = function(output) {
  output.writeStructBegin('filedescriptor');
  if (this.name) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.mime) {
    output.writeFieldBegin('mime', Thrift.Type.STRING, 3);
    output.writeString(this.mime);
    output.writeFieldEnd();
  }
  if (this.mtime) {
    output.writeFieldBegin('mtime', Thrift.Type.I64, 2);
    output.writeI64(this.mtime);
    output.writeFieldEnd();
  }
  if (this.size) {
    output.writeFieldBegin('size', Thrift.Type.I64, 4);
    output.writeI64(this.size);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

