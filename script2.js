var data2 = [
  {name:'Beds'},
  {name:'Chair'},
  {name:'All'},
]

for(var i = 0; i <= data2.length; i++ ) {
  var li = document.createElement("li");
  li.className = "check my-3 ms-3"
  var textli2 = document.createTextNode(data2[i].name);
  li.appendChild(textli2);
  
  document.getElementById("showlist2").appendChild(li);
}