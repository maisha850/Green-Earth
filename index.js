const categoriesContainer=document.getElementById('categories-container')
const cardContainer=document.getElementById('card-container')
const cartContainer=document.getElementById('cart-container')
const detailsContainer=document.getElementById('details-con')
const priceCount=document.getElementById('priceCount')
let clearCart=[]
let cartbox=[]
// categories
const loadCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=> res.json())
    .then(data=>displayCategories(data.categories))
}
const displayCategories=(cats)=>{
   
  
categoriesContainer.innerHTML=""
categoriesContainer.innerHTML=`<h3 onclick="loadAlltrees()" id="allTrees">All Trees </h3>`

cats.forEach(cat => {
    const div=document.createElement('div')
    div.innerHTML=`
    <div class=" mt-2">
    <h3 onclick="loadcards('${cat.id}')" id="cat${cat.id}">${cat.category_name}</h3>
    </div>`
   categoriesContainer.appendChild(div)
   

})
categoriesContainer.addEventListener('click',(e)=>{
    const allh3=document.querySelectorAll('h3')
    allh3.forEach(h3=>{
          h3.classList.remove('active')
    })
    if(e.target.localName==='h3'){
        // console.log(e.target.id)
        e.target.classList.add('active')
           loadcards(e.target.id)
    }
 
})
 

}

const loadAlltrees=()=>{
    fetch(`https://openapi.programming-hero.com/api/plants`)
    .then(res=>res.json())
    .then(data=>displaycards(data.plants))
}


// cards
const loadcards=(id)=>{
     loadingSpinner(true)
    
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res=> res.json())
    .then(data=>displaycards(data.plants))
}
const displaycards=(cards)=>{

    cardContainer.innerHTML=''
    cards.forEach(card =>{
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="bg-white p-4 rounded-lg h-full">
                    <img class="md:w-[311px] w-full md:h-[186px] h-[220px] object-cover rounded-lg" src="${card.image}" alt="">
                    <h3 onclick="loadtreeDetails(${card.id})" id="${card.id}" class="font-semibold text-sm mt-3">${card.name}</h3>
                    <p class="text-xs text-gray-500 mt-2 h-[60px]">${card.description}</p>
                 <div class="flex justify-between items-center mt-6">
                     <h3 class="font-semibold text-sm text-[#15803D] bg-[#DCFCE7] rounded-3xl px-3 py-1">${card.category}</h3>
                    <h3 class="font-semibold text-sm">৳<span>${card.price}</span></h3>
                 </div>
                 <button id="${card.id}" class="mt-5 font-medium text-white bg-[#15803D] py-3 w-full rounded-3xl cartbtn">Add to cart</button>

                  </div>`
                  cardContainer.appendChild(div)
    })
    loadingSpinner(false)
    
}
cardContainer.addEventListener('click',(e)=>{
     
     if(e.target.classList.contains("cartbtn")){
         const name= e.target.parentNode.childNodes[3].innerText
    const price=e.target.parentNode.childNodes[7].childNodes[3].childNodes[1].innerText
     const priceNum=Number(price)
     const id=e.target.parentNode.childNodes[3].id
     

     alert(`${name} has been added to the cart`)

         const cart={
        name: name,
        price:priceNum,
        id:id
        
     }
      cartbox.push(cart)
     showCarts(cartbox)
          
     
     }
        
         
          
 const total = cartbox.reduce((sum, item) => sum + item.price, 0);
    priceCount.innerText = total;
    

     
})

// spinner

const loadingSpinner=(status)=>{
  const spinner=document.getElementById('spinner')
  const cardContainer=document.getElementById('card-container')
  if(status===true){
    
 spinner.classList.remove('hidden')
    cardContainer.classList.add('hidden')
  }
  else{
       spinner.classList.add('hidden')
    cardContainer.classList.remove('hidden')
  }
}

// cart
const handleClearCart=(id)=>{

      cartbox = cartbox.filter((cart) => cart.id !== id);
  showCarts(cartbox);
  const total = cartbox.reduce((sum, item) => sum + Number(item.price), 0);
  priceCount.innerText = total;

}

const showCarts=(carts)=>{
    

    cartContainer.innerHTML=''
    for(let cart of carts){
        const div=document.createElement('div')
        div.innerHTML=`<div class="bg-[#F0FDF4] rounded-xl px-3 py-2 mt-3 flex justify-between">
                       
                        <div>
                        <h3 class="font-bold">${cart.name}</h3>
                        <p class="text-gray-500"><span>৳</span>${cart.price} x 1</p>
                        </div>
                        <p onclick="handleClearCart('${cart.id}')" id="${cart.id}">❌</p>
                       
                      </div>`
                      
                      cartContainer.appendChild(div)
    }

}

// modal
const loadtreeDetails=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res=>res.json())
    .then(data=>displayTreeDetails(data.plants))
}

const displayTreeDetails=(card)=>{
    detailsContainer.innerHTML=`
        <div class="bg-white p-4 space-y-2 ">
        <h3 class="font-bold text-xl mt-3">${card.name}</h3>
                    <img class="w-1/2 h-1/2" src="${card.image}" alt="">
                    <h3><span class="font-bold">Category:</span> ${card.category}</h3>
                     <h3><span class="font-bold">Price:</span>৳${card.price}</h3>
                    <p><span class="font-bold">Description:</span>${card.description}</p>
                 
        
                  </div>`
                  
    

    document.getElementById('myModal').showModal()
}




loadAlltrees()
loadCategories()
