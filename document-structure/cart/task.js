const productAdd = document.querySelectorAll('.product__add')
const productQuanity = document.querySelectorAll('.product__quantity-controls')
const productValue = document.querySelectorAll('.product__quantity-value');
const cart = document.querySelector('.cart__products')

for (let i = 0; i < productQuanity.length; i++) {
    productQuanity[i].addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('product__quantity-control_inc')) {
            productValue[i].textContent++
        }
        if (e.target.classList.contains('product__quantity-control_dec')) {
            if (productValue[i].textContent > 1) {
                productValue[i].textContent--;
            }
        }
    })
}

for (let product of productAdd) {
    product.addEventListener('click', () => {
        const productList = Array.from(cart.querySelectorAll('.cart__product'));
        const quantity = product.closest('.product').querySelector('.product__quantity-value').textContent;
        const id = product.closest('.product').getAttribute('data-id');
        const img = product.closest('.product').querySelector('.product__image').getAttribute('src');
        const index = productList.findIndex(item => item.getAttribute('data-id') == id);
        if (index == -1) {
            cart.innerHTML += `
            <div class='cart__product' data-id='${id}'>
                <img class='cart__product-image' src='${img}'>
                <div class='cart__product-count'>${quantity}</div>
            </div>`
        } else {
            productList[index].querySelector('.cart__product-count').textContent = Number(productList[index].querySelector('.cart__product-count').textContent) + Number(quantity);
        }
        product.closest('.product').querySelector('.product__quantity-value').textContent = 1;
    })
}
