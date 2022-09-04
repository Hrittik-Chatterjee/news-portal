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
        <li class="me-5 fs-6" id="cat${category.category_id}"  >
        <p class="nav-link active fw-normal"  aria-current="page" onclick="clicked(${category.category_id})"  >${category.category_name}</p>
         </li>
         `
         categoryContainer.appendChild(createUi)
    
    }
}
  
// click breaking news

const clicked=id=>{
   toggleLoader(true)
   noNewsFound(true)
        const loadCategoriesId =()=>{
            fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res=> res.json())
            .then (data=>putCatIdToWen(data.data.news_category))
        }

     loadCategoriesId()


    

    const putCatIdToWen =catIds=>{
        for (const catid of catIds){
            const loadNews=()=>{
                const url= `https://openapi.programming-hero.com/api/news/category/${catid.category_id}`
                fetch(url)
                .then(res => res.json())
                .then(data=>displayNews(data.data))
                
            }
             loadNews()



          
              const displayNews= newses=>{
                  
                  const newsContainer=document.getElementById('news-container')
                           for(const news of newses){
                            
                            const createDiv=document.createElement('div')
                            createDiv.classList.add('col')
                            createDiv.innerHTML=`
                              
<div class='card' onclick='newsId(${news._id})' >
  <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
    <p class="card-text text-truncate">${news.details}</p>
    <div class="mb-5"> 
    <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
    <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
  </div>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary d-block mt-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Show Details
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="staticBackdropLabel">${news.title}</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div><img src="${news.thumbnail_url}" class=" ms-5 p-5" alt="..."></div>
<div class="modal-body">
${news.details}
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

</div>
</div>
</div>
</div>
    
  </div>
</div>
                            
                            `
  newsContainer.appendChild(createDiv)
                          
 } } } }    }


const toggleLoader=isLoading=>{

    const loaderSection= document.getElementById('loader')
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
}

const noNewsFound= isFound=>{
    const noNewsSection= document.getElementById('newsFound')
    if(isFound){
        noNewsSection.classList.add('d-none')
    }
}
