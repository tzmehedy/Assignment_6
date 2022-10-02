const loadCatagories =()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res=>res.json())
    .then(catagoriesName=>displayCatagories(catagoriesName.data.news_category));
}
loadCatagories();
const displayCatagories = (catagories) => {
    const catagoriesField = document.getElementById('catagories-add');

    catagories.forEach( catagory => {
        console.log(catagory);
        catagoriesField.classList.add("flex", "justify-around", "mt-5");
        const div = document.createElement('div');
        div.innerHTML=`
         <button class="btn btn-sm btn-ghost">${catagory.category_name}</button>
        
        
        `;
        catagoriesField.appendChild(div);
        
    });

}


