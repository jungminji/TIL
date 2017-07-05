(function (window, document, $) {
    'use strict';

    const root = 'http://localhost:3000/memos/';

    const HTMLnodes = {
        memoContainer: document.querySelector('.memo-item-container'),
        memoTitle: document.querySelector('#memo-title'),
        memoContent: document.querySelector('#memo-content'),
        buttons: {
            save: document.querySelector('.is-save'),
            cancel: document.querySelector('.is-cancel')
        }
    }

    function init() {
        renderView();
        eventBind();
    }

    function renderView() {

        $.get(root, function (data, status) {

            HTMLnodes.memoContainer.innerHTML = '';

            let memoTemplate = '';

            data.forEach(function (item, index) {

                memoTemplate += `
            <article class="memo-item column is-12 message is-primary">
                <div class="message-header">
                    <h5 class="memo-item-title">${item.title}</h5>
                    <button data-index="${item.id}" type="button" class="delete" aria-label="메모 아이템 제거"></button>
                </div>
                <div class="message-body">
                    <p class="memo-item-content">${item.content}</p>
                </div>
            </article>
            `;

            });

            HTMLnodes.memoContainer.innerHTML = memoTemplate;

            let removeBtn = document.querySelectorAll('button.delete');

            [].forEach.call(removeBtn, function (item, indedx) {
                item.addEventListener('click', removeMemo);
            });

        });
        cancelMemo();
    }



    function eventBind() {
        HTMLnodes.buttons.save.addEventListener('click', saveMemo);
        HTMLnodes.buttons.cancel.addEventListener('click', cancelMemo);
    }


    function saveMemo() {

        if (HTMLnodes.memoTitle.value === '' || HTMLnodes.memoContent.value === '') {
            alert('Please write Title and Content');
            return;
        }

        let memo = {
            title: HTMLnodes.memoTitle.value,
            content: HTMLnodes.memoContent.value
        }

        $.post(root, memo, function (item, status) {
            renderView();
        });
    }

    function cancelMemo() {
        HTMLnodes.memoTitle.value = '';
        HTMLnodes.memoContent.value = '';
    }



    function removeMemo() {
        let id = this.dataset.index;
        $.ajax({
            url: `${root}/${id}`,
            method: 'DELETE',
            dataType: 'json',
            success: function (data) {
                renderView();
            },
            error: function () {
                console.log("DELETE failed");
            }
        })
    }


    init();

})(window, window.document, jQuery);