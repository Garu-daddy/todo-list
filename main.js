'use strict';

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const form = document.querySelector('.new-form');
const addBtn = document.querySelector('.footer__button');
const deleteBtn = document.querySelector('.item__delete');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    onAdd();
});

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아와야 함.
    const text = input.value;
    if(text === '') {
        input.focus();
        alert("해야할 일을 입력하세요!");  
        return;  
    }
    // 2. 새로운 아이템을 만듦 (텍스트와 삭제 버튼 동시)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로 만든 아이템을 추가
    items.appendChild(item);
    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'nearest'});
    // 5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
};

let id = 0; // UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
    <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fa-solid fa-trash-can fa-xl" data-id=${id}></i>
                </button>
            </div>
            <div class="item__divider"></div>
    `;

return itemRow;

}

// addBtn.addEventListener('click', () => {
//     onAdd();
// });


// input.addEventListener('keydown', (event) => {
//     if(event.isComposing) {
//         return;
//     }
//     if(event.key === 'Enter') {
//         onAdd();
//     }
// });

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }

});