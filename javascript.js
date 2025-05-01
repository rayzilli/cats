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
