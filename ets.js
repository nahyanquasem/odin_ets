const gridBox = document.querySelector('#gridBox');


function drawGrid(gridSize){

    for (let i = 0; i<gridSize*gridSize; i++){
        const newDiv = document.createElement('div');
        newDiv.id = 'gridCell';
        newDiv.textContent = `${i}`;
        gridBox.append(newDiv);
    }
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
    // colorValuesPage.textContent = text;

    cell.style.cssText = `background-color:rgb(${colors[0]} ${colors[1]} ${colors[2]})`;

}

drawGrid(16);

const gridCell = document.querySelectorAll('#gridCell');


gridCell.forEach((cell)=>{

    cell.addEventListener('mouseenter', ()=>{
        changeBackgroundColorRandomly(cell);
        console.log(`Enter ${cell.textContent}`);

    });

    cell.addEventListener('mouseleave', ()=>{
        changeBackgroundColorRandomly(cell);
        console.log(`Leave ${cell.textContent}`);

    });

});