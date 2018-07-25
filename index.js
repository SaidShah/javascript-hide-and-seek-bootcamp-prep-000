
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){
 const list = document.getElementById("grand-node").querySelectorAll("div")
  return list.innerHTML
}