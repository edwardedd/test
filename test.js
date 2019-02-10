	var numb = {						
	"1": a,
	"2": B,
	"5": E,
	"6": F,
	"7": G,
	"3": C,
	"4": D,
	"8": H, 
	"9": I 
};

var return = function(e) {
  e.preventDefault();
  var getInfo = document.getElementById("findid");
  document.getElementById("output").value = numb[findid.value];

}

