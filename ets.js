const gridBox = document.querySelector('#gridBox');
const cellID = document.querySelector('#cellID');


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
        cellID.textContent = `${cell.textContent}`;

    });

    cell.addEventListener('mouseleave', ()=>{
        console.log(`Leave ${cell.textContent}`);

    });

});