


var positions = [];

function getData(){
	// Condensed data

// https://api.myjson.com/bins/osz4z
$.getJSON('mta.json', function(data) {
  

  
}).done(function(data) {     
		
		for (var i = 1; i < data.length; i++) {
	  	var row = data[i];
      var lat = row["Entrance Latitude"];
      var lng = row["Entrance Longitude"];
      var station = row["Station Name"];
	  	
	  	//all lines
	  	var lines = "";
	  	var rowString;
	  	var lineVal;
	  	for (var j = 1; j < 12; j++) {
        rowString = "Route"+j;
        lineVal = row[rowString];
        if(lineVal != ""){
          if(lineVal != null){lines += "<img width='20px' src='icons/lines/"+lineVal+".png' />"}
        }
      }


	  	var rowData = [];
	  	rowData.push(station);
	  	rowData.push(lat);
	  	rowData.push(lng);
	  	
	  	rowData.push(lines);

	  	positions.push(rowData);
	  	
	  	}

	  	initMap();
	  	
}).fail(function(){

});

}






