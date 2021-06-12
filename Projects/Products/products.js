let name = document.querySelector('.name');
let form = document.querySelector('.form');
let price = document.querySelector('.price');
let products = document.querySelector('.products');

form.addEventListener('submit',function(event){
    event.preventDefault()

    let product=`
        <div class='product'
             <h3>${name.value}</h3>
             <p>${price.value}</p>
        </div>`
    
    products.insertAdjacentHTML('afterbegin',product)
    name.value=''
    price.value=''
})