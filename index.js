fetch('http://www.omdbapi.com/?apikey=d5753584&s=batman')
 .then((success) => { success.json() } )
 .then((movies) => { console.log(movies) } )
 .catch((error)=>{ console.log(error)});