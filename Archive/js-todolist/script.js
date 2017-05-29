var todolist = (function(){
    // 할 일 항목을 담아둘 배열을 할당합니다.
    var list = [];

    // 할 일 목록을 보여주는 함수입니다.
    var showList = function(){
        var output = '';

        if (list.length === 0) {
            console.log('등록된 할일 목록이 없습니다.');
            return;
        }

        for (var i in list) {
            with (list[i]) {
                output += `${id} : ${todo} | 상태: ${stauts}\n`;
            }
        }
        console.log(output);
    }

    // 새로운 항목을 추가하는 함수입니다.
    var add = function(todo){
        list.push({
            id: list.length + 1,
            todo: todo,
            stauts: false,
        });
        showList();
    }

    // 기존의 항목을 id값을 통해 수정하는 함수입니다.
    var edit = function(id){
        if (!_checkId(id)) {
            alert('해당 아이디는 존재하지 않습니다.');
            return;
        }
        var item = _checkId(id).item;
        var newTodo = prompt('수정하실 할 일 내용을 입력하세요.');
        item.todo = newTodo;
        showList();
        alert('수정되었습니다.');
    }

    // 등록된 항목을 id값을 통해 완료처리 하는 함수입니다.
    var complete = function(id){
        if (!_checkId(id)) {
            alert('해당 아이디는 존재하지 않습니다.');
            return;
        }
        var item = _checkId(id).item;
        item.stauts = (item.stauts === false ? true : false);
        showList();
    }

    // 등록된 항목을 id값을 통해 제거하는 함수입니다.
    var remove = function(id){
        if (!_checkId(id)) {
            alert('해당 아이디는 존재하지 않습니다.');
            return;
        }
        var item = _checkId(id);
        list.splice(item.idx, 1);
        showList();
        alert('삭제되었습니다.');
    }

    // id값을 통해 내부적으로 item과 idx값 확인을 위해 사용되는 함수입니다.
    var _checkId = function(id){
        var len = list.length;
        while (0 <= --len) {
            if (id === list[len].id) {
                return {
                    item : list[len],
                    idx  : len
                };
            } else {
                return false;
            }
        }
    }

    return {
        sh : showList,
        ad      : add,
        ed     : edit,
        comp : complete,
        rm   : remove
    }
})()
