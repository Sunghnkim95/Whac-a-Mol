let gameOn = false;
let molePos = [false,false,false,false,false,false,false,false,false];
let timeUp = false;
let score = 0;
let time = 60;
let molInterval;
let timeInterval;
let bestScore = 0;
let molSpeed = 1000;



$('#startbtn').click(function(){
    start();
});

function start(){
    $('#score').text(score);

    if(gameOn === false){

        molInterval = setInterval(function(){ randMole(); }, molSpeed); 
        timeInterval = setInterval(function(){ countDown(); }, 1000); 

    }
    gameOn = true;
}

function randMole(){
    const index = Math.floor(Math.random() * molePos.length); 
    molePos[index] = true; 

    const index2 = Math.floor(Math.random() * molePos.length);
    molePos[index2] = false;

    $(".hole").each(function(i, item){

        if(molePos[i] === true){
            $(item).addClass('mole');
        } 
        else if (molePos[i] === false){
            $(this).removeClass('mole');
        }
    });
};


$('#hardMode').click(function(){
    if(gameOn === false){
        molSpeed = 750;

        $('#ultHard').css('color', 'black')
        $('#hardMode').css('color', 'white')
        $('#normMode').css('color', 'black')
    }

    if(bestScore > 0){
        bestScore = 0;
        $('#bestScore').text(bestScore)
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

function countDown(){
    time = time - 1;
    $('#time').text(time);

    if (time === 0){
        gameOn = false;
        clearInterval(molInterval);
        clearInterval(timeInterval);

        $(".hole").each(function(i, item){

            if (molePos[i] === true){
                $(this).removeClass('mole');
            }
        });
        for (let i = 0; i < molePos.length; i++){
            molePos[i] = false
        }
        if(bestScore < score){
            bestScore = score;
        }
        $('#bestScore').text(bestScore)

        time = 60;

        score = 0;
    }
}


$('#hole1').click(function(){

    if (gameOn === true){
        if (molePos[0] === true){
            score = score + 1;
            $('#score').text(score)
        }

        molePos[0] = false 
        $(this).removeClass('mole')
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
  












