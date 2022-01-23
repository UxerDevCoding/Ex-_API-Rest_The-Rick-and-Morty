const cards = document.getElementById("dinamic-cards");
const templateCard = document.getElementById("template-card").content;
const spinnerCard = document.getElementById("loading");
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
});

const fetchData = async () => {

    try {
        loadingData(true);

        const response= await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        // console.log(data);
        createCard(data);
    } catch (error) {
        //console.log(error); 
    }finally{
        loadingData(false);
    }
};

const createCard = (data) => {
    //console.log(data);
    data.results.forEach(item => {
        //console.log(item);
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector(".card-img-top").setAttribute("src", item.image);

        fragment.appendChild(clone);  
    });

    cards.appendChild(fragment);    
};

const loadingData = (state) => {
    if (state) {
        loading.classList.remove("d-done");
        
    }else {
        loading.classList.add("d-done");
    }
};




