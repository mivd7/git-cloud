// Variables
let hero = {
  name: 'Supermax',
  heroic: true,
  inventory: ['a','b'],
  health: 10
}

hero.weapon = {
  type: 'AK-47',
  damage: 10
}

console.log(hero)

let creature = {
    heroic: true,
    health: 10,
    weaponDamage: 5
  }

function rest(creature) {
    console.log(arguments)
    creature.health += 10
    alert("zzz")
    return creature
  }

//rest(creature)
console.log(creature)

let item = ['gun','baseball bat', 'molotov cocktail', 'atomic bomb']

function pickUpItem(creature, item) {
    console.log(arguments)
    let newItem = item.push('pocketknife', 'sledgehammer')
    alert("picked up new item!")
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
  health: 10
}

attacker.weapon = {
  type: 'colt 45',
  damage: 5
}

function dealDamage(attacker, defender) {
      console.log(arguments)
      let damageDealt = attacker.weapon.weaponDamage
      defender.health -= damageDealt
      return defender
}

dealDamage(attacker, defender)
console.log(defender)

let index = creature.inventory

function equipWeapon(creature, index) {
      let selectWeapon = index.splice(2,1)
      //hier nog ff naar kijken!
      creature.weapon += selectWeapon
      return creature
  }

equipWeapon(creature, index)
console.log(creature)

let heroicCreature = {
  heroic: true,
  health: hero.health -= creature.weaponDamage,
}


console.log(heroicCreature.health)
let isHeroic = Boolean(heroicCreature.heroic)
let heroHealth = heroicCreature.health
let creatureHealth = creature.health
let turn = true

function doBattle(heroicCreature, creature) {
    if (isHeroic == true) {
      console.log('hero status activated')
    } else {
      console.log('not a hero')
      return null
    }
    //while (heroHealth && creatureHealth > 0) {
      //if (turn = true) {
        //creatureHealth -= hero.weapon.damage
        //console.log('take that f*cker')
        //return creatureHealth
      }

doBattle()

//-----*Section3*---
console.log(hero)
console.log(creature)
console.log(heroicCreature)
