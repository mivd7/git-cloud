function giveItBackLater (value, callback) {
  function waitForIt() {
    callback(value)
  }
  setTimeout(waitForIt, 100)
}

function promiseToGiveItBackLater(value) {
}

function addSomePromises() {

}

module.exports.giveItBackLater = giveItBackLater
module.exports.addSomePromises = addSomePromises
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater
