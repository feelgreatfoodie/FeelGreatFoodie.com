$(function() {
  let apiBaseSearchURL = "https://g-food2fork.herokuapp.com/api/search?key=663114731c111ec95ac24dc309ea0ad9&count=24&q="

let foodSearch = $("#foodSearch")
  $("#search-form").submit((e) => {
    e.preventDefault()
    $("#container-recipes").empty()
    foodSearch = $("#foodSearch").val()
    requestURL = apiBaseSearchURL.concat(foodSearch)
    goToFoodSearch(requestURL)
  })

})

const goToFoodSearch = (requestURL) => {
  fetch(requestURL).then((response) => {
    return response.json()
  }).then((data) => {
    makeRecipeCards(data)
  }).catch(() => {
    console.log("Chuck Norris was here")
  })
}

const makeRecipeCards = (data) => {
  data.recipes.map((e) => {
    let recipeName = e.title
    let recipeImg = e.image_url
    let recipeURL = e.source_url

    let recipeElement =
    `<div class="recipe">
      <div id="${recipeURL}"><img src="${recipeImg}"></div>
      <div class="recipe-title-header">
        <i class="far fa-star"></i>
        <h4 class="recipe-title">
          <a href="${recipeURL}" target="_blank">${recipeName}</a>
        </h4>
      </div><br>`

    $('#container-recipes').append(recipeElement)
  })

  // everything appended
  $('.recipe .fa-star').click((e) => {
    $(e.target).toggleClass('far fas')

    let aEle = $(e.target).next().find('a')
    let title = aEle.text()
    let link = aEle.attr('href')
    let image = $(e.target).parent().prev().find('img').prop('src')
    let faves = JSON.parse(localStorage.getItem('favorites') || '[]')

    // create obj for the recipe, with the data above
    let obj = {
      'title': title,
      'link': link,
      'image': image
    }

    //if fas (favorited icon class), send to localstorage, else remove
    if($(e.target).hasClass('fas')) {
      faves.push(obj)
      localStorage.setItem('favorites', JSON.stringify(faves))
    } else {
      // iterate through the faves array, looking for the recipe you want to remove, once found, remove it with .splice

      for(let i=0; i<faves.length; i++) {
        if (faves[i].link === link) {
          faves.splice(i, 1)
        }
        localStorage.setItem('favorites', JSON.stringify(faves))
      }
    }
  })
}
