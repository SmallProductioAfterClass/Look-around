$(document).ready(function(){
var hdiv = $(".head");
var aX = hdiv.offset().left + parseInt(hdiv.width()/2);
var aY = hdiv.offset().top  + parseInt(hdiv.height()/2);
p = 0;
Xita = 0;
direction = 0;
dir = new Array("→","↗","↑","↖","←","↙","↓","↘");


	function XYtoPolar (X,Y)
	{
		p = parseInt(Math.sqrt(X*X+Y*Y));
		temp = Math.atan2(Y,X)*57.2957;
		Y= Y>0 ? (Xita = temp) : (Xita = 360-Math.atan2(-Y,X)*57.2957);
		Xita = parseInt(Xita);
		direction = parseInt((Xita)/45);
	}

$(document).mousemove(function (e) {                                  
            var a = "("+e.pageX +","+e.pageY+")";
            var c = "("+(e.pageX -aX)+","+(-(e.pageY-aY))+")"
            XYtoPolar(e.pageX -aX,-(e.pageY-aY));
            if (p<60) return 0;
            var d = "("+p+","+Xita+") ( "+dir[direction]+" )" ;   
                $("p").text(a);
                $("h2").text(c);
                $("h3").text(d);
            if (p>60 && p<450)
            hdiv.css("background-position",-(direction*125)+"px 0px");            
			else 
				if(p>450)
				hdiv.css("background-position",-125*8+"px 0px");
				
 });
$(".head").click(function(){
	$(".head").css("background-position",-125*10+"px 0px");
});
$(".head").hover(function(){
	$(".head").css("background-position",-125*9+"px 0px");
});
var  b = "("+aX +","+aY+")";
$("span").text(b);
$(".h").css("margin-top",aY+"px");

});


