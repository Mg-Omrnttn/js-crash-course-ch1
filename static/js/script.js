//alert('Hello');

// Challenge 1: Your age in days

// click me
function ageInDays() {
    var birthYear = prompt('What year were you born???:D');
    var ageInDaysResult = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1'); //create a h1 element
    var textAnswer = document.createTextNode('You are ' + ageInDaysResult + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    //console.log(ageInDaysResult);  //no need now
}

//reset
function reset() {
    document.getElementById('ageInDays').remove();  //remove the id ageInDays
}

// Challenge 2: Image Generator
function generateImage() {
    var image = document.createElement('img'); //create an image element
    var div = document.getElementById('flex-image-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}


//2:42:00-