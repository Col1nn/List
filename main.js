const inputFirst = document.querySelector('input');
const ulElement = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchingTexts = (e) => {
    const searchText = e.target.value.toLowerCase();
    let Elements = [...liElements];
    Elements = Elements.filter(element => element.textContent.toLowerCase().includes(searchText));
    ulElement.textContent = "";
    Elements.forEach(element => ulElement.appendChild(element));
}
inputFirst.addEventListener('input', searchingTexts);


const form = document.querySelector("form");
const ulList = document.querySelector('h1+ul');
const span = document.querySelector('h1 span');
const inputSecond = document.querySelector('form>input');
const liList = document.getElementsByClassName('text');
let toDoList = [];
let number = 0;

function addText(e) {
    e.preventDefault();
    const text = inputSecond.value;
    if (text === "") {
        alert("Pusty string!");
        return;
    }
    const liElement = document.createElement('li');
    liElement.className = 'text';
    liElement.innerHTML = text + "<button>Usuń</button>";
    inputSecond.value = "";
    toDoList.push(liElement);
    renderList();
    // ulList.appendChild(liElement);
    span.textContent = `${++number}`;
    liElement.querySelector('button').addEventListener('click', removeText);
}

function renderList() {
    ulList.textContent = "";
    toDoList.forEach((item, key) => {
        item.id = key;
        ulList.appendChild(item);
    })
}

function removeText(e) {
    const index = e.target.parentNode.remove();
    toDoList.splice(index, 1);
    renderList();
    span.textContent = `${--number}`;
}

form.addEventListener('submit', addText);