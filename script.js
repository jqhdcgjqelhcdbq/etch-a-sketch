const container = document.getElementById('container');
const clearButton = document.getElementById('clear');
const resizeButton = document.getElementById('resize');

function createGrid(size) {
    container.innerHTML = ''; // Clear existing squares
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'black'; // Change the color on hover
        });
        container.appendChild(square);
    }
}

// Clear the board
clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white'; // Reset to original color
    });
});

// Resize the grid
resizeButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (1-100):");
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// Initialize the grid
createGrid(16); // Default size