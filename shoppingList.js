const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-btn');
const clearListButton = document.getElementById('clear-list-btn');
const shoppingList = document.getElementById('shopping-list');
let shoppingArray = JSON.parse(localStorage.getItem('shoppingList')) || [];
function renderList() {
    shoppingList.innerHTML = ''; 
    shoppingArray.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.text;
        li.classList.toggle('purchased', item.purchased);
        li.addEventListener('click', () => togglePurchased(index));

        shoppingList.appendChild(li);
    });
}
function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText) {
        shoppingArray.push({ text: itemText, purchased: false });
        itemInput.value = ''; 
        updateLocalStorage();
        renderList();
    }
}
function togglePurchased(index) {
    shoppingArray[index].purchased = !shoppingArray[index].purchased;
    updateLocalStorage();
    renderList();
}
function clearList() {
    shoppingArray = [];
    updateLocalStorage();
    renderList();
}
function updateLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingArray));
}
    addItemButton.addEventListener('click', addItem);
clearListButton.addEventListener('click', clearList);
renderList();