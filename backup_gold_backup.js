let gameOn = false;
let molePos = [false,false,false,false,false,false,false,false,false];
let timeUp = false;
let score = 0;
let time = 60;
let molInterval;
let timeInterval;
let bestScore = 0;
let molSpeed = 1000;


//GAME STARTUH
$('#startbtn').click(function(){ //called the function start
    start();
});

function start(){   //start function
    $('#score').text(score);    //update score text with updated score

    if(gameOn === false){   //if game starts off

        molInterval = setInterval(function(){ randMole(); }, molSpeed);     //then call randMole function in intervals of molSpeed of 1000
        timeInterval = setInterval(function(){ countDown(); }, 1000);   //runs the function countDown every 1sec
    }
    gameOn = true;  //turns on the game
}

//MAKE THE MOLES POP UP RANDOMLY
function randMole(){    //ranMole function
    const index = Math.floor(Math.random() * molePos.length); //selects rand arr from molePos
    molePos[index] = true; //makes the rand arr true

    const index2 = Math.floor(Math.random() * molePos.length);  //selected rand arr from molePos again
    molePos[index2] = false;    //makes the rand arr false

    $(".hole").each(function(i, item){

        if(molePos[i] === true){    //if molePos is true
            $(item).addClass('mole');   //add *new* mole class with img
        } 
        else if (molePos[i] === false){   //if molePos is false
            $(this).removeClass('mole');   //remove mole class with img if it has one
        }
    });
};

//DIFFICULTY
$('#hardMode').click(function(){    //Hard Mode btn
    if(gameOn === false){      //if the game is off (so you cannot change in the middle of the game)
        molSpeed = 750;         //set the speed to 750

        $('#ultHard').css('color', 'black')     //sets to default
        $('#hardMode').css('color', 'white')    //sets to active
        $('#normMode').css('color', 'black')     //sets to default
    }
    
    if(bestScore > 0){  //if the bestScore if higher than 0 when the difficulty is clicked
        bestScore = 0;  //sets the score to 0
        $('#bestScore').text(bestScore) //replaces the text to 0
    }
});

$('#ultHard').click(function(){

    if (gameOn === false){
        molSpeed = 100

        $('#ultHard').css('color', 'white')
        $('#hardMode').css('color', 'black')
        $('#normMode').css('color', 'black')
    }

    if(bestScore > 0){
        bestScore = 0;
        $('#bestScore').text(bestScore)
    }
});

$('#normMode').click(function(){
    if (gameOn === false){
        molSpeed = 1000

        $('#ultHard').css('color', 'black')
        $('#hardMode').css('color', 'black')
        $('#normMode').css('color', 'white')
    }
    if(bestScore > 0){
        bestScore = 0;
        $('#bestScore').text(bestScore)
    }
});

//TIMER
function countDown(){   //countDown function
    time = time - 1;    //decrease timer
    $('#time').text(time);  //updates timer text

    if (time === 0){    //if timer is at 0
        gameOn = false;     //set gameOn to false
        clearInterval(molInterval); //reset molInterval
        clearInterval(timeInterval);    //reset timeInterval

        $(".hole").each(function(i, item){  //for each class hole (function)

            if (molePos[i] === true){       //if the molePos at current indexes are true
                $(this).removeClass('mole'); //remove all mole classes
            }
        });
        for (let i = 0; i < molePos.length; i++){   //for loop the molePos arr
            molePos[i] = false      //make all molePos false
        }
        if(bestScore < score){      //if score is higher than the bestScore
            bestScore = score;      //score becomes new bestScore
        }
        $('#bestScore').text(bestScore)     //updates bestScore text

        time = 60;  //resets timer to 60

        score = 0;  //resets score to 0
    }
}

//MOLE TIMER & MAKE THE MOLE DISAPPEAR WITH CLICK
$('#hole1').click(function(){   //Mole grid whack

    if (gameOn === true){       //if the game is on
        if (molePos[0] === true){   //if clicked while the molePos is true
            score = score + 1;      //update score
            $('#score').text(score)     //update score text
        }

        molePos[0] = false      //sets the molePos to false
        $(this).removeClass('mole')     //remove the mole class
    }
});

$('#hole2').click(function(){

    if (gameOn === true){
        if (molePos[1] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[1] = false 
        $(this).removeClass('mole')
    }
});

$('#hole3').click(function(){
    
    if (gameOn === true){
        if (molePos[2] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[2] = false 
        $(this).removeClass('mole')
    }
});

$('#hole4').click(function(){
    
    if (gameOn === true){
        if (molePos[3] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[3] = false 
        $(this).removeClass('mole')
    }
});

$('#hole5').click(function(){
    
    if (gameOn === true){
        if (molePos[4] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[4] = false 
        $(this).removeClass('mole')
    }
});

$('#hole6').click(function(){
    
    if (gameOn === true){
        if (molePos[5] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[5] = false 
        $(this).removeClass('mole')
    }
});

$('#hole7').click(function(){
    
    if (gameOn === true){
        if (molePos[6] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[6] = false 
        $(this).removeClass('mole')
    }
});

$('#hole8').click(function(){
    
    if (gameOn === true){
        if (molePos[7] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[7] = false 
        $(this).removeClass('mole')
    }
});

$('#hole9').click(function(){
    
    if (gameOn === true){
        if (molePos[8] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[8] = false 
        $(this).removeClass('mole')
    }
});
  
