// Variables
let hero = {
  name: 'Supermax',
  heroic: true,
  inventory: ['a','b'],
  health: 100
}

hero.weapon = {
  type: 'AK-47',
  damage: 10
}

console.log(hero)

let creature = {
    heroic: true,
    health: 10
}

creature.weapon = {}

function rest(creature) {
    console.log(arguments)
    creature.health = 10
    return creature
  }

rest(creature);

let item = ['clothes']

function pickUpItem(creature, item) {
    console.log(arguments)
    let newItem = item.push('mes', 'hamer')
    creature.inventory = item
    return creature
}

console.log(item)
pickUpItem(creature, item)
console.log(creature)

let defender = {
  health: 10
}

let attacker = {
  weaponDamage: 1
}

function dealDamage(attacker, defender) {
      console.log(arguments)
      let damageDealt = attacker.weaponDamage
      defender.health -= damageDealt
      return defender
}

dealDamage(attacker, defender)
console.log(defender)

let index = creature.inventory

function equipWeapon(creature, index) {
      let selectWeapon = index.splice(2)
      creature.weapon += selectWeapon
      return creature
  }

equipWeapon(creature, index)
console.log(creature)

let heroicCreature = creature.heroic

function doBattle(heroicCreature, creature) {
    if (typeof(heroicCreature) === "boolean") {
      console.log('hero status activated')
    } else {
      return null
    }
  }

  doBattle()
