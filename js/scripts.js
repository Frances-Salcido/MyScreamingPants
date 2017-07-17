//random color javascript
 
 function random_color() { 
 var div = document.getElementById('colorChange');
 var color = '#'; 
 var letters = ['e2620d','f4b342','a2e23b','3ae2c3','e231b9','c993bc','4286f4','f27f52']; 
 color += letters[Math.floor(Math.random() * letters.length)]; 
 div.style.background = color;
  
};

// table stuff

var proxy = 'https://cors-anywhere.herokuapp.com/';
var myUrl = 'https://www.1988trip.xyz/hellokitty.json';
var finalUrl = proxy + myUrl;

$.ajax({
 url: finalUrl,
  dataType: 'json',
    success : function(data) 
    { console.log(data);
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].Dessert+ '</td><td>' + data[i].Flavor + '</td><td>' + data[i].Size + '</td><td>' + data[i].Texture + '</td></tr>');
            $('#myTable').append(row); }
    }
});