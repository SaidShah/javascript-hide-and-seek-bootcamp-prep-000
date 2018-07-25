
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function increaseRankBy(givenNumber){
  var classes = document.querySelector(".ranked-list")
  var numbers = classes.querySelectorAll("li")
  for(let i =0;i<numbers.length;i++){
    var num = parseInt(numbers[i].innerHTML)
    var newNum = num+givenNumber
    numbers[i].innerHTML =  num.toString()
  }
}