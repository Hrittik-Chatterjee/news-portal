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
                      }
        }    
}


const toggleLoader=isLoading=>{

    const loaderSection= document.getElementById('loader')
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
}

// const clicked=id=>{

//     if(id=='1'){
//        document.getElementById
//         const loadNews =()=>{
//             fetch('https://openapi.programming-hero.com/api/news/category/01')
//             .then(res=> res.json())
//             .then (data=>displayNews(data.data))
//         }
//         loadNews()
//         const displayNews= newses=>{
//             const newsContainer=document.getElementById('news-container')
            
//            for(const news of newses){
            
//             const createDiv=document.createElement('div')
//             createDiv.classList.add('col')
//             createDiv.innerHTML=`
//               <div class='card' onclick='newsId(${news._id})' >
//                     <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
//                       <p class="card-text text-truncate">${news.details}</p>
//                       <div> 
//                       <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
//                       <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
//                       <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
//                       </div>
//                     </div>
//                 </div>
            
//             `
//            newsContainer.appendChild(createDiv)
//            }
//            const newsId=idOfNewsDetails=>{
//             const url=``
//            }
//         } 
//     }else if(id=='2'){
//         document.getElementById
//         const loadNews =()=>{
//             fetch('https://openapi.programming-hero.com/api/news/category/02')
//             .then(res=> res.json())
//             .then (data=>displayNews(data.data))
//         }
//         loadNews()
    
//         const displayNews= newses=>{
//             const newsContainer=document.getElementById('news-container')
//            for(const news of newses){
//             const createDiv=document.createElement('div')
//             createDiv.classList.add('col')
//             createDiv.innerHTML=`
//               <div class='card' onclick='newsId(${news._id})' >
//                     <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
//                       <p class="card-text text-truncate">${news.details}</p>
//                       <div> 
//                       <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
//                       <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
//                       <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
//                       </div>
//                     </div>
//                 </div>
            
//             `
//            newsContainer.appendChild(createDiv)
//            }
//            const newsId=idOfNewsDetails=>{
//             const url=``
//            }
//         }
//     }else if(id=='3'){
//         document.getElementById
//         const loadNews =()=>{
//             fetch('https://openapi.programming-hero.com/api/news/category/03')
//             .then(res=> res.json())
//             .then (data=>displayNews(data.data))
//         }
//         loadNews()
    
//         const displayNews= newses=>{
//             const newsContainer=document.getElementById('news-container')
//            for(const news of newses){
//             const createDiv=document.createElement('div')
//             createDiv.classList.add('col')
//             createDiv.innerHTML=`
//               <div class='card' onclick='newsId(${news._id})' >
//                     <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
//                       <p class="card-text text-truncate">${news.details}</p>
//                       <div> 
//                       <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
//                       <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
//                       <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
//                       </div>
//                     </div>
//                 </div>
            
//             `
//            newsContainer.appendChild(createDiv)
//            }
//            const newsId=idOfNewsDetails=>{
//             const url=``
//            }
//         }
//     }else if(id=='4'){
//         document.getElementById
//         const loadNews =()=>{
//             fetch('https://openapi.programming-hero.com/api/news/category/04')
//             .then(res=> res.json())
//             .then (data=>displayNews(data.data))
//         }
//         loadNews()
    
//         const displayNews= newses=>{
//             const newsContainer=document.getElementById('news-container')
//            for(const news of newses){
//             const createDiv=document.createElement('div')
//             createDiv.classList.add('col')
//             createDiv.innerHTML=`
//               <div class='card' onclick='newsId(${news._id})' >
//                     <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
//                       <p class="card-text text-truncate">${news.details}</p>
//                       <div> 
//                       <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
//                       <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
//                       <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
//                       </div>
//                     </div>
//                 </div>
            
//             `
//            newsContainer.appendChild(createDiv)
//            }
//            const newsId=idOfNewsDetails=>{
//             const url=``
//            }
//         }
//     }else if(id=='5'){
//         document.getElementById
//         const loadNews =()=>{
//             fetch('https://openapi.programming-hero.com/api/news/category/05')
//             .then(res=> res.json())
//             .then (data=>displayNews(data.data))
//         }
//         loadNews()
    
//         const displayNews= newses=>{
//             const newsContainer=document.getElementById('news-container')
//            for(const news of newses){
//             const createDiv=document.createElement('div')
//             createDiv.classList.add('col')
//             createDiv.innerHTML=`
//               <div class='card' onclick='newsId(${news._id})' >
//                     <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
//                       <p class="card-text text-truncate">${news.details}</p>
//                       <div> 
//                       <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
//                       <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
//                       <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
//                       </div>
//                     </div>
//                 </div>
            
//             `
//            newsContainer.appendChild(createDiv)
//            }
//            const newsId=idOfNewsDetails=>{
//             const url=``
//            }
//         }
//     }else if(id=='6'){
//         document.getElementById
//         const loadNews =()=>{
//             fetch('https://openapi.programming-hero.com/api/news/category/06')
//             .then(res=> res.json())
//             .then (data=>displayNews(data.data))
//         }
//         loadNews()
    
//         const displayNews= newses=>{
//             const newsContainer=document.getElementById('news-container')
//            for(const news of newses){
//             const createDiv=document.createElement('div')
//             createDiv.classList.add('col')
//             createDiv.innerHTML=`
//               <div class='card' onclick='newsId(${news._id})' >
//                     <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
//                       <p class="card-text text-truncate">${news.details}</p>
//                       <div> 
//                       <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
//                       <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
//                       <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
//                       </div>
//                     </div>
//                 </div>
            
//             `
//            newsContainer.appendChild(createDiv)
//            }
//            const newsId=idOfNewsDetails=>{
//             const url=``
//            }
//         }
//     }else if(id=='7'){
//         document.getElementById
//         const loadNews =()=>{
//             fetch('https://openapi.programming-hero.com/api/news/category/07')
//             .then(res=> res.json())
//             .then (data=>displayNews(data.data))
//         }
//         loadNews()
    
//         const displayNews= newses=>{
//             const newsContainer=document.getElementById('news-container')
//            for(const news of newses){
//             const createDiv=document.createElement('div')
//             createDiv.classList.add('col')
//             createDiv.innerHTML=`
//               <div class='card' onclick='newsId(${news._id})' >
//                     <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
//                       <p class="card-text text-truncate">${news.details}</p>
//                       <div> 
//                       <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
//                       <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
//                       <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
//                       </div>
//                     </div>
//                 </div>
            
//             `
//            newsContainer.appendChild(createDiv)
//            }
//         }
//     }else {
        
//     }
   

// }






















// const displayNews= newses=>{
//     const newsContainer=document.getElementById('news-container')
//    for(const news of newses){
//     const createDiv=document.createElement('div')
//     createDiv.classList.add('col')
//     createDiv.innerHTML=`
//       <div class='card' onclick='newsId(${news._id})' >
//             <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title fs-5 text-truncate">${news.title}</h5>
//               <p class="card-text text-truncate">${news.details}</p>
//               <div> 
//               <span class="d-block">Author:  ${news.author.name}  <img style='width:30px; height:30px' class="ms-3 rounded" src="${news.author.img}" class="card-img-top" alt="..."></span>
//               <span> <i class="fa-regular fa-eye me-3"></i>${news.total_view}</span>
//               <button class="btn btn-primary d-block mt-5" href="#" role="button">Show more</button>
//               </div>
//             </div>
//         </div>
    
//     `
//     newsContainer.appendChild(createDiv)
//    }
// }



















