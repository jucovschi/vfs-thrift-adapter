//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./api_types');
//HELPER FUNCTIONS AND STRUCTURES

var VFS_readfile_args = function(args) {
  this.path = null;
  this.options = null;
  if (args) {
    if (args.path !== undefined) {
      this.path = args.path;
    }
    if (args.options !== undefined) {
      this.options = args.options;
    }
  }
};
VFS_readfile_args.prototype = {};
VFS_readfile_args.prototype.read = function(input) {
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
        this.path = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.options = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.option();
          elem6.read(input);
          this.options.push(elem6);
        }
        input.readListEnd();
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

VFS_readfile_args.prototype.write = function(output) {
  output.writeStructBegin('VFS_readfile_args');
  if (this.path) {
    output.writeFieldBegin('path', Thrift.Type.STRING, 1);
    output.writeString(this.path);
    output.writeFieldEnd();
  }
  if (this.options) {
    output.writeFieldBegin('options', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.options.length);
    for (var iter7 in this.options)
    {
      if (this.options.hasOwnProperty(iter7))
      {
        iter7 = this.options[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var VFS_readfile_result = function(args) {
  this.success = null;
  this.err = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.err !== undefined) {
      this.err = args.err;
    }
  }
};
VFS_readfile_result.prototype = {};
VFS_readfile_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new ttypes.IOException();
        this.err.read(input);
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

VFS_readfile_result.prototype.write = function(output) {
  output.writeStructBegin('VFS_readfile_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.err) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var VFS_readdir_args = function(args) {
  this.path = null;
  this.options = null;
  if (args) {
    if (args.path !== undefined) {
      this.path = args.path;
    }
    if (args.options !== undefined) {
      this.options = args.options;
    }
  }
};
VFS_readdir_args.prototype = {};
VFS_readdir_args.prototype.read = function(input) {
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
        this.path = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.options = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new ttypes.option();
          elem14.read(input);
          this.options.push(elem14);
        }
        input.readListEnd();
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

VFS_readdir_args.prototype.write = function(output) {
  output.writeStructBegin('VFS_readdir_args');
  if (this.path) {
    output.writeFieldBegin('path', Thrift.Type.STRING, 1);
    output.writeString(this.path);
    output.writeFieldEnd();
  }
  if (this.options) {
    output.writeFieldBegin('options', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.options.length);
    for (var iter15 in this.options)
    {
      if (this.options.hasOwnProperty(iter15))
      {
        iter15 = this.options[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var VFS_readdir_result = function(args) {
  this.success = null;
  this.err = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.err !== undefined) {
      this.err = args.err;
    }
  }
};
VFS_readdir_result.prototype = {};
VFS_readdir_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.success = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.filedescriptor();
          elem22.read(input);
          this.success.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new ttypes.IOException();
        this.err.read(input);
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

VFS_readdir_result.prototype.write = function(output) {
  output.writeStructBegin('VFS_readdir_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter23 in this.success)
    {
      if (this.success.hasOwnProperty(iter23))
      {
        iter23 = this.success[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.err) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var VFS_stat_args = function(args) {
  this.path = null;
  this.options = null;
  if (args) {
    if (args.path !== undefined) {
      this.path = args.path;
    }
    if (args.options !== undefined) {
      this.options = args.options;
    }
  }
};
VFS_stat_args.prototype = {};
VFS_stat_args.prototype.read = function(input) {
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
        this.path = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this.options = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = new ttypes.option();
          elem30.read(input);
          this.options.push(elem30);
        }
        input.readListEnd();
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

VFS_stat_args.prototype.write = function(output) {
  output.writeStructBegin('VFS_stat_args');
  if (this.path) {
    output.writeFieldBegin('path', Thrift.Type.STRING, 1);
    output.writeString(this.path);
    output.writeFieldEnd();
  }
  if (this.options) {
    output.writeFieldBegin('options', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.options.length);
    for (var iter31 in this.options)
    {
      if (this.options.hasOwnProperty(iter31))
      {
        iter31 = this.options[iter31];
        iter31.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var VFS_stat_result = function(args) {
  this.success = null;
  this.err = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.err !== undefined) {
      this.err = args.err;
    }
  }
};
VFS_stat_result.prototype = {};
VFS_stat_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.filedescriptor();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new ttypes.IOException();
        this.err.read(input);
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

VFS_stat_result.prototype.write = function(output) {
  output.writeStructBegin('VFS_stat_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.err) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var VFSClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
VFSClient.prototype = {};
VFSClient.prototype.readfile = function(path, options, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_readfile(path, options);
};

VFSClient.prototype.send_readfile = function(path, options) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('readfile', Thrift.MessageType.CALL, this.seqid);
  var args = new VFS_readfile_args();
  args.path = path;
  args.options = options;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

VFSClient.prototype.recv_readfile = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new VFS_readfile_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('readfile failed: unknown result');
};
VFSClient.prototype.readdir = function(path, options, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_readdir(path, options);
};

VFSClient.prototype.send_readdir = function(path, options) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('readdir', Thrift.MessageType.CALL, this.seqid);
  var args = new VFS_readdir_args();
  args.path = path;
  args.options = options;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

VFSClient.prototype.recv_readdir = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new VFS_readdir_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('readdir failed: unknown result');
};
VFSClient.prototype.stat = function(path, options, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_stat(path, options);
};

VFSClient.prototype.send_stat = function(path, options) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('stat', Thrift.MessageType.CALL, this.seqid);
  var args = new VFS_stat_args();
  args.path = path;
  args.options = options;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

VFSClient.prototype.recv_stat = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new VFS_stat_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('stat failed: unknown result');
};
var VFSProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
VFSProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

VFSProcessor.prototype.process_readfile = function(seqid, input, output) {
  var args = new VFS_readfile_args();
  args.read(input);
  input.readMessageEnd();
  var result = new VFS_readfile_result();
  this._handler.readfile(args.path, args.options, function (success) {
    result.success = success;
    output.writeMessageBegin("readfile", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

VFSProcessor.prototype.process_readdir = function(seqid, input, output) {
  var args = new VFS_readdir_args();
  args.read(input);
  input.readMessageEnd();
  var result = new VFS_readdir_result();
  this._handler.readdir(args.path, args.options, function (success) {
    result.success = success;
    output.writeMessageBegin("readdir", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

VFSProcessor.prototype.process_stat = function(seqid, input, output) {
  var args = new VFS_stat_args();
  args.read(input);
  input.readMessageEnd();
  var result = new VFS_stat_result();
  this._handler.stat(args.path, args.options, function (success) {
    result.success = success;
    output.writeMessageBegin("stat", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

