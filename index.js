
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function increaseRankBy(givenNumber){
 var list = document.getElementById("app").querySelectorAll("ul.ranked-list li")
 
 for(let i =0;i<list.length;i++){
   list[i].innerHTML = (parseInt(list[i].innerHTML)+givenNumber)
 }
 
}

function deepestChild(){

var lastNode = "#grand-node"
var start = document.querySelector("div#grand-node").querySelectorAll("div")
for(let i = 0;i<start.length;i++){
  lastNode+=" div"
}

 return document.querySelector(lastNode)
}

