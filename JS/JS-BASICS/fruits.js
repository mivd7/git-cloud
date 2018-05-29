fruits = ['apples ', 'oranges ', 'pears ', 'apricots ']

let i = 0
let length = fruits.length
let result = ""

for(; i < length;) {
  result += 'I love ' + `${fruits[i]}`
  i++
}

console.log(result)
