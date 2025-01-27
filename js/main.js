let cards = document.querySelector('#cards')
let count = document.querySelector('#count')
let product = document.querySelector('#product')
let productImage = document.querySelector('#productImage')
let price = document.querySelector('#price')
let quantity = document.querySelector('#quantity')
let input = document.querySelector('#input')

function renderCard(){
    cards.innerHTML = null
    products.forEach((prod, i )=>{
        let card_div = document.createElement('div')
        card_div.classList.add('gap-[15px]', 'border' , 'rounded-lg')

        let images = document.createElement('img')
        images.classList.add('w-[300px' , 'rounded-lg', 'object-cover')
        images.src = prod.productImage
        images.alt = prod.product

        let cards_div = document.createElement('div')
        cards_div.classList.add('py-1', 'px-3')

        let nomi = document.createElement('p')
        nomi.textContent = prod.product.length>= 100 ? `${prod.product.slice(0, 100) + "..."}`: prod.product

        let soni = document.createElement('p')
        soni.classList.add('font-bold')
        soni.textContent = "Mahsulot soni: " + prod.quantity;

        let narxi = document.createElement('p')
        narxi.classList.add('font-bold')
        narxi.textContent = "Mahsulot narxi: " + prod.price

        let button = document.createElement('button')
        button.classList.add('bg-blue-600', 'py-1', 'px-3', 'active:bg-blue-400', 'rounded-lg', 'text-white')
        button.textContent = "Sotib olish "

        button.setAttribute('onclick' , `sotibOlish(${i})`)


        
        cards_div.appendChild(nomi)
        cards_div.appendChild(soni)
        cards_div.appendChild(narxi)
        cards_div.appendChild(button)
        
        card_div.appendChild(images)
        card_div.appendChild(cards_div)

        cards.appendChild(card_div)
        
    })
}

renderCard()


let savatcha = []

function sotibOlish(i){
    if(savatcha.length == 0){
        let new_prod = {...products[i] , count: 1};
        savatcha.push(new_prod);
    }else{
        let finded = savatcha.find((item) => {
            return item.id == products[i].id;
        });
        if(!finded){
            let new_prod = {...products[i] , count :1};
            savatcha.push(new_prod);
        }else{
            finded.count += 1;
        }
    }

    products[i].quantity -= 1;
    if(products[i].quantity == 0){
        products.splice(i , 1)
    }

    renderCard()
    count.textContent = savatcha.length

}

function btnApp(){
    input.classList.remove('hidden')
    cards.classList.add('hidden')
}

function appBtn(){
    try {
        if(!product.value) throw Error ("Mahsulot nomni kirting")
        if(!productImage.value) throw Error ("Rasmni URLni kirting")
        if(!price.value) throw Error ("Mahsulot narxini kirting")
        if(!quantity.value) throw Error ("Mahsulot sonini kirting")


        let newProduct = new Addbtn( product.value , productImage.value , price.value , quantity.value)
        products.push(newProduct)
        renderCard()
        cards.classList.remove('hidden')
        input.classList.add('hidden')

    } catch (error) {
        alert(error.message)
    }

}


function Addbtn(_product, _productImage, _price, _quantity){
    this.product = _product
    this.productImage = _productImage
    this.price = _price
    this.quantity = _quantity
}