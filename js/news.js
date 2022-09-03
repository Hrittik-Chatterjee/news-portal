// categories function

const loadCategories =()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=> res.json())
    .then (data=>displayCategories(data.data.news_category))
}
loadCategories()


const displayCategories=categories=>{
    const categoryContainer=document.getElementById('categories-container')
    for(const category of categories){
        const createUi=document.createElement('ul')
        createUi.classList.add('navbar-nav' ,'me-auto', 'mb-2', 'mb-lg-0')
        createUi.innerHTML=`
        <li class="me-5 fs-6">
        <a class="nav-link active fw-normal" aria-current="page" id="${category.category_id}">${category.category_name}</a>
         </li>
         `
         categoryContainer.appendChild(createUi)
        
    }
}




    // breaking news Function
const loadBreakingNews =()=>{
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data=> displayNews(data.data))
}
loadBreakingNews()
const displayNews= newses=>{
    const newsContainer=document.getElementById('news-container')
   for(const news of newses){
    const createDiv=document.createElement('div')
    createDiv.classList.add('col')
    createDiv.innerHTML=`
      <div class="card" >
            <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
              <p class="card-text text-truncate">${news.details}</p>
              <div> 
              <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
              <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
              <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
              </div>
            </div>
        </div>
    
    `
    newsContainer.appendChild(createDiv)
   }
}







