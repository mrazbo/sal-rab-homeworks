function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    
    // Задание №1.1. Оповещение о добавлении в корзину
    let message;
    1 message = productName;
    1 message = message + " ";
    1 message = message + "за";
    1 message = message + " ";
    1 message = productPrice;
    1 message = message + " ";
    1 message = "теперь в корзине!";
    console.log(message);

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    
    let newValue;
    let newValue = oldValue;
    newValue++;

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине
    let newSum = oldSum + difference;
    let newSumText = newSum + ' ₽'; 
    newSumText = '${newSum} ₽';



    // Конец решения задания №1.3.

    return newSumText;
}

