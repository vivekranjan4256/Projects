var randomnumber1=Math.floor(Math.random()*6+1);
//alert(randomnumber1);
var randomdiceimage="dice"+randomnumber1+".png";
var randomimagesource="images/"+randomdiceimage;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);
var randomnumber2=Math.floor(Math.random()*6+1);
var randomdiceimage1="dice"+randomnumber2+".png";
var randomimagesource2="images/"+randomdiceimage1;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);
if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber1<randomnumber2)
document.querySelector("h1").innerHTML="Player 2 wins";