var img = ["Me.jpg","Mom.JPG","Dad.JPG","Sis.jpg","Aunt.jpeg"];
var members = ["Vidhi Singhal","Surina Singhal","Nishit Singhal","Twisha Singhal","Neha Jain"];
var address = 0;
function next(){
    document.getElementById("family_img").src= img[address];
    document.getElementById("names").innerHTML= members[address];
    address = address+1;
    if(address >= 5){address = 0};
    
}