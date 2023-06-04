// Same keys and values ES2015
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }
  
  // Computed Property Names ES2015
  let favoriteNumber = 42;
  let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }
  
  // Object Methods ES2015
  instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return `${this.firstName} says bye!`;
    }
  }
  
  // CreateAnimal function
  function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }
  
  const d = createAnimal("dog", "bark", "Woooof!");
  console.log(d.bark());
  
  const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
  console.log(s.bleet());
  