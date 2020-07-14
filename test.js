var index=0;
function printLetter(word){
   
  if(index < word.length){
      index+=1;
      return word[index-1];
  }
  else{
      index=0;
      index+=1;
      return word[index-1];
  }
}

function callback(){
   console.log(printLetter("pranjali"));
}
setInterval(callback,1000);