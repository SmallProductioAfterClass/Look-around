$(document).ready(function(){
var hdiv = $(".head");
var aX = hdiv.offset().left + parseInt(hdiv.width()/2);
var aY = hdiv.offset().top  + parseInt(hdiv.height()/2);
$(document).mousemove(function (e) {                                  
            var a = "("+e.pageX +","+e.pageY+")";
            var c = "("+(e.pageX -aX)+","+(e.pageY-aY)+")"
                $("p").text(a);
                $("h2").text(c);
            }); 
var  b = "("+aX +","+aY+")";
$("span").text(b);
$(".h").css("margin-top",aY+"px");

});


