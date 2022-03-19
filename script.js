var x = 0;
function baranimation(){
	
  document.getElementById("lol").classList.toggle("rotate");
  document.getElementById("drop").classList.toggle("slide-in");
  if (x>0){
  document.getElementById("drop").classList.toggle("slide-out");
  document.getElementById("lol").classList.toggle("rotate-out");
  }else x++;

}
var z=0;
function cool(x) {
z++;
if(z%2===0){
				x.innerHTML = "kook + " +z;
				}else{
				 x.innerHTML = "lol +"+z;
				}
				if(z===5 || z===10){
								x.classList.toggle("omg");
								x.classList.toggle("omgl");
				}
}
				console.log("moin");


/* toggle zu button ändern für backwards animation*/
