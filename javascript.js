const img = document.querySelector("img");

function cats(){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=nBfq2TYOaFaJdwoQhqqAAxRE8qUcEyhu&s=cats',{mod: 'cors'})
.then(function(response){
    return response.json();
})
.then(function(response){
    img.src = response.data.images.original.url;
});
};

cats();

let btn = document.querySelector("#searchBtn");
btn.addEventListener('click',()=>{  
        cats(); 
} );

//search for new pictures. 
function searchGif() {
    const searchTerm = document.querySelector("#searchValue").value;
    const apiKey = 'nBfq2TYOaFaJdwoQhqqAAxRE8qUcEyhu'; 
  
    if (!searchTerm.trim()) {
      console.log("Please enter a search term.");
      return;
    }
  
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=10`;
  
    fetch(apiUrl)
      .then(response => { 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Giphy Search Results JSON:", data);
        if (data.data && data.data.length > 0) {
          const randomPlace = Math.floor(Math.random() * data.data.length );
          img.src = data.data[randomPlace].images.original.url; // get random GIF from search 
        } else {
          console.log("No GIFs found in the search results.");
         
          img.src = "#"; // Clear the image source
        }
      })
      .catch(error => {
        console.error("Error fetching GIFs:", error);
      });
  }

// trigger an event when search is clicked 
let gifSearch = document.querySelector("#gifSearch");
gifSearch.addEventListener('click', (e)=>{
    e.preventDefault(); 
     searchGif(); 
})