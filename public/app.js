


fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json()) //Respuesta a json
    .then(data => { //promesa
        data.results.forEach(item => {
            // console.log(item.name);
        });
        // console.log(data.results)
     })
     .catch(error => console.log(error));


const getData = async() => {
    try {
        let response = await fetch ("https://rickandmortyapi.com/api/character");
        let data = await response.json();
       
        data.results.forEach(item => {
            console.log(item);
            });
       
    } catch (error) {
        console.log("error");
        
    }
}


getData();




