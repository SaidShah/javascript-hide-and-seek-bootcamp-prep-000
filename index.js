
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){
 const list = document.getElementById("#grand-node").querySelectorAll("div")
 for(let i =0;i<list.length;i++ ){
   list[i].innerHTML = i+1.toString()
 }
  return list.innerHTML
}