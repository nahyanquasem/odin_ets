const gridBox = document.querySelector('#gridBox');


function drawGrid(gridSize){

    for (let i = 0; i<gridSize; i++){
        const newDiv = document.createElement('div');
        newDiv.id = 'gridCell';
        newDiv.textContent = `Cell ${i}`;
        gridBox.append(newDiv);
    }
}



drawGrid(16);