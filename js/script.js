console.log('Hello Js');
let count = 1;
let priceCount = 0;
let congTotal = document.getElementById('congrTotal');
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
    const total = document.getElementById('total');
    total.innerText = priceCount.toFixed(2);
    congTotal.innerText = priceCount.toFixed(2);

    document.getElementById('btnCoupon').addEventListener('click', function () {
      const discountPrice = document.getElementById('discountPrice');
      const total = document.getElementById('total');
      const coupon = document.getElementById('couponId').value;
      const couponCode = coupon.toLowerCase();
      if (priceCount >= 3000 && couponCode === 'ats20') {
        const discount = (priceCount * 20) / 100;
        discountPrice.innerText = discount.toFixed(2);
        const totalP = priceCount - discount;
        total.innerText = totalP.toFixed(2);
        congTotal.innerText = totalP.toFixed(2);
        document.getElementById('couponId').value = '';
        document.getElementById('btnCoupon').innerText = 'Applied';
      }
    });

    document.getElementById('purchase').addEventListener('click', function () {
      const mass = document.getElementById('congratulateMassage');
      const purchase = document.getElementById('purchaseLink');
      purchase.setAttribute('href', '#banner');
      //   document.getElementById('body').style.filter='blur'
      mass.classList.remove('hidden');
      document.getElementById('goHome').addEventListener('click', function () {
        mass.classList.add('hidden');
        window.location.reload();
        // goHome();
      });
    });
  });
}

function goHome() {
  const cardList = (document.getElementById('productItem').innerHTML = '');
  const discountPrice = (document.getElementById('discountPrice').innerText =
    '0.00');
  const total = (document.getElementById('total').innerText = '0.00');
  const totalPrice = (document.getElementById('totalPrice').innerText = '0.00');
}
