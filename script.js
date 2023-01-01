const name = prompt('What is your full name?',);
const age = parseInt(prompt('what is your age?'));
const from= prompt('where are you from?',);

const default_name = 'Victor Crest'
const default_age = 26
const default_location= 'London'



if(typeof name === 'string' && name !== ''){
  document.getElementById('nome').innerHTML = name;
}else{
    document.getElementById('nome').innerHTML = default_name;

}

if(typeof age === 'number' && typeof age === NaN){
    document.getElementById('eta').innerHTML = age;
}else{
    document.getElementById('eta').innerHTML = default_age;
}

if(typeof from === 'string' && from !== ''){
    document.getElementById('city').innerHTML = from;
}else{
    document.getElementById('city').innerHTML = default_location;

}
