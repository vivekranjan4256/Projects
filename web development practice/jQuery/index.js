// $("h1").css("color","green");
// $("h1");
$("button");  //selects all buttons
$("h1").addClass("big-title margin-50");
$("h1").text("Bye");
$("button").text("Vivek");
console.log($("img").attr("src"));
$("a").attr("href","https://www.youtube.com");
// $("h1").click(function(){
//     $("h1").css("color","purple");
// })
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({
        opacity:0.5
    });
})
// $("body").keypress(function(){
//     console.log(event.key);
//     $("h1").text(event.key);
// })
$("h1").on("click",function(){
    $("h1").css("color","purple");
});