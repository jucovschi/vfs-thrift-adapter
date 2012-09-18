struct option {
  1: string name;
  2: string value;
}

exception IOException {
  1: string msg
}

struct filedescriptor {
  1: string name,
  3: string mime
  2: i64 mtime,
  4: i64 size,
}

service VFS {
  binary readfile(1:string path, 2:list<option> options) throws (1:IOException err)
  list<filedescriptor> readdir(1:string path, 2:list<option> options) throws (1:IOException err)
  filedescriptor stat(1:string path, 2:list<option> options) throws (1:IOException err)
}
