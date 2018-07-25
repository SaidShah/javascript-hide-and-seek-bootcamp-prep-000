
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){

  return document.querySelector("div#grand-node").querySelectorAll("div > div")
}