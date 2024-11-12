const colorPicker = document.querySelector('#color-picker');
const preview = document.querySelector('#previewColor');
const final = document.querySelector('#finalColor');

colorPicker.addEventListener('input', instantColorUpdate, false);
colorPicker.addEventListener('change', finalColorUpdate, false);

function instantColorUpdate(event){

    preview.style.color = event.target.value;
    
}

function finalColorUpdate(event){

    final.style.color = event.target.value;

}