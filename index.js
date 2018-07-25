
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function deepestChild(){
 var queryS = document.querySelector("#grand-node")
 var queryM = queryS.querySelectorAll("div")
 for(let i =0;i<queryM.length;i++){
   if(queryM[i].innerHTML==="boo"){
     return queryM[i]
   }
 }
  
}