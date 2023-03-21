var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=0;
var started=false;
$(document).keypress(function(){
    if(!started)
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
})

function nextSequence(){
    userClickedPattern=[];
    $("#level-title").text("Level "+level);
    level++;
    
var randomNumber=Math.floor(Math.random()*3+1);
var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}

$(".btn").click(function(){
    var userChosenColour=(this.id);
    userClickedPattern.push(userChosenColour);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
        console.log("success");
    if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
    }
    else{
        console.log("Wrong");
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function playSound(color){
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed"); 
    },100);
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}


