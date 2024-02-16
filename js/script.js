console.log('Hello Js');
const cards = document.getElementsByClassName('card');
for (const card of cards) {
  card.addEventListener('click', function () {
    const cardNam = card.querySelector('h2').innerText;
    const cardNameCreate = document.createElement('p');
    cardNameCreate.innerText = cardNam;
    const cardList = document.getElementById('productItem');
    cardList.appendChild(cardNameCreate);
  });
}
