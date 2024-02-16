console.log('Hello Js');
let count = 1;
let priceCount = 0;
const cards = document.getElementsByClassName('card');
for (const card of cards) {
  card.addEventListener('click', function () {
    const cardNam = card.querySelector('h2').innerText;
    const cardNameCreate = document.createElement('p');
    cardNameCreate.innerText = count + '. ' + cardNam;
    const cardList = document.getElementById('productItem');
    cardList.appendChild(cardNameCreate);
    count++;

    // prices count
    const prices = card.querySelector('span');
    const price = parseFloat(prices.innerText);
    priceCount += price;
    const totalPrice = document.getElementById('totalPrice');
    totalPrice.innerText = priceCount.toFixed(2);
    // console.log(totalPrice);
  });
}
