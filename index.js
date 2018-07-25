
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){

  return document.querySelector("#grand-node").querySelectorAll("div > div > div > div").innerHTML
}