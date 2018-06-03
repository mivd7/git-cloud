// Variables
let hero = {
  name: 'Donald',
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
    alert("zzz, health backup to 10!")
    creature.health = 10
    return creature
  }


console.log(creature)

let item = ['gun','baseball bat', 'molotov cocktail', 'atomic bomb']

function pickUpItem(creature, item) {
    alert("picked up new item!")
    let newItem = item.push('pocketknife', 'sledgehammer')
    creature.inventory = item
    return creature
}

console.log(item)
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
      let damageDealt = attacker.weapon.damage
      defender.health -= damageDealt
      return defender
}

console.log(defender)

let index = creature.inventory

function equipWeapon(creature, index) {
      let selectWeapon = index.splice(2,1)
      //hier nog ff naar kijken!
      creature.weapon += selectWeapon
      return creature
  }

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
    alert('en garde!')
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

//-----*Section3*---
console.log(hero)
console.log(creature)
console.log(heroicCreature)

function displayStats() {
  document.write("hero")
}
