$(function() {
  $("#search-form").submit(function(e) {
    e.preventDefault()
    let foodSearch = $("#foodSearch").val()

  })
  let requestURL = "https://g-food2fork.herokuapp.com/api/search?key=663114731c111ec95ac24dc309ea0ad9&q=shredded%20chicken"

  fetch(requestURL).then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data)

    makeRecipeCards(data)

  }).catch(function() {
    console.log("Chuck Norris was here")
  })

})


const makeRecipeCards = function (data) {
  data.recipes.map(function (e) {
    let recipeName = e.title
    let recipeImg = e.image_url
    let recipeURL = e.f2f_url
    let recipeObject = {name: recipeName, 'img': recipeImg, 'url': recipeURL}

    let recipeElement = `<div class="recipe"><h4 class="recipe-title">${recipeName}</h4><br><img src=${recipeImg}><br><a href=${recipeURL}><span class="more">MORE<span></a></div>`

    $('#container-recipes').append(recipeElement)


  })
}
