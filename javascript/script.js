let allProducts = document.querySelector(".products")

let products = [
    {
        id: 1,
        title: "Black Jacket",
        color: "Black",
        price: 750,
        imageUrl: "image/black jacket.webp"
    },
    {
        id: 2,
        title: "Brown Handbag",
        color: "Brown",
        price: 600,
        imageUrl: "image/Brown Handbag.jpg"
    },
    {
        id: 3,
        title: "White Shirt",
        color: "White",
        price: 350,
        imageUrl: "image/White Shirt.jpg"
    },
    {
        id: 4,
        title: "Blue Jeans",
        color: "Blue",
        price: 500,
        imageUrl: "image/jeans.jpg"
    },
    {
        id: 5,
        title: "Pink Handbag",
        color: "Pink",
        price: 650,
        imageUrl: "image/bag2.jpg"
    },
    {
        id: 6,
        title: "Winter Coat",
        color: "Gray",
        price: 1000,
        imageUrl: "image/coat.jpg"
    },
    { 
        id: 7,
        title: "White Sneakers", 
        color: "White", 
        price: 950, 
        imageUrl: "image/shoes1.jpg" 
    },
    { 
        id: 8, 
        title: "Black Heels", 
        color: "Black", 
        price: 1100, 
        imageUrl: "image/shoes2.jpg" 
    },
    { 
        id: 9, 
        title: "Casual Shoes", 
        color: "Brown", 
        price: 800, 
        imageUrl: "image/shoes3.jpg"
    },
    { 
        id: 10, 
        title: "Pink Sneakers",
        color: "Pink", 
        price: 900, 
        imageUrl: "image/shoes4.jpg" 
    }
];

function drowProduct() {
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
                    <button class="add_to_cart" onclick="addToCart(${item.id})">Add To Cart</button>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        `
    })

    allProducts.innerHTML = y.join(" ");
}

drowProduct()
///////////////////////////////////////

let viewProductsDiv = document.querySelector(".viewProduct div")
let badge = document.querySelector(".badge")

let addedItem = localStorage.getItem('productInCart') ? JSON.parse(localStorage.getItem('productInCart')) : [];
if (addedItem){
    addedItem.map((item) => {
        viewProductsDiv.innerHTML += `<p>${item.title}</p>`
    })

    badge.style.display = "block" 
    badge.innerHTML = addedItem.length
}


function addToCart(id) {
    let chooseItem = products.find((item) => item.id === id) 
    viewProductsDiv.innerHTML += `<p>${chooseItem.title}</p>`

    addedItem =[...addedItem , chooseItem]
    localStorage.setItem("productInCart" , JSON.stringify(addedItem))
    
    let viewProductsDivP = document.querySelectorAll(".viewProduct div p")
    badge.innerHTML = viewProductsDivP.length 
    badge.style.display = "block" 
     
    // viewProduct.style.display = "block"    
  
}


let cart = document.querySelector(".cart")
let viewProduct = document.querySelector(".viewProduct")

cart.addEventListener("click", () => {
    if (viewProduct.innerHTML != ""){
        if (viewProduct.style.display == "block"){
            viewProduct.style.display = "none"
        }else{
             viewProduct.style.display = "block" 
        }
    }
})
   