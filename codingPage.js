function myFunction(){
  var element = document.body;
  element.classList.toggle("mystyle");
}


var destination = new Date("Nov 4, 2021 00:00:00").getTime();
var cont = setInterval(function() {
var current = new Date().getTime();

var diff = destination-current ;

var hrs = Math.floor(diff%(24*60*60*1000)/(60*60*1000)) ;
var mins = Math.floor(diff%(60*60*1000)/(60*1000)) ;
var sec = Math.floor(diff%(60*1000)/(1000)) ;

console.log(hrs)
console.log(mins)
console.log(sec)

document.getElementById("timer").innerHTML = hrs + " : " + mins + " : " + sec
document.getElementById("timer").style.borderTop = "thin solid #D3E0EA";

},1000)
// const hours=document.querySelectorAll('hours');
// const minutes=document.querySelectorAll('minutes');
// const seconds=document.querySelectorAll('seconds');



// const YearTime = new Date(`May 22 2022 00:00:00`);

// function updateCountdownTime(){
//   const currentTime = new Date();
//   const diff = YearTime -currentTime;

  
//   const h= Math.floor(diff / 1000 / 60 / 60) % 24;
//   const m= Math.floor(diff / 1000 / 60) % 60;
//   const s= Math.floor(diff / 1000)%60;
  
 
//   document.getElementById('hours').innerHTML = h;
//   document.getElementById('minutes').innerHTML = m;
//   document.getElementById('seconds').innerHTML = s;
// }


setInterval(updateCountdownTime,1000);