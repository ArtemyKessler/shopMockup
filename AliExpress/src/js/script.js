window.addEventListener("DOMContentLoaded", () => {
  const cartWrapper = document.querySelector(".cart__wrapper"),
    cart = document.querySelector(".cart"),
    open = document.querySelector("#cart"),
    close = document.querySelector(".cart__close"),
    goodsButton = document.querySelectorAll(".goods__btn"),
    products = document.querySelectorAll(".goods__item");

  function openCart() {
    cart.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    cart.style.display = "none";
    document.body.style.overflow = "";
  }

  open.addEventListener("click", openCart);
  close.addEventListener("click", closeCart);

  goodsButton.forEach(function(btn, i) {
    btn.addEventListener("click", () => {
      let item = products[i].cloneNode(true),
        trigger = item.querySelector("button"),
        removeBtn = document.createElement("div"),
        empty = cartWrapper.querySelector(".empty");

      trigger.remove();

      removeBtn.classList.add("goods__item-remove");
      removeBtn.innerHTML = "&times";
      item.appendChild(removeBtn);

      cartWrapper.appendChild(item);
      if (empty) {
        empty.remove();
      }
    });
  });
});
