$(function() {

  let requestURL = "https://g-food2fork.herokuapp.com/api/search?key=663114731c111ec95ac24dc309ea0ad9&count=24&q="
let foodSearch = $("#foodSearch")
  $("#search-form").submit(function(e) {
    e.preventDefault()
    foodSearch = $("#foodSearch").val()
    requestURL = requestURL.concat(foodSearch)
    goToFoodSearch(requestURL)
  })



})

const goToFoodSearch = function(requestURL) {
  fetch(requestURL).then(function(response) {
    return response.json()
  }).then(function(data) {
    makeRecipeCards(data)
  }).catch(function() {
    console.log("Chuck Norris was here")
  })
}

const makeRecipeCards = function (data) {
  data.recipes.map(function (e) {
    let recipeName = e.title
    let recipeImg = e.image_url
    let recipeURL = e.source_url

    let recipeElement =
    `<div class="recipe">
    <a href="${recipeURL}" target="_blank">
      <div><img src="${recipeImg}"></div>
      <div class="recipe-title-header">
        <h4 class="recipe-title">${recipeName}</h4></a>
      </div><br>`

    $('#container-recipes').append(recipeElement)


  })
}
