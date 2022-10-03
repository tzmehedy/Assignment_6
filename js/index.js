const loadCatagories =()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(catagoriesName=>displayCatagories(catagoriesName.data.news_category));
}
loadCatagories();
const displayCatagories = (catagories) => {
    // console.log(catagories);
    const catagoriesField = document.getElementById('catagories-add');

    catagories.forEach( catagory => {
        // console.log(catagory);
        catagoriesField.classList.add("flex", "justify-around", "mt-5");
        const div = document.createElement('div');
        div.innerHTML=`
         <button onclick = "singleCatagories('${catagory.category_id
         }')" class="btn btn-sm btn-ghost">${catagory.category_name}</button>
        
        
        `;
        catagoriesField.appendChild(div);
        
    });
}

const singleCatagories = (id) => {
    const url= ` https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
    .then (res => res.json())
    .then (data=>displaySingleCatagories(data.data));
}

const displaySingleCatagories = (item) =>{
    console.log(item);
    document.getElementById('add-news').innerHTML="";
    
    const addNews = document.getElementById('add-news');
    item.forEach(newsIetm =>{
        console.log(newsIetm);
        const div = document.createElement('div');
        div.classList.add("card","card-side","bg-base-100","shadow-lg","lg:m-20");
        div.innerHTML = `
            <figure><img class="w-96 h-64" src="${newsIetm.image_url}" alt="Movie"/></figure>
            <div class="card-body">
                <h2 class="card-title">${newsIetm.title
                }</h2>
                <p>${newsIetm.details.slice(0,250)+"..."}</p>
                <br>
                <div class="card-actions justify-between">
                    <div class="flex">
                        <div class="w-10">
                            <img class="rounded-full" src="${newsIetm.author.img}"/>
                        </div>
                        <div class="mx-5">
                            <div>
                                <h3>${newsIetm.author.name
                                }</h3>
                            </div>
                            <div>
                                <h3>${newsIetm.author.published_date
                                }</h3>
                            </div>
                        </div>
                        <div class="flex">
                            <div>
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <div class="mx-5">
                                <h3>${newsIetm.total_view}</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <button class="btn btn-primary">Watch</button>
                </div>
            </div>
        `;
        addNews.appendChild(div);
    })
}


