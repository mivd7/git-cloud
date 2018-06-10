function giveItBackLater (value, callback) {
  function waitForIt() {
    callback(value)
  }
  setTimeout(waitForIt, 100)
}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve) => {
    giveItBackLater(value, resolve)
  })
}

function addSomePromises(somePromise) {
  return somePromise
    .then(value => value.repeat(2), error => error.repeat(3))
}

module.exports.giveItBackLater = giveItBackLater
module.exports.addSomePromises = addSomePromises
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater
