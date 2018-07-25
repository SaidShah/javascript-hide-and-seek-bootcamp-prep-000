
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){
 const list = document.querySelector("div#grand-node").querySelector("div")[4].innerHTML
  return list.innerHTML
}