let recipe = ['0: cut and bake vegetables in a frying pan',
'1: stir 6 eggs and 100 gram of ricotta',
'2: add ricotta to the baked vegetables',
'3: after 5 minutes, turn frittata, sprinkle parmaggiano over it',
'4: bake frittata, under a cover, and in the oven for 8 minutes']

result = ""

recipe.forEach(function(recipe) {
  result += `${recipe}`
})

console.log(result)
