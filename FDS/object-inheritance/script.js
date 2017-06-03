// function Employee(name, dept){
//   this.name = name || "";
//   this.dept = dept || "general";
// }
//
// function WorkerBee(projs){
//   this.projects = projs || [];
// }
// WorkerBee.prototype = new Employee;
//
// function Engineer(mach){
//   this.dept = "engineering";
//   this.machine = mach || "";
// }
// Engineer.prototype = new WorkerBee;
//
//
// var emp = new Employee;
//
// var worker = new WorkerBee;
//
// var eng = new Engineer;
//
// console.log(emp);
// console.log(emp.__proto__);
// console.log('--------------');
// console.log(worker);
// console.log(worker.__proto__);
// console.log('--------------');
// console.log(eng);
// console.log(eng.__proto__);
//
// emp.prototype.getName = function() {};

function Person() {}
// Person.prototype.eyes = 2;
// Person.prototype.nose = 1;
// var kim  = new Person();
// var park = new Person();
// console.log(kim.eyes); // => 2
// console.log(park.eyes);
