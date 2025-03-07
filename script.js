const APIKEY = "250958bd";

async function showInfo(){
    let searchValue = document.getElementById("search").value;
    // console.log(searchValue);

    try{
        let url = `https://www.omdbapi.com/?apikey=${APIKEY}&t=${searchValue}`;
        // let url = `https://www.omdbapi.com/?apikey=${APIKEY}&t=Queen`;

        let response = await fetch(url);
        let jsonData = await response.json();

        if(jsonData.Title == undefined){
            // console.log("This movie not found");

            document.getElementById("movie_detail").innerHTML = `
            <h1>This Movie Not found !!<h1>
            <h3>Continue Searching...<h3>
            `;
        }
        else{
            // console.log(jsonData);

            document.getElementById("movie_detail").innerHTML = `
            <h1>${jsonData.Title}</h1>
            <img src="${jsonData.Poster}" alt="${jsonData.Title} Poster">
            <div id="Genre"><p>Genre:</p> ${jsonData.Genre}</div>
            <div id="imdb"><p>Imdb Rating:</p> ${jsonData.imdbRating}</div>
            <div id="release"><p>Release Date:<p/> ${jsonData.Released}</div>
            <div id="plot"><p>Plot:</p> ${jsonData.Plot}</div>
            `;
        }

        document.getElementById("search").value = "";
    }
    catch(error){
        console.log(error);

        document.getElementById("movie_detail").innerHTML = `
        <h1>Error in fetching the data !!</h1>
        <h3>${error}</h3>
        `;

        document.getElementById("search").value = "";
    }
}


