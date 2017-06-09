var Animal = {
  type: "Mece",
  displayType: function(){
    console.log(this.type);
  }
}

var Deux = Object.create(Animal);
Deux.displayType();


var Un = Object.create(Animal);
Un.type = "Fish";
Un.displayType();
