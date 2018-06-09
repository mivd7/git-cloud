function pathFind(path, object) {
  const newPath = path
  const newObject = object

  const objectToArray = Object.values(newObject)
  console.log(objectToArray[0])
  return objectToArray[0]
}

pathFind(["foo"], { foo: "bar" })

module.exports.pathFind = pathFind
