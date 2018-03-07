$(function() {
  $("#search-form").submit(function(e) {
    e.preventDefault()
    let foodSearch = $("#foodSearch").val()

  })
  let requestURL = "https://g-food2fork.herokuapp.com/api/search?key=663114731c111ec95ac24dc309ea0ad9&count=20&q=shredded%20chicken"

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
    let recipeURL = e.source_url
console.log(recipeURL)
    // getRecipeUrl(recipeURL)
    //
    // const getRecipeUrl = function(recipeURL) {
    //   if (recipeURL.endswith('/')){
    //     recipeURL = recipeURL.slice(0,-1)
    //     return recipeURL
    //   } else {
    //     return
    //   }
    // }

    // remove final "/" if present


    let recipeElement =
    `<div class="recipe">
    <a href="${recipeURL}">
      <div><img src="${recipeImg}"></div>
      <div class="recipe-title-header">
        <h4 class="recipe-title">${recipeName}</h4></a>
      </div><br>`

    $('#container-recipes').append(recipeElement)


  })
}
