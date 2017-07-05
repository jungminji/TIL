/*! rest-api.js @ 2017, yamoo9.net */
(function (global, $) {
  'use strict';

  // api address
  const root = 'http://localhost:3000/students/';


  // jQuery ajax api
  $.get(root, function (data, status, xhr) {
    console.log(data);
  });

  function addStudent(newStudent) {
    // Stringify new stunet
    $.post(root, newStudent, function (data, status) {
      console.log(status);
      console.log(data); // Created object
    })
  }

  global.document.onclick = function () {
    addStudent({
      "name": "지정민",
      "age": 27,
      "gender": "male",
      "email": "fdev.jm@gmail.com",
      "hobby": "DIY 인테리어",
      "school": {
        "name": "가야대",
        "grade": 2
      },
      "major": "설치 미술",
      "minor": "인류학",
      "family": [
        "아빠",
        "엄마"
      ]
    });
  }


})(window, window.jQuery);