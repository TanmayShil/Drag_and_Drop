// Get references to the containers and the reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');

// Add event listeners to the draggable items
const items = container1.getElementsByClassName('item');
for (const item of items) {
    item.addEventListener('dragstart', handleDragStart);
}

// Add event listeners to the second container
container2.addEventListener('dragover', handleDragOver);
container2.addEventListener('drop', handleDrop);

// Event handler for dragstart event
function handleDragStart(event) {
    // Set the item ID to be transferred during the drag
    event.dataTransfer.setData('text/plain', event.target.id);
}

// Event handler for dragover event
function handleDragOver(event) {
    // Prevent the default behavior
    event.preventDefault();

    // Add a class to apply visual feedback
    event.target.classList.add('dragover');
}

// Event handler for drop event
function handleDrop(event) {
    // Prevent the default behavior
    event.preventDefault();

    // Retrieve the transferred item ID
    const itemId = event.dataTransfer.getData('text/plain');

    // Append the item to the second container
    const item = document.getElementById(itemId);
    event.target.appendChild(item);

    // Add a class to indicate a successful drop
    event.target.classList.add('dropped');

    // Remove the dragover class
    event.target.classList.remove('dragover');
}

// Event listener for reset button click event
resetButton.addEventListener('click', function () {
    // Clear the second container
    container2.innerHTML = '';

    // Reset the first container to its original state
    const itemsArray = Array.from(items);
    for (const item of itemsArray) {
        container1.appendChild(item);
    }
});
