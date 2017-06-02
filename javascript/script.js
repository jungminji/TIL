for (var prop in classUsingObject) {
  // Validation, only property is its own
  // Just to be more specific
  if (classUsingObject.hasOwnProperty(prop)) {
    console.log(classUsingObject[prop].minor);
  }
}

console.log('------------------------------');

// Parent Object
const parent = {
  name: 'Big Daddy',
  age: 70
}

// Child Object (Inherited from Parent)
const child = Object.create(parent);
child.age = 30;
child.laptop = "Macbook Pro";
console.log(child);

// You have to use hasOwnProperty to only search for child's properties
// if not, it will automatically use properties in parent object
// Rather use properties like name in prototype... Better!!!
for (var prop in child) {
  if (child.hasOwnProperty(prop)) {
    console.log(child[prop]);
  }
}
