$(document).ready(function(){

  var numRandom;

  var numRed;
  var numBlue;
  var numYellow;
  var numGreen;

  var score = 0; 
  var wins = 0;
  var losses = 0;

function newGame() {
    numRandom = (Math.floor(Math.random() * 102) + 19);
    $("#target").html(numRandom);
    numRed = (Math.floor(Math.random() * 12) + 1);
    numBlue = (Math.floor(Math.random() * 12) + 1);
    numYellow = (Math.floor(Math.random() * 12) + 1);
    numGreen = (Math.floor(Math.random() * 12) + 1);
    score = 0;
    $("#score").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);
    }

    $("#ruby").on("click", function() {
        score = numRed + score;
        $("#score").html(score);

        if (score == numRandom) {
            $("#verdict").html("<h2>SPOT ON!<h2>").css("color", "#08e62d");
            wins++;
            $("#wins").html(wins);
            newGame()
        }

        else if (score > numRandom) {
            $("#verdict").html("<h2>OOPS!<h2>").css("color", "#f50606");
            losses++;
            $("#losses").html(losses);
            newGame()
        }
    })

    $("#sapphire").on("click", function() {
        score = numBlue + score;
        $("#score").html(score);

        if (score == numRandom) {
            $("#verdict").html("<h2>SPOT ON!<h2>").css("color", "#08e62d");
            wins++;
            $("#wins").html(wins);
            newGame()
        }

        else if (score > numRandom) {
            $("#verdict").html("<h2>OOPS!<h2>").css("color", "#f50606");
            losses++;
            $("#losses").html(losses);
            newGame()
        }
    })

    $("#citrine").on("click", function() {
        score = numYellow + score;
        $("#score").html(score);

        if (score == numRandom) {
            $("#verdict").html("<h2>SPOT ON!<h2>").css("color", "#08e62d");
            wins++;
            $("#wins").html(wins);
            newGame()
        }

        else if (score > numRandom) {
            $("#verdict").html("<h2>OOPS!<h2>").css("color", "#f50606");
            losses++;
            $("#losses").html(losses);
            newGame()
        }
    })

    $("#emerald").on("click", function() {
        score = numGreen + score;
        $("#score").html(score);

        if (score == numRandom) {
            $("#verdict").html("<h2>SPOT ON!<h2>").css("color", "#08e62d");
            wins++;
            $("#wins").html(wins);
            newGame()
        }

        else if (score > numRandom) {
            $("#verdict").html("<h2>OOPS!<h2>").css("color", "#f50606");
            losses++;
            $("#losses").html(losses);
            newGame()
        }
    })

    newGame()
    
});
