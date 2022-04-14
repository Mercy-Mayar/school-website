document.getElementById("button").addEventListener("click Me" , myScore);

function myScore(){
  var myScore = parseInt(prompt("Enter score"));
  alert(myScore);
  if(myScore>=80 && myScore<100){
    document.getElementById("button").innerHTML = "A";
  }else if(myScore<=79 && myScore<=75){
    document.getElementById("button").innerHTML = "A-";
  }else if(myScore<=74 && myScore<=70){
    document.getElementById("button").innerHTML = "B+";
  }else if(myScore<=69 && myScore<=65){
    document.getElementById("button").innerHTML = "B";
  }else if(myScore<=64 && myScore<=60){
    document.getElementById("button").innerHTML = "B-";
 }else if(myScore<=59 && myScore<=55){
    document.getElementById("button").innerHTML = "C+";
  }else if(myScore<=54 && myScore<=50){
    document.getElementById("button").innerHTML = "C";
 }else if(myScore<=49 && myScore<=45){
    document.getElementById("button").innerHTML = "D+";
  }else if(myScore<=44 && myScore<=45){
    document.getElementById("button").innerHTML = "D";
}else if(myScore<=39 && myScore<=35){
   document.getElementById("button").innerHTML = "D-";
 }else if(myScore<=34 && myScore<=30){
   document.getElementById("button").innerHTML = "E";
}else{
  document.getElementById("button").innerHTML = "Enter valid score";
}
