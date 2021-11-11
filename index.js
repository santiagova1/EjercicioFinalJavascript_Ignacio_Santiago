
/*function cargarPelis() {
    //const movies = getMovies();
    console.log("movie");
}*/
/*const getMovies = async () => {
    
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=13d970f6";
    // return fetch(url)
    //   .then(response => response.json())
    //   .then(result => result.results)
    //   .catch(error => console.log(error));

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data.Title;
    } catch (err) {
        throw err;
    }
  };

//   const getMovies = () => {
    
//     let url = 'https://www.omdbapi.com/?i=tt3896198&apikey=13d970f6';
//     // return fetch(url)
//     //   .then(response => response.json())
//     //   .then(result => result.results)
//     //   .catch(error => console.log(error));

//       return fetch(url)
//       .then(res => res.json())
//       .then(data => data)
//       .catch(err => { throw err });
//   };*/

const apikey = "13d970f6";
let url = "https://www.omdbapi.com/?apikey=";

function cargarPelis() {
    title = document.getElementById("titleSearch").value;

    fetch(url + apikey + "&s=" + title)
        .then(result => result.json())
        .then((movie) => showMovies(movie))
        .catch(error => console.log(error));


    console.log(url + apikey + "&s=" + title);

    function showMovies(movie) {
        
        
        for (const i in movie.Search) {
            var li = document.createElement("div");  
            
                for(const k in movie.Search[i]){
                    li.innerHTML = '<img src=' +movie.Search[i][k] +'/>';
                }
                
                
                document.getElementById("listaPelis").appendChild(li);
            }
            
            }

        

    }
    




