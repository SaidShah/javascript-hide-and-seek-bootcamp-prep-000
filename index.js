
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){
 const list = document.querySelector("#grand-node").querySelector("div").innerHTML[4]
  return list.innerHTML
}