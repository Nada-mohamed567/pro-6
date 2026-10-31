let getCart = localStorage.getItem("productInCart")
let allProducts = document.querySelector(".products")

let addedItem = getCart ? JSON.parse(getCart) : [];
if(getCart){
   let item = JSON.parse(getCart)
   drowProduct(item)
}

function drowProduct(products){
    let y = products.map((item) => {
        return `
            <div class="product-item">
                <img src="${item.imageUrl}" alt="">
                <div class="product-desc">
                    <h2>${item.title}</h2> 
                    <p>Fashion product</p>
                    <span>${item.color}</span>
                    <p>Price: ${item.price} EGP</p>
                </div>
                <div class="product-action">
                    <button class="add_to_cart" onclick="removeItem(${item.id})">Remove From Cart</button>
                </div>
            </div>
        `
    })

    allProducts.innerHTML = y.join(" ");
}

drowProduct(addedItem)

///////////////// remove cart /////////
function removeItem(id) {
    let index = addedItem.findIndex((item) => item.id === id)
    if (index !== -1) {
        addedItem.splice(index, 1)
    }

    localStorage.setItem("productInCart", JSON.stringify(addedItem))
    drowProduct(addedItem)
}