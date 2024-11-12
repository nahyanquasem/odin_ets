const gridBox = document.querySelector('#gridBox');

const gridSizeButton = document.querySelector('#gridSizeButton');
const resetButton = document.querySelector('#reset');

const radioSelectionRandom = document.querySelector('#random');
const radioSelectionMonochrome = document.querySelector('#monochrome');

const colorPicker = document.querySelector('#color-picker');


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
    
}

function removeAllEventListeners(){
    
    gridBox.childNodes.forEach((cell) => {

        cell.removeEventListener('mouseenter', changeBackgroundColorRandomly);
        cell.removeEventListener('mouseleave', changeBackgroundColorRandomly);

    });
}

function addRandomColorEvents(){

    gridBox.childNodes.forEach((cell) => {

        cell.addEventListener('mouseenter', changeBackgroundColorRandomly);
        cell.addEventListener('mouseleave', changeBackgroundColorRandomly);

    });
}

function addMonoChromeEvents(){

    gridBox.childNodes.forEach((cell) => {
        cell.addEventListener('mouseenter', changeBackgroundColorMonochrome);
        cell.addEventListener('mouseleave', changeBackgroundColorMonochrome);

    });
    
}

function addSpecificColorEvents(){

    gridBox.childNodes.forEach((cell) => {
        cell.addEventListener('mouseenter', changeBackgroundColorSpecific);
        cell.addEventListener('mouseleave', changeBackgroundColorSpecific);

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

function changeBackgroundColorRandomly(event){
    let colors = randomColorGenerator();

    let cell = event.target;
    
    let text = `RED: ${colors[0]} GREEN: ${colors[1]} BLUE: ${colors[2]}`;

    cell.style.cssText = `background-color:rgb(${colors[0]} ${colors[1]} ${colors[2]})`;
    
    if (event.type === 'mouseenter'){console.log(`Enter ${cell.textContent} Color Value: ${text}`);}
    else if (event.type === 'mouseleave'){console.log(`Leave ${cell.textContent} Color Value: ${text}`);}
    
    
    
}

function changeBackgroundColorMonochrome(event){

    let colors = [0,0,0]

    let cell = event.target;
    
    let text = `RED: ${colors[0]} GREEN: ${colors[1]} BLUE: ${colors[2]}`;

    cell.style.cssText = `background-color:rgb(${colors[0]} ${colors[1]} ${colors[2]})`;

    if (event.type === 'mouseenter'){console.log(`Enter ${cell.textContent} Color Value: ${text}`);}
    else if (event.type === 'mouseleave'){console.log(`Leave ${cell.textContent} Color Value: ${text}`);}

}

function changeBackgroundColorSpecific(event, color){

    let colors = [parseInt(color.slice(1,3),16),parseInt(color.slice(3,5),16),parseInt(color.slice(5,7),16)];

    let cell = event.target;
    
    let text = `RED: ${colors[0]} GREEN: ${colors[1]} BLUE: ${colors[2]}`;

    cell.style.cssText = `background-color:rgb(${colors[0]} ${colors[1]} ${colors[2]})`;

    if (event.type === 'mouseenter'){console.log(`Enter ${cell.textContent} Color Value: ${text}`);}
    else if (event.type === 'mouseleave'){console.log(`Leave ${cell.textContent} Color Value: ${text}`);}

}

radioSelectionMonochrome.addEventListener('click', () =>{
    
    removeAllEventListeners();
    addMonoChromeEvents();
    console.log('The Monochrome radio button has been clicked');

});

radioSelectionRandom.addEventListener('click', ()=>{

    removeAllEventListeners();
    addRandomColorEvents();
    console.log('The Random radio button has been clicked');

});

colorPicker.addEventListener('change', (event)=>{

    let color = event.target.value;

    removeAllEventListeners();
    changeBackgroundColorSpecific(color);
    console.log('The color picker has been clicked')

});


resetButton.addEventListener('click', ()=>{

    console.log('The reset button has been clicked');

    gridBox.childNodes.forEach((cell) =>{

        cell.style.cssText = 'background-color:rgb(255 255 255)';

    });
    
});

