const gridCell = document.querySelectorAll('#gridCell');

const gridBox = document.querySelector('#gridBox');

function resetGrid(){
    while(gridBox.firstChild){
        gridBox.removeChild(gridBox.lastChild);
    }
}
function drawGrid(gridSize){
    
    resetGrid();
    
    for (let i = 0; i<gridSize*gridSize; i++){
        const newDiv = document.createElement('div');
        newDiv.id = 'gridCell';
        newDiv.textContent = `${i}`;
        gridBox.append(newDiv);
    }
    
    addGridCellEvents();
}

const gridSizeButton = document.querySelector('#gridSizeButton');
gridSizeButton.addEventListener('click',()=>{
    let text = document.querySelector('#gridSizeTextBox').value;
    let gridSize = Number(text);
    drawGrid(gridSize);
});

drawGrid(16);

function addGridCellEvents(){

    gridCell.forEach((cell)=>{
    
        cell.addEventListener('mouseenter', ()=>{
            let colorText = changeBackgroundColorRandomly(cell);
            console.log(`Enter ${cell.textContent} Color Value: ${colorText}`);
    
        });
    
        cell.addEventListener('mouseleave', ()=>{
            let colorText = changeBackgroundColorRandomly(cell);
            console.log(`Leave ${cell.textContent} Color Value: ${colorText}`);
    
        });
    });
}

function randomColorGenerator(){
    
    let colorDepth = 2**8;
    
    const colors = [];
    
    for(let i = 0; i<3; i++){
        colors.push((Math.floor(Math.random() *  colorDepth)));
    }
    
    return colors;
    
}

function changeBackgroundColorRandomly(cell){
    let colors = randomColorGenerator();
    
    let text = `RED: ${colors[0]} GREEN: ${colors[1]} BLUE: ${colors[2]}`;
    cell.style.cssText = `background-color:rgb(${colors[0]} ${colors[1]} ${colors[2]})`;
    
    return text;
    
}



const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', ()=>{
    
    gridCell.forEach((cell) => {
        
        cell.style.cssText = 'background-color:rgb(255 255 255)';
        
    });
    
});



