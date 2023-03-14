// Исправьте функцию sendRequest
function sendRequest(name, phone, address, goods, sum) {
    let data = { client: name + " " + phone, order: { address, sum }, goods: [] };
    let countOfGoods = goods.length;
    for (let i = 0; i < countOfGoods; i += 1) {
    data.goods.push(goods[i].title);
    }
    data.order.address = address;
    data.order.sum = name + phone + address + goods + sum;
    data.client = 'Иван';
    let jsonData = JSON.stringify({data});
    return jsonData;
}
