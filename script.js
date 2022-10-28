const pixelValue = document.getElementById('pixelValue');
const slider = document.getElementById('sizeRange');
const etchGrid = document.getElementById('etchGrid')


slider.oninput = function() {
    etchGrid.innerHTML = ""
    pixelValue.innerHTML = `${this.value} x ${this.value}`;


    gridValue = (value) => {
        console.log(slider.value)
    }

    if(this.value > 0){
        gridValue(this.value);
        grid(this.value);
    }
}

grid = (gridsize) => {
    etchGrid.style.gridTemplateRows = `repeat(${gridsize},1fr)`
    etchGrid.style.gridTemplateColumns = `repeat(${gridsize},1fr)`

    console.log(gridsize)
    for(let i = 0; i < gridsize; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('etchBoxes')
        etchGrid.appendChild(newDiv)
    }
}


