let searchForm = document.querySelector('.pesquisar-form');

document.querySelector('#pesquisar-btn').onclick = () => {

    searchForm.classList.toggle('active');

}

let shoppingCart = document.querySelector('.shopping-cartao');

document.querySelector('#cart-btn').onclick = () => {

    shoppingCart.classList.toggle('active');

}

let loginForm = document.querySelector('.login-formulario');

document.querySelector('#login-btn').onclick = () => {

    loginForm.classList.toggle('active');

}