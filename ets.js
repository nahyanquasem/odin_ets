const gridBox = document.querySelector('#gridBox');
const divGridCell = document.querySelector('#gridCell');

divGridCell.forEach((cell) => {
    cell.addEventListener('click', () => {
        let textValue = cell.textContent;
        console.log(`${textValue} was clicked`);

    });

});

function drawGrid(gridSize){

    for (let i = 0; i<gridSize; i++){
        const newDiv = document.createElement('div');
        newDiv.id = 'gridCell';
        newDiv.textContent = `Cell ${i}`;
        gridBox.append(newDiv);
    }
}





drawGrid(20);