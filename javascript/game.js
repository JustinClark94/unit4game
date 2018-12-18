

  //random number that player needs to match
  var targetNumber;
  //scoreboard
  var wins = 0;
  var losses = 0;
  //values of the 4 crystals added together
  var crystalTotal = 0;
  //four crystals
  var ac ;
  var bc ;
  var cc ;
  var dc ;


  //Assigns a random number to achieve. and a a random number to each crystal.

  targetNumber = (Math.floor(Math.random() * 150) + 27);
  ac = (Math.floor(Math.random() * 12) + 1);
  bc = (Math.floor(Math.random() * 12) + 1);
  cc = (Math.floor(Math.random() * 12) + 1);
  dc = (Math.floor(Math.random() * 12) + 1);

  $("totalScore").html(crystalTotal);
    //crystalTotal = parseInt(crystalTotal)
  $("#randomNumber").html("Target number: " + targetNumber);
  $("#winning").html(wins);
  $("#losing").html(losses);

  //console log to make sure all number generators are working.
  console.log(targetNumber);
  console.log(ac,bc,cc,dc);

  //THIS SECTION IS INCOMPLETE!!!
    var checkScore = function(){
    if (crystalTotal===targetNumber){
      wins ++  
      //alert("Congrats! You won the game!");
      console.log("W" + wins)
        
    }
    else if (crystalTotal > targetNumber){
      losses ++  
      //alert("You lost! Try Again");
      console.log("L" + losses)
        
    }
  };


    

  $( "#acrystal" ).click(function() {
    crystalTotal += ac;
    $('#totalScore').html(crystalTotal)
    checkScore();
  });
  $( "#bcrystal" ).click(function() {
    crystalTotal += bc;
    $('#totalScore').html(crystalTotal)
    checkScore();
  });
  $( "#ccrystal" ).click(function() {
    crystalTotal += cc;
    $('#totalScore').html(crystalTotal)
    checkScore();
  });
  $( "#dcrystal" ).click(function() {
    crystalTotal += dc;
    $('#totalScore').html(crystalTotal)
    checkScore();
  }); 

  //Score appears in console but not on page.
  //Need to reset the game without losing score
