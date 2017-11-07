var initTemperature = 20; //as told for ms.takara

function ConvertToCelsius(F) {
    return (F-32)*5/9;
}



function GenerateTemperatureData(InitialTemp, EndingTemp, Increments) {

    for (i=InitialTemp; i<=EndingTemp;  i+=Increments) {
	var table = document.getElementById("TempTable");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = i
	cell2.innerHTML = ConvertToCelsius(i);
	cell1.style.width = '200px';
	cell2.style.width = '200px';
	
	

	//Color Coded Spectrum Cold -> Hot
	if (cell2.innerHTML < 0) {
	    //Freezing
	    cell1.style.backgroundColor = "#82b1ff";
	    cell2.style.backgroundColor = "#82b1ff"; 
	} else if (cell2.innerHTML >=0 && cell2.innerHTML <=5.9)  {
	    //Very Cold
	    cell1.style.backgroundColor = "#D6FEFE";
	    cell2.style.backgroundColor = "#D6FEFE";
	} else if (cell2.innerHTML >=6 && cell2.innerHTML <=9.9) {
	    //Cold
	    cell1.style.backgroundColor = "#D6FDD0";
	    cell2.style.backgroundColor = "#D6FDD0";
	} else if (cell2.innerHTML >=10 && cell2.innerHTML <=13.9) {
	    //Cool
	    cell1.style.backgroundColor = "#FFFEA6";
	    cell2.style.backgroundColor = "#FFFEA6";
	} else if (cell2.innerHTML >=14 && cell2.innerHTML <=17.9) {
	    //Mild
	    cell1.style.backgroundColor = "#FFFD54";
	    cell2.style.backgroundColor = "#FFFD54";
	} else if (cell2.innerHTML >=18 && cell2.innerHTML <=22.9) {
	    //Moderate
	    cell1.style.backgroundColor = "#F8CC46";
	    cell2.style.backgroundColor = "#F8CC46";
	} else if (cell2.innerHTML >=23 && cell2.innerHTML <=26.9) {
	    //Warm
	    cell1.style.backgroundColor = "#F29D39";
	    cell2.style.backgroundColor = "#F29D39";
	} else if (cell2.innerHTML >=27 && cell2.innerHTML <=29.9) {
	    //Very Warm
	    cell1.style.backgroundColor = "#EE6F2D";
	    cell2.style.backgroundColor = "#EE6F2D";
	} else if (cell2.innerHTML >=30 && cell2.innerHTML <=39.9) {
	    //Hot
	    cell1.style.backgroundColor = "#EB3223";
	    cell2.style.backgroundColor = "#EB3223";
	} else {
	    //Scorching
	    cell1.style.backgroundColor = "#F1A0F9";
	    cell2.style.backgroundColor = "#F1A0F9";
	}
    }
}

//starting data.
GenerateTemperatureData(initTemperature, 120, 5 );

function appendData() {
    	var table = document.getElementById("TempTable")
    while ( table.rows.length-1 > 0 )
    {
	table.deleteRow(1);
    }
    
    var InitValue  = document.getElementById("InitValue").value;
    var MaxValue = document.getElementById("MaxValue").value;
    var IncrementValue = document.getElementById("IncrementValue").value;
    GenerateTemperatureData(parseInt(InitValue), parseInt(MaxValue), parseInt(IncrementValue));
}


    
