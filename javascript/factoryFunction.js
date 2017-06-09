const dog = () => {
  const sound = "woof"
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = dog()
sniffles.talk()

// Factoris are simply functions that create and return objects
