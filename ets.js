const gridBox = document.querySelector('#gridBox');

const gridSizeButton = document.querySelector('#gridSizeButton');
const resetButton = document.querySelector('#reset');


gridSizeButton.addEventListener('click',()=>{
    let text = document.querySelector('#gridSizeTextBox').value;
    let gridSize = Number(text);
    drawGrid(gridSize);
});

function resetGrid(){
    while(gridBox.firstChild){
        gridBox.removeChild(gridBox.lastChild);
    }
}

function drawGrid(gridSize){
    
    resetGrid();
    
    for (let i = 0; i<gridSize*gridSize; i++){
        let newDiv = document.createElement('div');
        newDiv.id = `gridCell`;
        newDiv.textContent = `${i}`;
        gridBox.append(newDiv);
    }
    
    addGridCellEvents();
}


function addGridCellEvents(){

    gridBox.childNodes.forEach((cell) => {

        cell.addEventListener('mouseenter', ()=>{
            let colorText = changeBackgroundColorRandomly(cell);
            console.log(`Enter ${cell.textContent} Color Value: ${colorText}`);
    
        });

    });

    gridBox.childNodes.forEach((cell) => {

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



resetButton.addEventListener('click', ()=>{

    gridBox.childNodes.forEach((cell) =>{

        cell.style.cssText = 'background-color:rgb(255 255 255)';

    });
    
    
});



