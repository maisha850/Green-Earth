const categoriesContainer=document.getElementById('categories-container')
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
loadCategories()