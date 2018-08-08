function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function showShadow(){
  document.getElementById("shadow").style.display = "inline";
  document.getElementById("nonShadow").style.display = "none";
}
function showNonShadow(){
  document.getElementById("nonShadow").style.display = "inline";
  document.getElementById("shadow").style.display = "none";
}
function controlSection(id, idArrow)  {
    var x=document.getElementById(id);
	var arr=document.getElementById(idArrow);
	if(x.className.indexOf("w3-show")==-1){
		x.className+=" w3-show";
		arr.className+=" fas fa-caret-up";
	}else{
		x.className=x.className.replace(" w3-show","");
		arr.className=arr.className.replace(" fas fa-caret-up"," fas fa-caret-down");
	}
}