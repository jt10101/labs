const pokemon = require("./data.js");
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// console.dir(pokemon, { maxArrayLength: null });
// console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Easy";

// console.log(game.difficulty);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push(pokemon[3]);
// console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

game.party.push(pokemon[148], pokemon[24], pokemon[53]);
// console.log(game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}

// console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

game.party.splice(0, 1, pokemon[4]);
// console.log(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
function callName() {
  for (let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name);
  }
}
// callName(); // REMOVE "//" TO INVOKE FUNCTION

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

allStarter = [];
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    allStarter.unshift(pokemon[i].name);
  }
}

// console.log(allStarter);

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// game.catchPokemon = function (pokemonObj) {
//   game.party.push(pokemonObj);
// };

// game.catchPokemon(pokemon[12]); // catch  Weedle
// console.log(game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

// game.catchPokemon = function (pokemonObj) {
//   game.party.push(pokemonObj);
//   game.items[1].quantity = game.items[1].quantity - 1;
// };
// game.catchPokemon(pokemon[12]);
// console.log(game.items[1].quantity);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}

// console.log(game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymMethod = function () {
  let complete = 0;
  let incomplete = 0;
  for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed === true) {
      complete = complete + 1;
    } else if (game.gyms[i].completed === false) {
      incomplete = incomplete + 1;
    }
  }
  console.log(`completed: ${complete}, incomplete: ${incomplete} `);
};

// game.gymMethod();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function () {
  return Object.keys(game.party).length;
};

// console.log(game.partyCount() + " Pokemon in party");
// console.log(game.party);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for (i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].completed === false && game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true;
  }
}

// console.log(game.gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

// console.log(game);

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

// console.log(game.party.sort((a, b) => a.hp - b.hp)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];
// game.catchPokemon = function (pokemonObj) {
//   if (Object.keys(game.party).length < 6) {
//     game.party.push(pokemonObj);
//     game.items[1].quantity = game.items[1].quantity - 1;
//   } else game.collection.push(pokemonObj);
//   game.items[1].quantity = game.items[1].quantity - 1;
// };
// game.catchPokemon(pokemon[13]);
// game.catchPokemon(pokemon[14]);
// game.catchPokemon(pokemon[17]);

// console.log(`You have ${game.items[1].quantity} Pokeballs remaining.`);
// console.log(
//   `You have ${Object.keys(game.party).length} Pokemon in your party.`
// );
// console.log(
//   `You have ${Object.keys(game.collection).length} Pokemon in your collection.`
// );
// console.log(game.party);
// console.log(game.collection);

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

// game.catchPokemon = function (pokemonObj) {
//   if (game.items[1].quantity === 0) {
//     console.log(
//       `${game.items[1].quantity} Pokeballs left, cannot catch Pokemon!`
//     );
//   } else {
//     if (Object.keys(game.party).length < 6) {
//       game.party.push(pokemonObj);
//       game.items[1].quantity = game.items[1].quantity - 1;
//     } else game.collection.push(pokemonObj);
//     game.items[1].quantity = game.items[1].quantity - 1;
//   }
// };

// game.catchPokemon(pokemon[13]);
// game.catchPokemon(pokemon[14]);
// game.catchPokemon(pokemon[102]);
// game.catchPokemon(pokemon[113]);
// game.catchPokemon(pokemon[83]);
// game.catchPokemon(pokemon[5]);
// game.catchPokemon(pokemon[72]);

// console.log(`You have ${game.items[1].quantity} Pokeballs remaining.`);
// console.log(
//   `You have ${Object.keys(game.party).length} Pokemon in your party.`
// );
// console.log(
//   `You have ${Object.keys(game.collection).length} Pokemon in your collection.`
// );

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

const pokemonNameArray = pokemon.map((a) => a.name); // https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
const pokemonNameArrayLower = pokemonNameArray.map((element) =>
  element.toLowerCase()
);
game.catchPokemon = function (pokemonName) {
  let x = pokemonName.toLowerCase(); // x variable to store user input pokemon name to all lower case
  if (pokemonNameArrayLower.includes(x) === false) {
    console.log(`Pokemon ${pokemonName} does not exist!`);
  } // This segment runs if Pokemon name does not exist in data.js
  else {
    let y = pokemonNameArrayLower.indexOf(x); // identifies the pokemon's object index from data.js file
    let z = pokemon[y].name; // Obtains the correct Pokemon Name from data.js
    if (game.items[1].quantity === 0) {
      // Start of code when Pokemon exists
      console.log(
        `${game.items[1].quantity} Pokeballs left, cannot catch ${z}!`
      ); // First checks if have sufficient Pokeballs to catch Pokemon
    } else {
      if (Object.keys(game.party).length < 6) {
        game.party.push(pokemon[y]);
        game.items[1].quantity = game.items[1].quantity - 1;
        console.log(
          `Captured ${z}! | Party: ${game.party.length} | Collection: ${game.collection.length} | Pokeballs: ${game.items[1].quantity}`
        );
      } else {
        game.collection.push(pokemon[y]);
        game.items[1].quantity = game.items[1].quantity - 1;
        console.log(
          `Party full! ${z} sent to collection!| Party: ${game.party.length} | Collection: ${game.collection.length} | Pokeballs: ${game.items[1].quantity}`
        );
      }
    }
  }
};

// game.catchPokemon("Pikachu");
// game.catchPokemon("zubaT");
// game.catchPokemon("mEw");
// game.catchPokemon("mewTwO");
// game.catchPokemon("raicHu");
// game.catchPokemon("Zapdos");
// game.catchPokemon("Articuno");
// game.catchPokemon("Moltres");
// game.catchPokemon("Dragonite");

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const pokemonTypeArray = [...new Set(pokemon.map((a) => a.type))]; // https://www.zipy.ai/blog/how-do-i-get-all-of-the-unique-values-in-a-javascript-array-remove-duplicates
const sorted = {};
for (let i = 0; i < pokemonTypeArray.length; i++) {
  let x = pokemonTypeArray[i]; // assigns x to the name of the pokemon type rather than giving back the index number
  sorted[pokemonTypeArray[i]] = [];
  for (let i = 0; i < pokemonNameArray.length; i++) {
    if (pokemon[i].type === x) {
      sorted[x].push(pokemon[i]);
    }
  }
}

console.log(sorted);
