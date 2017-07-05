(function (window) {
    'use strict';

    const memoDataID = 'memo-data';
    let document = window.document;
    let memo = document.querySelector('.memo');
    let memoBtns = document.querySelectorAll('button');
    let memoTitle = memo.querySelector('#memo-title');
    let memoContent = memo.querySelector('#memo-content');
    let memoItem;
    let memoStorage;

    function init() {
        loadMemoData(memoDataID);
        render();
        eventBind();
    }

    function loadMemoData(id) {
        let loadedData = sessionStorage.getItem(id);

        if (!loadedData) {
            window.sessionStorage.setItem(id, JSON.stringify([]));
            loadedData = window.sessionStorage.getItem(id);
        }
        memoStorage = JSON.parse(loadedData);
    }

    function render() {
        let memoContainer = document.querySelector('.memo-item-container');
        let template = '';

        memoContainer.innerHTML = '';

        memoStorage.forEach(function (item, index) {
            template += `
        <article class="memo-item column is-12 message is-primary">
            <div class="message-header">
              <h5 class="memo-item-title">${item.title}</h5>
              <button data-remove="${index}" type="button" class="delete" aria-label="메모 아이템 제거"></button>
            </div>
            <div class="message-body">
              <p class="memo-item-content">${item.content}</p>
            </div>
        </article>
            `;
        });

        memoContainer.innerHTML = template;

        // Add eventlistener on buttons
        let removeBtns = document.querySelectorAll('.delete');
        [].forEach.call(removeBtns, function (button) {
            button.addEventListener('click', removeMemo);
        });
    }

    function removeMemo(e) {
        if (e.target.localName === 'button' && e.target.classList.contains('delete')) {
            let deleteItemID = e.target.dataset.remove;
            memoStorage.splice(deleteItemID, 1);
            window.sessionStorage.setItem(memoDataID, JSON.stringify(memoStorage));
            render();
        }
        e.stopPropagation();
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


        if (validateMemo(memoTitle, memoContent)) {
            alert('Write Title & Content');
            return;
        }

        memoItem = {
            title: memoTitle.value,
            content: memoContent.value
        };

        memoStorage.push(memoItem);

        // Store into local storage (5MB approx.)
        window.sessionStorage.setItem(memoDataID, JSON.stringify(memoStorage));

        cancelMemo();

        render();
    }

    function validateMemo(title, content) {
        return title.value.trim() === '' || content.value.trim() === '';
    }

    function cancelMemo() {
        memoTitle.value = '';
        memoContent.value = '';
    }

    init();

})(window);