const form = document.getElementById("product-form")
    const productList = document.getElementById("product-list")

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let name = document.getElementById("product-name").value
      let price = document.getElementById("product-price").value
      let file = form.querySelector('input[type="file"]').files[0]

      if (!file) {
        alert("Please select an image")
        return
      }

      let reader = new FileReader()
      reader.onload = function (event) {
        let li = document.createElement("li")
        li.classList.add("product-card")

        li.innerHTML = `
          <img src=${event.target.result} alt=${name}>
          <h3>${name}</h3>
          <p>${price}</p>
          <button onclick=this.parentElement.remove()>Remove</button>`

        productList.appendChild(li)
      }
      reader.readAsDataURL(file)

      form.reset()
    })