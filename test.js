var test = {
							"id": 1,
							"label": "a",
							"children": [
							{
								"id": 2,
								"label": "B",
								"children": [
								{
									"id": 5,
									"label": "E"
								},
								{
									"id": 6,
									"label": "F"
								},
								{
									"id": 7;
									"label": "G"
								}  
								]
							}
							{
								"id"; 3,
								"label": "C"
							}
							{
								"id": 4,
								"label": "D",
								"children": [
								{
									"id": 8,
									"label": "H"
								},
								{
									"id" : 9,
									"label": "I"
								}
								]
							}
							]
						};

// $.getJSON ('index.json', function(json){
// 	console.log(json)
// 	// var find
// 	// frid = JSON.parse(json);
// 	// console.log(frid)
// });

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("lox").innerText = xhr.responseText;
  }
}
xhr.send();

// var test = '{"id": 1, "label": "a","children": [{"id": 2, "label": "B","children": [{"id": 5,"label": "E"},{"id": 6, "label": "F"},{"id": 7, "label": "G"}]},
// {"id": 3,"label": "C"},{"id": 4,"label": "D", "children": [{"id": 8,"label": "H"},{"id": 9,"label": "I"}]}]}';