
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function increaseRankBy(givenNumber){
  var classes = document.querySelector("ul.ranked-list")
  var numbers = classes.querySelectorAll("li")
  
  
}