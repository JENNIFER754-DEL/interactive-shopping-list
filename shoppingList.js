
const addItemButton = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const pendingItemsList = document.getElementById('pending-items');
const purchasedItemsList = document.getElementById('purchased-items');
const clearListButton = document.getElementById('clear-list-btn');

addItemButton.addEventListener('click', function() {
    const itemName = itemInput.value.trim();  
    if (itemName) {
        const li = document.createElement('li');
        li.textContent = itemName;  
        const purchaseBtn = document.createElement('button');
        purchaseBtn.textContent = 'Purchase';
        purchaseBtn.classList.add('purchase-btn');  
        purchaseBtn.addEventListener('click', function() {
            moveToPurchasedList(li);
        });
        li.appendChild(purchaseBtn);
        pendingItemsList.appendChild(li);
        itemInput.value = '';
    }
});
function moveToPurchasedList(item) {
    const purchasedItem = document.createElement('li');
    purchasedItem.textContent = item.textContent.replace('Purchase', '').trim(); 
    purchasedItemsList.appendChild(purchasedItem);     
    item.remove();
}
clearListButton.addEventListener('click', function() {
    pendingItemsList.innerHTML = '';  
    purchasedItemsList.innerHTML = '';
});

