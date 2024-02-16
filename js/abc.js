/** 
const htmlText = document.getElementById('body');
const createText = document.createElement('div');
createText.innerHTML = `  <!-- banner section  -->
<section
  id="banner"
  class="bg-[#F9F6E2;] min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-[4%] lg:px-[5%] text-center pb-8 mb-24"
>
  <div class="w-full lg:w-1/2 space-y-12">
    <h3 class="text-black text-3xl font-medium">---SALE FEVER---</h3>
    <h1 class="text-black font-bold text-5xl w-11/12 m-auto">
      Purchase TK 3000 or above & get
      <span class="text-[#E527B2]">20% off</span>
    </h1>
    <p class="text-xl">
      Use Promo Code
      <span class="bg-[#E527B2] text-white px-4 py-1 rounded-lg"
        >ATS20</span
      >
    </p>
  </div>
  <div class="w-full lg:w-1/2">
    <img
      class="m-auto w-full max-w-[500px]"
      src="./images/Summer 1.png"
      alt=""
    />
  </div>
</section>
<!-- Product section  -->
<main class="px-[5%] text-center sm:text-left">
  <h1 class="text-[37px] font-semibold to-black pb-5">Kitchenware</h1>
  <div class="flex flex-col sm:flex-row">
    <div class="w-3/4 m-auto md:m-0">
      <!-- Card Section one -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/img1.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            K. Accessories
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">1439.00</span>TK
          </p>
        </div>
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/2.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            Pizza cutter
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">1039.00</span>TK
          </p>
        </div>
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/3.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            Home Cooker
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">2390.00</span>TK
          </p>
        </div>
      </div>

      <!-- Card Section two -->
      <h1 class="text-[37px] font-semibold to-black pt-7 pb-5">
        Sportswear
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/4.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            Sports Back Cap
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">540.00</span>TK
          </p>
        </div>
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/5.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            Full Jersey Set
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">1190.00</span>TK
          </p>
        </div>
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/6.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            Sports cates
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">2590.00</span>TK
          </p>
        </div>
      </div>
      <!-- Card Section Three -->
      <h1 class="text-[37px] font-semibold to-black pt-7 pb-5">
        Furniture
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/7.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            Single Relax Chair
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">4200.00</span>TK
          </p>
        </div>
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/8.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            Children play
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">4000.00</span>TK
          </p>
        </div>
        <div
          id=""
          class="card text-center bg-white rounded-lg p-4 max-w-[380px] cursor-pointer"
        >
          <div class="bg-[#F3F3F3] h-52 p-5 mb-5">
            <img class="h-full m-auto" src="./images/9.svg" alt="" />
          </div>
          <div class="flex flex-row justify-center">
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img class="h-[22px] w-[22px]" src="./images/star.svg" alt="" />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
            <img
              class="h-[22px] w-[22px]"
              src="./images/hafStr.svg"
              alt=""
            />
          </div>
          <h2 id="productName" class="to-black text-xl font-semibold">
            Flexible Sofa
          </h2>
          <p class="text-[#252525] text-xl font-normal">
            <span class="price">9390.00</span>TK
          </p>
        </div>
      </div>
    </div>
    <!-- Pricing Calculate part  -->
    <div
      class="mt-6 mx-auto sm:mt-0 max-w-[380px] md:w-1/2 lg:w-2/6 xl:w-3/12 px-4"
    >
      <div class="w-full bg-white rounded-lg py-6 px-4">
        <h2 class="text-black font-medium text-xl">Have coupon?</h2>
        <div class="flex flex-row w-full">
          <input
            id="couponId"
            class="px-3 py-1 text-[#292929] text-lg font-normal rounded-l-lg w-full border border-solid border-[#333333] border-r-0 outline-none"
            type="text"
            placeholder="Coupon code"
          /><button
            id="btnCoupon"
            class="bg-[#E527B2] hover:bg-[#8d196e] px-4 py-1 text-lg text-white font-semibold rounded-r-lg"
          >
            Apply
          </button>
        </div>
      </div>
      <div class="w-full bg-white rounded-lg mt-5 pt-6 px-4">
        <h2 class="text-black font-medium text-xl underline">
          Product Items:
        </h2>
        <div id="productItem" class="py-2 text-xl font-normal"></div>
        <hr class="bg-[rgba(17, 17, 17, 0.15)] h-[1px] w-full my-3" />
        <div class="space-y-3">
          <p class="font-medium text-xl">
            Total price:
            <span class="text-[rgba(17, 17, 17, 0.55); ] font-normal"
              ><span id="totalPrice">0.00</span>TK
            </span>
          </p>
          <p class="font-medium text-xl">
            Discount:
            <span class="text-[rgba(17, 17, 17, 0.50); ] font-normal"
              ><span id="discountPrice">0.00</span>TK
            </span>
          </p>
          <p class="font-medium text-xl">
            Total:
            <span class="text-[rgba(17, 17, 17, 0.50); ] font-normal"
              ><span id="total">0.00</span>TK
            </span>
          </p>
        </div>
        <hr class="bg-[rgba(17, 17, 17, 0.15)] h-[1px] w-full my-3" />
        <button
          id="purchase"
          class="w-full py-2 bg-[#E527B2] hover:bg-[#8d196e] text-white font-semibold text-sm rounded-lg relative -bottom-5"
        >
          Make Purchase
        </button>
      </div>
    </div>
  </div>
  <p class="text-center text-base pt-24 pb-4">
    This site developed by
    <a class="text-pink-600 italic font-medium" href="#">Md Ataullah</a>
  </p>
</main>

<!-- Congratulations massage -->
<div
  id="congratulateMassage"
  class="p-14 rounded-2xl bg-white shadow-lg shadow-pink-500 max-w-[600px] text-center space-y-3 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[600px] hidden"
>
  <img class="h-40 w-40 m-auto" src="./images/congratulat.svg" alt="" />
  <h1 class="text-4xl font-bold text-black">Congratulations</h1>
  <p class="text-lg font-normal text-[rgba(17, 17, 17, 0.50)]">
    Your Purchase the product
  </p>
  <button
    id="goHome"
    class="bg-[#E527B2] hover:bg-[#8d196e] duration-150 px-5 py-2 text-white font-semibold rounded-lg"
  >
    <a href="#banner"> Go Home </a>
  </button>
</div>`;

htmlText.appendChild(createText);
*/
