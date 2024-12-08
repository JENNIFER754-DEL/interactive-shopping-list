# interactive-shopping-list
1. **HTML Structure**
- Input field and buttons are for user interaction.
ul element will hold the list items.
2. **CSS Styling**
- Basic styling for input, buttons, and list items.
- The purchased class is used to apply a strikethrough and change the background of purchased items.
3. **JavaScript**
- We maintain an array shoppingArray to store shopping list items. Each item is an object with text (the item name) and purchased (a boolean indicating if the item is bought).
- renderList() dynamically updates the displayed list of items.
- The addItem() function is triggered when the user clicks the "Add" button. It adds a new item to the array and updates the list.
- togglePurchased() changes the purchased status of an item and re-renders the list.
- clearList() removes all items from the list and updates local storage.
- Local storage (localStorage) is used to persist the shopping list across page reloads.
