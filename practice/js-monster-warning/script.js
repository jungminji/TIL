function warningMaker(monster) {
  return function() {
    alert("Beware! There have been " + monster + " sightings in Seoul today!");
  }
};

var orkAlert = warningMaker("Ork");
orkAlert();


////////////////////////////////////////////////////////////////////////////////

function warningMaker(monster) {
  return function(monsterNumber, monsterSpotted) {
    alert("Beware! There have been " + monster + " sightings in Seoul today!\n" +
      monsterNumber + " have been spotted at the " + monsterSpotted
    );
  }
}

var orkAlert = warningMaker("Ork");
orkAlert(10, "Tokyo");

////////////////////////////////////////////////////////////////////////////////

var greenHulkAlert = warningMaker("green hulk");
greenHulkAlert(6, "Gwanghwa-mun");

var snowYetiAlert = warningMaker("snow yeti");
snowYetiAlert(1, "Nam San");


////////////////////////////////////////////////////////////////////////////////

function warningMaker(monster) {
  var count = 0;
  var zone = [];

  return function(monsterNumber, monsterSpotted) {
    var list = "";
    zone.push({
      num: monsterNumber,
      loc: monsterSpotted
    });

    for (var i = 0; i < zone.length; i++) {
      list += (zone[i].loc + " " + zone[i].num + "\n");
    }

    alert("Beware! There have been " + monster +
      " sightings in Seoul today!\n" +
      monsterNumber + " have been spotted at the " +
      monsterSpotted + "!\n" +
      "This is alert #" + (++count) +
      " today for " + monster + " danger.\n" +
      "Current danger zones are:\n" +
      list);
  }
}

var orkAlert = warningMaker("Ork");
orkAlert(10, "Tokyo");

////////////////////////////////////////////////////////////////////////////////

function assignFlower(student, flowerList) {
  // var classroomAssignment;
  for (var i = 0; i < flowerList.length; i++) {
    if (student == flowerList[i]) {
      return function() {
        alert("안녕하세요, " + student + "님!\n" +
          "강의장에 오시면 " +
          flowerList[i] + " 을/를 선물로 드릴게요.");
      };
    }
  }
  // return classroomAssignment;
}

////////////////////////////////////////////////////////////////////////////////

var runaway = (function() {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
}());


////////////////////////////////////////////////////////////////////////////////

var happinessGenerated = function(testScore, attendanceRate, satisfactionLevel) {
  var ability = testScore * attendanceRate;
  var feeling = satisfactionLevel * satisfactionLevel * satisfactionLevel;
  var totalHappiness = feeling + ability;
  return totalHappiness;
};

var test = 75;
var attendance = 0.25;
var satisfaction = 7;

var happiness = happinessGenerated(, , );

alert(happinessGenerated);

////////////////////////////////////////////////////////////////////////////////

var passengers = [
  ["홍", "지수"],
  ["최", "병광"],
  ["지", "훈"],
  ["김", "데레사"]
];

var modifiedNames = passengers.map(function(item){
  return item.join("");
});

alert(modifiedNames);

////////////////////////////////////////////////////////////////////////////////

function star(num){
  var str = "";
  for(var i = 1; i < num; i++){
    for(var j = 0; j < num - i; j++){
      str+=" ";
    }
    for(var k = 0; k < Math.round(num/2) * i - 1; k++){
      str += "*";
    }
    str += "\n";
  }
  return str;
}

star(5);
