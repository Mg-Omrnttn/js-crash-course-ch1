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

//challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);  //show a selected img on console
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    //let computer choose either 0,1,2 from function randToRpsInt, and pass the number to function numberToChoice 
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice: ' + botChoice);

    //decide winner
    results = decideWinner(humanChoice, botChoice); //variable and call a function
    console.log(results);

    //after deciding a winner, show message
    message = finalMessage(results);  // {'message': 'You won!', 'color': 'green'}
    console.log(message);

    //logics are done up to here. Show the result nicely on frontend
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

//bot stuff
function randToRpsInt() {
    return Math.floor(Math.random()*3); //0, 1, 2
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

//decide winner stuff
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0}, //object in object
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];  //either 0, 0.5, 1 is assigned to the variable
    var computerScore = rpsDatabase[computerChoice][yourChoice];  //same

    return [yourScore, computerScore];  //return an array
}

//after deciding a winner, show message
function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'}; //return object
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'}; 
    } else {
        return {'message': 'You won!', 'color': 'green'}; 
    }
}

//show result nicely
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    //image database to let us access images easily
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // when any image is clicked, remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // show result with some html
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}



//20210806. next time from 3:58:00-