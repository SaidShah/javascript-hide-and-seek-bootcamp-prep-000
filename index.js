
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){
  return document.getElementById("grand-node").getElementsByTagName("div").innerHTML[4]
}