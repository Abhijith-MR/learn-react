let title = document.querySelector('.title');
let input = document.querySelector('.input');
let button = document.querySelector('.btn');
let container = document.querySelector('.container');
let change = document.querySelector('.change');
let image = document.querySelector('.img');

change.addEventListener('click',function(){
    image.setAttribute('src','./cat5.jpg')
})

button.addEventListener('click',function(event){
    event.preventDefault()
    let text = input.value
    let element = document.createElement('h1');
    element.innerText = text;
    container.insertAdjacentElement('beforebegin',element)
    
})