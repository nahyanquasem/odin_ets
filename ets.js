const gridBox = document.querySelector('#gridBox');


function drawGrid(gridSize){

    for (let i = 0; i<gridSize*gridSize; i++){
        const newDiv = document.createElement('div');
        newDiv.id = 'gridCell';
        newDiv.textContent = `${i}`;
        gridBox.append(newDiv);
    }
}

drawGrid(16);

const gridCell = document.querySelectorAll('#gridCell');


gridCell.forEach((cell)=>{

    cell.addEventListener('mouseenter', ()=>{
        console.log(`Enter ${cell.textContent}`);

    });

    cell.addEventListener('mouseleave', ()=>{
        console.log(`Leave ${cell.textContent}`);

    });

});