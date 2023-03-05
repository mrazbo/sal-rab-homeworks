function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    
    

    
    let itemCountText = ``;
    itemCountText = itemCountText + product.count; 
    itemCountText +=  ` × `; // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
    itemCountText += product.price; // 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
    itemCountText = itemCountText + ` ₽ = `; // 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    let sum = product.count * product.price; // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
    itemCountText += sum;// 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
    itemCountText = itemCountText + ` ₽`;// 8 . Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
