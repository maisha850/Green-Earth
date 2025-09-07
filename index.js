const categoriesContainer=document.getElementById('categories-container')
const cardContainer=document.getElementById('card-container')
// categories
const loadCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=> res.json())
    .then(data=>displayCategories(data.categories))
}
const displayCategories=(cats)=>{
  
categoriesContainer.innerHTML=""
cats.forEach(cat => {
    const div=document.createElement('div')
    div.innerHTML=`<div class=" mt-2">
    <h3>${cat.category_name}</h3>
    </div>`
   categoriesContainer.appendChild(div)
})
 

}

// cards
const loadcards=()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res=> res.json())
    .then(data=>displaycards(data.plants))
}
const displaycards=(cards)=>{
cardContainer.innerHTML=''
cards.forEach(card=>{
    const div=document.createElement('div')
    div.innerHTML=`
       <div class="bg-white p-4 rounded-lg h-full">
                    <img class="w-[311px] h-[186px] object-cover rounded-lg" src="${card.image}" alt="">
                    <h3 class="font-semibold text-sm mt-3">${card.name}</h3>
                    <p class="text-xs text-gray-500 mt-2">${card.description}</p>
                 <div class="flex justify-between items-center mt-5">
                     <button class="font-semibold text-sm text-[#15803D] bg-[#DCFCE7] rounded-3xl px-3 py-1">${card.category}</button>
                    <h3 class="font-semibold text-sm">${card.price}</h3>
                 </div>
                 <button class="mt-5 font-medium text-white bg-[#15803D] py-3 w-full rounded-3xl">Add to cart</button>

                  </div>`
                  cardContainer.appendChild(div)
})
}
loadcards()
loadCategories()