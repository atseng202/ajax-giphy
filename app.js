"use strict";
// console.log("Let's get this party started!");

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

/** Part 3 add a button that removes all giphs from page when clicked */

function removeGifs() {
  $('.container').empty();
}


/* Part 2: Append the GIF from the GET request data response to our page
 * Each submit should append a new gif
 */
function appendGif(image_url) {
  let $img = $(`<img src="${image_url}">`);
  $(".container").append($img);
}

/** Getting a response for search query */

async function searchGiphs(q) {
  let res = await axios.get("http://api.giphy.com/v1/gifs/search",
    {
      params: {
        q, api_key: API_KEY
      }
    });

  // grab a random image from page 1 i.e. picture 40 of 50 
  // then append it to the page
  return res.data.data;
}

/** Pulls a random url from data array*/

function randomUrl(imagesData) {
  let randomIdx = Math.floor(Math.random() * (imagesData.length));
  return imagesData[randomIdx].images.downsized_large.url;
}


/* Part 1: use axios to make GET request to GIPHY for info based on search term
 * use event handler to bind button to axios function call
 */

async function getGif(evt) {
  evt.preventDefault();
  let q = $("#searchTerm").val();

  let imagesData = await searchGiphs(q);

  let randomImgUrl = randomUrl(imagesData);

  appendGif(randomImgUrl);
  $('form').trigger('reset');
}

$("#giphy-form").on("submit", getGif);

$('#removeGifs').on('click', removeGifs);

