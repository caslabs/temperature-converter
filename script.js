/*
* Temperature Script
* Reads User-Defined value to generates tables.
*
*
* author @ Jeraldy Cascayan 2017
*/


var initTemperature = 20; //as instructed
var maxTemperature = 120; //as instructed
var incrementRule = 5; //as instructed

//equation
function ConvertToCelsius(F) {
    return (F-32)*5/9;
}

//Status of user inputs
var inputStatus = document.getElementById('inputStatus');

//User-Generated Table
function GenerateTemperatureData(InitialTemp, EndingTemp, Increments) {

    //for loops data, generates row and cells and imports value
    for (i=InitialTemp; i<=EndingTemp;  i+=Increments) {
	var table = document.getElementById("TempTable");
	var row = table.insertRow(-1);
	var fCell = row.insertCell(0); 
	var cCell = row.insertCell(1); 
	fCell.innerHTML = i
	cCell.innerHTML = ConvertToCelsius(i);
	fCell.style.width = '200px';
	cCell.style.width = '200px';

	//Color Coded Spectrum Cold -> Hot
	//ranges (min - max)
	if (cCell.innerHTML < 0) {
	    //Freezing
	    fCell.style.backgroundColor = "#82b1ff";
	    cCell.style.backgroundColor = "#82b1ff"; 
	} else if (cCell.innerHTML >=0 && cCell.innerHTML <=5.9)  {
	    //Very Cold
	    fCell.style.backgroundColor = "#D6FEFE";
	    cCell.style.backgroundColor = "#D6FEFE";
	} else if (cCell.innerHTML >=6 && cCell.innerHTML <=9.9) {
	    //Cold
	    fCell.style.backgroundColor = "#D6FDD0";
	    cCell.style.backgroundColor = "#D6FDD0";
	} else if (cCell.innerHTML >=10 && cCell.innerHTML <=13.9) {
	    //Cool
	    fCell.style.backgroundColor = "#FFFEA6";
	    cCell.style.backgroundColor = "#FFFEA6";
	} else if (cCell.innerHTML >=14 && cCell.innerHTML <=17.9) {
	    //Mild
	    fCell.style.backgroundColor = "#FFFD54";
	    cCell.style.backgroundColor = "#FFFD54";
	} else if (cCell.innerHTML >=18 && cCell.innerHTML <=22.9) {
	    //Moderate
	    fCell.style.backgroundColor = "#F8CC46";
	    cCell.style.backgroundColor = "#F8CC46";
	} else if (cCell.innerHTML >=23 && cCell.innerHTML <=26.9) {
	    //Warm
	    fCell.style.backgroundColor = "#F29D39";
	    cCell.style.backgroundColor = "#F29D39";
	} else if (cCell.innerHTML >=27 && cCell.innerHTML <=29.9) {
	    //Very Warm
	    fCell.style.backgroundColor = "#EE6F2D";
	    cCell.style.backgroundColor = "#EE6F2D";
	} else if (cCell.innerHTML >=30 && cCell.innerHTML <=39.9) {
	    //Hot
	    fCell.style.backgroundColor = "#EB3223";
	    cCell.style.backgroundColor = "#EB3223";
	} else {
	    //Scorching
	    fCell.style.backgroundColor = "#F1A0F9";
	    cCell.style.backgroundColor = "#F1A0F9";
	}
    }    
    inputStatus.innerHTML = ""; //reset status code
    
}

//Starting data
GenerateTemperatureData(initTemperature, maxTemperature, incrementRule);

function appendData() {
    var table = document.getElementById("TempTable")
    while ( table.rows.length-1 > 0 )
    {
	//Refreshes data
	table.deleteRow(1);
    }
    
    var InitValue  = document.getElementById("InitValue").value;
    var MaxValue = document.getElementById("MaxValue").value;
    var IncrementValue = document.getElementById("IncrementValue").value;

    //Input Rules
    if(IncrementValue%1!=0) {
	//Increment Value cannot be a decimal
	inputStatus.innerHTML += 'Error : Increment Value cannot be decimal    '
	return;
    } else if (MaxValue>=99999) {
	//Max Value cannot be greater than or equal to 99999
	inputStatus.innerHTML += 'Error : Maximum Fahrenheit Value is too high   '
	return;
    } else {
	//append new data
	GenerateTemperatureData(parseInt(InitValue), parseInt(MaxValue), parseInt(IncrementValue));
    }
}
 



    
