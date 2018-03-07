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
    // localStorage.setItem('recipes', JSON.parse(data))

  }).catch(function() {
    console.log("Chuck Norris was here")
  })
  // const recipes = JSON.parse(localStorage.getItem('recipes')) || {}
  // console.log(`const recipes = ${recipes}`)
})
