let cartItem = document.querySelector('.cartItem');
    let total_price = 0;
    let cart = [];
    let cartCount = document.getElementById("cartCount");
    let cartPopup = document.getElementById("cartPopup");

    function add_to_cart(name, price, img) {
      cart.push({ name, price, img });
      display(cart);
    }

    function remove_from_cart(index) {
      cart.splice(index, 1);
      display(cart);
    }

    function display(items) {
      cartItem.innerHTML = "";
      total_price = 0;

      items.forEach((x, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
          <img src="${x.img}" alt="${x.name}">
          <div class="cart-details">
            <strong>${x.name}</strong><br>₹${x.price}
          </div>
          <button class="remove-btn" onclick="remove_from_cart(${index})">Remove</button>
        `;
        cartItem.appendChild(li);
        total_price += x.price;
      });

      document.querySelector('#total').innerText = total_price;
      cartCount.innerText = items.length; // update count
    }

    function toggleCart() {
      cartPopup.classList.toggle("active");
    }