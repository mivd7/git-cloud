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

function addSomePromises(somePromise){
  
}

module.exports.giveItBackLater = giveItBackLater
module.exports.addSomePromises = addSomePromises
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater
