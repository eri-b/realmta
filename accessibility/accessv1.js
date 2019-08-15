


var positions = [];

function getData(){
	// Condensed data

	// with duplicates (https://api.myjson.com/bins/el73b)
	// w/o utica https://api.myjson.com/bins/wfd5b
// $.getJSON('https://api.myjson.com/bins/1bys1b', function(data) {
$.getJSON('data.json', function(data) {
  

  
}).done(function(data) {     
		
		for (var i = 1; i < data.length; i++) {
	  	var row = data[i];
	  	var lat = row.FIELD4;
	  	var lng = row.FIELD5;
	  	var station = row.FIELD3;
	  	
	  	//all lines
	  	var lines = "";
	  	var rowString;
	  	var lineVal;
	  	for (var j = 6; j < 17; j++) {
	  		rowString = "FIELD"+j;
	  		lineVal = row[rowString];
	  		if(lineVal != ""){
	  			lines += "<img width='20px' src='icons/lines/"+lineVal+".png' />"
	  			// lines.push(row[rowString]);
	  		}
	  	}

	  	var type = row.FIELD17;
	  	var corner = row.FIELD28;

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








// Grabs all data via JSON
// $.getJSON('https://data.ny.gov/api/views/i9wp-a4ja/rows.json?accessType=DOWNLOAD', function(data) {
//   console.log(data);
// }).done(function() { 
// }).fail(function(){
// });








// Grabs all data via xml
  // $.ajax({          
  //           type:  'GET',
  //           url: 'https://data.ny.gov/api/views/i9wp-a4ja/rows.xml?accessType=DOWNLOAD',
  //           dataType: 'xml',              
  //           success: function(data){

  //               // var numChap = $(data).find('bible').find('#gn').find('c').length;
  //               // var numVer = $(data).find('bible').find('#gn').find("c[n="+numChap+"]").find("v").length;
  //                console.log(data);

  //               // var j = 1;
  //               // for (var i = numVer; i < (numVer + 5); i++) {
  //               // 	//var verse = $(data).find('bible').find('#gn').find("c[n="+numChap+"]").find("v[n="+i+"]").text();
  //               // 	// console.log(verse);
  //               // 	var html = "<p>"+verse+"</p>"
  //               // 	$('center').append(html);
  //               // };
                
  //               var len = $(data).find('row').length;
                
  //               var positions2 = [];

  //               for (var i = 1; i < 10; i++) {
  //               	var isAda = $(data).find('row').find("row[ _id ="+i+"]").find('ada').text();
  //               	// console.log(isAda);
                	
  //               	if( isAda == "TRUE" ){
  //               		var station = $(data).find('row').find("row[ _id ="+i+"]").find('station_name').text();
  //               		var lat = $(data).find('row').find("row[ _id ="+i+"]").find('entrance_latitude').text();
  //               		var lng = $(data).find('row').find("row[ _id ="+i+"]").find('entrance_longitude').text();
  //               		var line = $(data).find('row').find("row[ _id ="+i+"]").find('route1').text();

  //               		var row = [];
  //               		row.push(station);
  //               		row.push(lat);
  //               		row.push(lng);
  //               		row.push(line);
  //               		console.log(row);
  //               	}
                	
  //               }
          

  //           }
  //        });