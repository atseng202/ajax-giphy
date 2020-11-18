// console.log("Let's get this party started!");


/* Part 2: Append the GIF from the GET request data response to our page
 * Each submit should append a new gif
 */
function appendGif(image_url) {
  let $img = $(`<img src=${image_url}>`);
  $(".container").append($img);
}


/* Part 1: use axios to make GET request to GIPHY for info based on search term
 * use event handler to bind button to axios function call
 */

 async function getGif(evt) {
   evt.preventDefault();
   let q = $("#searchTerm").val();
   let api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"; 

   let res = await axios.get("http://api.giphy.com/v1/gifs/search", 
    {
      params: {
        q, api_key
      }
    });

   // grab a random image from page 1 i.e. picture 40 of 50 
   // then append it to the page
   let imagesData = res.data.data;
   let randomIdx = Math.floor(Math.random() * (imagesData.length));
   console.log(randomIdx);

   let randomImgUrl = imagesData[randomIdx].images.downsized_large.url;
   appendGif(randomImgUrl);
 }

 $("#giphy-form").on("submit", getGif);



