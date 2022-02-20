const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const form = document.querySelector(".new-form");
const addBtn = document.querySelector(".footer__button");
const deleteBtn = document.querySelector(".item__delete");

function createId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}

function createItem(text) {
  let id = createId();
  const itemRow = document.createElement("li");

  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
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

function onAdd() {
  const text = input.value;

  if (text === "") {
    alert("해야할 일을 입력하세요!");
    return;
  }

  const item = createItem(text);

  items.appendChild(item);
  item.scrollIntoView({ block: "nearest" });
  input.value = "";
  input.focus();
}

function onDelete(event) {
  const id = event.target.dataset.id;

  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);

    toBeDeleted.remove();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});
items.addEventListener("click", (event) => onDelete(event));
