// fetch("https://rickandmortyapi.com/api/character")
//     .then(res => res.json()) //Respuesta a json
//     .then(data => { //promesa
//         data.results.forEach(item => {
//             // console.log(item.name);
//         });
//         // console.log(data.results)
//      })
//      .catch(error => console.log(error));


// const getData = async() => {
//     try {
//         let response = await fetch ("https://rickandmortyapi.com/api/character");
//         let data = await response.json();
//         data.results.forEach(item => {
//             console.log(item);
//         });
//     } catch (error) {
//         console.log("error");
        
//     }
// }

// getData();

const cards = document.getElementById("dinamic-cards");
const templateCard = document.getElementById("template-card");
const spinnerCard = document.getElementById("loading");

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
});

const fetchData = async () => {
    
    try {
        loadingData(true);

        const response= await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error); 
    }finally{
        loadingData(false);
    }
};

const loadingData = state => {
    if (state) {
        loading.classList.remove("d-done");
        
    }else {
        loading.classList.add("d-done");
    }
}




