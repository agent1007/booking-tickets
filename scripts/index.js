let moreButton = document.querySelector('.block__button'); 
let blockContainerHour = document.querySelectorAll('.block__container-hour'); 
console.log(blockContainerHour)

function render() { 
    blockContainerHour.forEach(el => el.classList.remove('block__button_hidden'))
} 

function clickButton() { 
    moreButton.classList.add('block__button_hidden'); 
    render();
} 

moreButton.addEventListener('click', clickButton);  

