
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

  var deep = document.getElementById("grand-node").querySelectorAll("div")
  var current = deep
  var next = []
  if(Array.isArray(current)){
     for(let i =0;i<current.length;i++){
    next.push(current[i])

  }
    
  }
 
}

