function pathFind(path, object) {
    if (path.length < 1) {
      return object
  } else {
      return pathFind(path.slice(1), object[path[0]])
  }
}

pathFind(["foo", "bar", "foobar"], {foo: "bar"})

module.exports.pathFind = pathFind
