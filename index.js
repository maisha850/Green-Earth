const categoriesContainer=document.getElementById('categories-container')
const cardContainer=document.getElementById('card-container')
const cartContainer=document.getElementById('cart-container')
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
    if(e.target.localName='h3'){
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
    console.log(id)
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
                    <img class="w-[311px] h-[186px] object-cover rounded-lg" src="${card.image}" alt="">
                    <h3 id="${card.id}" class="font-semibold text-sm mt-3">${card.name}</h3>
                    <p class="text-xs text-gray-500 mt-2">${card.description}</p>
                 <div class="flex justify-between items-center mt-5">
                     <button class="font-semibold text-sm text-[#15803D] bg-[#DCFCE7] rounded-3xl px-3 py-1">${card.category}</button>
                    <h3 class="font-semibold text-sm">৳${card.price}</h3>
                 </div>
                 <button id="${card.id}" class="mt-5 font-medium text-white bg-[#15803D] py-3 w-full rounded-3xl cartbtn">Add to cart</button>

                  </div>`
                  cardContainer.appendChild(div)
    })
    
}
cardContainer.addEventListener('click',(e)=>{
    console.log(e)
    
     if(e.target.innerText="Add to cart"){
         const name= e.target.parentNode.childNodes[3].innerText
     const price=e.target.parentNode.childNodes[7].childNodes[3].innerText
     alert(`${name} has been added to the cart`)

         const cart={
        name: name,
        price:price
     }
      cartbox.push(cart)
     showCarts(cartbox)
          
     
     }
    
    
    
    
})

// cart

const showCarts=(carts)=>{
    cartContainer.innerHTML=''
    for(let cart of carts){
        const div=document.createElement('div')
        div.innerHTML=`<div class="bg-[#F0FDF4] rounded-xl px-3 py-2 mt-3 flex justify-between">
                       
                        <div>
                        <h3>${cart.name}</h3>
                        <p>${cart.price}</p>
                        </div>
                        <p>❌</p>
                       
                      </div>`
                      cartContainer.appendChild(div)
    }
}


loadAlltrees()
loadCategories()
