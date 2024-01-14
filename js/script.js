window.addEventListener('DOMContentLoaded', function() { //скрипт заработает, когда загрузятся теги
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    function createCart() {
        let cart = document.createElement('div'), //создает элемент
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');
        
        cart.classList.add('cart'); //создает класс для стиля элемента
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = 'В нашей корзине: '; //добавляем текс в элементы
        closeBtn.textContent = 'Закрыть';

        document.body.appendChild(cart); //в конец body подставится cart (это div) со стилем cart
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }

    createCart();

    let field = document.querySelector('.cart-field'), /////////////////////////// было card
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');

    function openCart() {
        cart.style.display = 'block';
    }
    function closeCart() {
        cart.style.display = 'none';
    }

    openBtn.addEventListener('click', openCart); // когда кликаю на open сработает openCart и display block
    close.addEventListener('click', closeCart); // когда кликаю на close сработает closeCart и display none

    
    for (let i = 0; i < buttons.length; i++) { //i количество кнопок
        buttons[i].addEventListener('click', function() { // случае click по конкретной кнопке покупки
            let item = products[i].cloneNode(true), // записываем в item копию products конкретного (true дает глубокое копирование всего что внутри лежит)
                btn = item.querySelector('button'); //присваеваем btn значение button из item

            btn.remove(); // удаляем btn
            field.appendChild(item); // в field (поле на корзине) кладем item (наша копия)
            products[i].remove(); //удаляем со страницы уже не нужный products (на котором нажата кнопка была)
        });
    }
    
});





// buttons.forEach((item, i) => {
//     item.addEventListener('click', () => { // случае click по конкретной кнопке покупки
//         let item = products[i].cloneNode(true), // записываем в item копию products конкретного (true дает глубокое копирование всего что внутри лежит)
//             btn = item.querySelector('button'); //присваеваем btn значение button из item

//         btn.remove(); // удаляем btn
//         field.appendChild(item); // в field (поле на корзине) кладем item (наша копия)
//         products[i].remove(); //удаляем со страницы уже не нужный products (на котором нажата кнопка была)
//     });
// });