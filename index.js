
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){
  return document.getElementById("grand-node").querySelector("div")[3].innerHTML
}