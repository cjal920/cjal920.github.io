 var wordOptions = ["2001","alien","amadeus","bugsy","cabaret","casablanca","chinatown","dune","gladiator","glory","goodfellas","greenberg","ishtar",
 "jaws","ran","reds","rocky","sideways","superman","tron","vertigo","whiplash"];

 var imageOptions = ["assets/images/2001.png","assets/images/alien.png","assets/images/amadeus.png","assets/images/bugsy.jpg","assets/images/cabaret.png","assets/images/casablanca.png","assets/images/chinatown.png","assets/images/dune.jpg",
 "assets/images/gladiator.png","assets/images/glory.jpg","assets/images/goodfellas.png","assets/images/greenberg.jpg","assets/images/ishtar.jpg","assets/images/jaws.png","assets/images/ran.jpg","assets/images/reds.jpg","assets/images/rocky.png","assets/images/sideways.png","assets/images/superman.jpg","assets/images/tron.png","assets/images/vertigo.png","assets/images/whiplash.jpg"];

 var audioOptions = ["assets/audio/2001.mp3","assets/audio/alien.mp3","assets/audio/amadeus.mp3","assets/audio/bugsy.mp3","assets/audio/cabaret.mp3","assets/audio/casablanca.mp3","assets/audio/chinatown.mp3","assets/audio/dune.mp3",
 "assets/audio/gladiator.mp3","assets/audio/glory.mp3","assets/audio/goodfellas.mp3","assets/audio/greenberg.mp3","assets/audio/ishtar.mp3","assets/audio/jaws.mp3","assets/audio/ran.mp3","assets/audio/reds.mp3","assets/audio/rocky.mp3","assets/audio/sideways.mp3","assets/audio/superman.mp3","assets/audio/tron.mp3","assets/audio/vertigo.mp3","assets/audio/whiplash.mp3"];

 var audioNo = "assets/audio/audio-no.mp3";

 var randomNumber = 0;

 var lettersinWord = [];
 var numBlanks = 0;
 var blanksAndFills = [];
 var wrongLetters = [];

 var winCount = 0;
 var lossCount = 0;
 var remainingGuesses = 10;

 function startGame()   {
     randomNumber = Math.floor(Math.random() * wordOptions.length);
     selectedWord = wordOptions[randomNumber];
     lettersinWord = selectedWord.split("");
     numBlanks = lettersinWord.length;
     
     remainingGuesses = 10;
     wrongLetters = [];
     blanksAndFills = [];

     //selectedWord.replace(/\s/g, "-");
     
     for (var i = 0; i < numBlanks; i++) {
         blanksAndFills.push("_");
     }

     document.getElementById("letters-to-guess").innerHTML = blanksAndFills.join(" ");
     document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
     document.getElementById("wins").innerHTML = winCount;
     document.getElementById("losses").innerHTML = lossCount;     
     }

 function checkLetters(letter)   {
    var isletterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter)   {
            isletterInWord = true;
        }
    }

    if (isletterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndFills[i] = letter;
        }
    }
 }

 else {
    wrongLetters.push(letter);
    remainingGuesses--;
    
    }
 }

 function roundComplete() {

    document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
    document.getElementById("letters-to-guess").innerHTML = blanksAndFills.join(" ");
    document.getElementById("letters-guessed").innerHTML = wrongLetters.join(" ");
    
    if (lettersinWord.toString() == blanksAndFills.toString()) {
        winCount++;

        selectedImage = imageOptions[randomNumber];
        document.getElementById("image").src = selectedImage;

        var titleWins = selectedWord.toUpperCase();
        document.getElementById("winning-title").innerHTML = titleWins;       
        
        selectedAudio = audioOptions[randomNumber];
        document.getElementById("audio-yes").src = selectedAudio;

        document.getElementById("result").innerHTML = "CONGRATS!";
        document.getElementById("whom").innerHTML = "YOU!";

        document.getElementById("wins").innerHTML = winCount;

    }     
    else if (remainingGuesses == 0) {
        lossCount++;

        document.getElementById("audio-no").src = audioNo;
        document.getElementById("result").innerHTML = "SORRY!";
        document.getElementById("whom").innerHTML = "SOMEONE ELSE!";

        document.getElementById("losses").innerHTML = lossCount;
    }
}

 startGame();
 document.onkeyup = function(event) {
     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
     checkLetters(letterGuessed);
     roundComplete();
 }
