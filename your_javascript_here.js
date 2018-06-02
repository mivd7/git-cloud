// Variables
let hero = {
  name: 'Supermax',
  heroic: true,
  inventory: ['a','b'],
  health: 100
}

hero.weapon = {
  type: 'AK-47',
  damage: 100
}

console.log(hero)

let creature = {}

function rest(creature) {
    console.log(arguments)
    creature.health = 10
    return creature
  }

rest(creature);

let item = ['a']

function pickUpItem(creature, item) {
    console.log(arguments)
    let newItem = item.push('mes', 'hamer')
    creature.inventory = item
    return creature
}

pickUpItem(creature, item)
console.log(creature)

let attacker = {
  weaponDamage: 5
}

let defender = {
  health: 10
}

function dealDamage(attacker, defender) {
      console.log(arguments)
      defender.health -= attacker.valueOf(weaponDamage)
      return defender
}

dealDamage(attacker, defender)
console.log(defender)
