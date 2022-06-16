  var data1 = [
    {name:'Email Marketing'},
    {name:'Campaigns'},
    {name:'Branding'},
  ]  
 
  for(var i = 0; i <= data1.length; i++ ) {
    var li = document.createElement("li");
    li.className = "check my-3 ms-3"
    var textli1 = document.createTextNode(data1[i].name);
    li.appendChild(textli1);
    
    document.getElementById("showlist1").appendChild(li);
  } 
  
  