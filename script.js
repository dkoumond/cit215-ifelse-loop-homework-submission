var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var arrayLength = animals.length;
var msg = '';
var index;

for(index=0; index<arrayLength; index++){
  if(animals[index]=='cat'){
    msg +='I am a cat'+'<br />';
  } else if (animals[index]=='dog'){
    msg +='borf borf'+'<br />';
  } else {
    msg +='I am an animal'+'<br />';
  }
}

document.getElementById('message').innerHTML = msg;