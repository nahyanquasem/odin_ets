const gridBox = document.querySelector('#gridBox');


function drawGrid(gridSize){

    for (let i = 0; i<gridSize; i++){
        const newDiv = document.createElement('div');
        newDiv.id = 'gridCell';
        newDiv.textContent = `Cell ${i}`;
        gridBox.append(newDiv);
    }
}

drawGrid(20);

const gridCell = document.querySelectorAll('#gridCell');


gridCell.forEach((cell)=>{

    cell.addEventListener('mouseenter', ()=>{
        console.log(`Enter ${cell.textContent}`);

    });

    cell.addEventListener('mouseleave', ()=>{
        console.log(`Leave ${cell.textContent}`);

    });

});