(function (window) {
    'use strict';

    const memoDataID = 'memo-data';
    let document = window.document;
    let memo = document.querySelector('.memo');
    let memoBtns = document.querySelectorAll('button');
    let memoStorage;

    function init() {
        loadMemoData(memoDataID);
        eventBind();
    }

    function loadMemoData(id) {
        let loadedData = sessionStorage.getItem(id);

        if (!loadedData) {
            window.sessionStorage.setItem(id, JSON.stringify([]));
        } else {
            memoStorage = JSON.parse(loadedData);
        }
    }

    function eventBind() {
        [].forEach.call(memoBtns, function (button) {
            button.addEventListener('click', detectButton);
        });
    }

    function detectButton() {
        this.classList.contains('is-save') ? saveMemo() : cancelMemo();
    }

    function saveMemo() {
        let memoTitle = memo.querySelector('#memo-title');
        let memoContent = memo.querySelector('#memo-content');
        let memoItem;

        if (validateMemo(memoTitle, memoContent)) {
            return;
        }

        memoItem = {
            title: memoTitle.value,
            content: memoContent.value
        };

        memoStorage.push(memoItem);

        // Store into local storage (5MB approx.)
        window.sessionStorage.setItem(memoDataID, JSON.stringify(memoStorage));

        memoTitle.value = '';
        memoContent.value = '';
    }

    function validateMemo(title, content) {
        return title.value.trim() === '' || content.value.trim() === '';
    }

    function cancelMemo() {

    }

    init();

})(window);