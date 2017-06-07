// Object to manage data

function studentManager(data) {

  data = data || [];

  return {
    addStudent: function(arr){
      // arr 데이터 검증
      data.push(arr);
    },
    banStudent: function(studentName){
      // studentName 데이터 검증
      // 이름을 선택하여 해당 학생 객체 제거!
    },
    fixStudent: function(studentName){
      // studentName 데이터 검증
      // 해당 이름의 객체를 선택하여, 해당 속성들을 업데이트!
      // 빠바바바밤!?
    }
  }
};
