var Links = {
Color:function(color){
//   var alist = document.querySelectorAll('a');
//   var i= 0;
//   while(i < alist.length){
//   alist[i].style.color=color;
//   i++;
// }
$('a').css('color',color);
}
}
var Body ={
Color:function(color){
$('body').css('color',color);
},
BackgroundColor:function(color){
$('body').css('backgroundColor',color);
}
}
function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value ==='night'){
  Body.BackgroundColor ('black');
  Body.Color('tomato');
  self.value ='day';

  Links.Color('powderblue');
} else{
  Body.BackgroundColor('tomato');
  Body.Color('powderblue');
  self.value ='night';

  Links.Color('mistyrose');
  }
}
