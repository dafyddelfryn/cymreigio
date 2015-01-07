var cymreigio = {

	enwDydd: function(dydd) {
	 	
	 	var dyddTemp ='';
		var dyddLlawn = dydd.slice(0,3);
		var dyddPrawf = dyddLlawn.toUpperCase();
		
		switch(dyddPrawf){
			case "MON": dyddTemp ="Llun";
			break;
			case "TUE": dyddTemp ="Mawrth";
			break;
			case "WED": dyddTemp ="Mercher";
			break;
			case "THU": dyddTemp ="Iau";
			break;
			case "FRI": dyddTemp ="Gwener";
			break;
			case "SAT": dyddTemp ="Sadwrn";
			break;
			case "SUN": dyddTemp ="Sul";
			break;
			default: dyddTemp = dydd;
		}
		dydd = dyddTemp;
		return dydd;
	},
	
	rhifDydd: function(dydd) {
	 	
	 	var dyddTemp ='';
	 	var rhifDydd ='';
	 	
	 	if (dydd.length != 2)
	 	{
	 		rhifDydd = "0"+dydd;
	 	}
	 	else{
	 		rhifDydd = dydd;
	 	}
		
		switch(rhifDydd){
			case "01": dyddTemp ="Llun";
			break;
			case "02": dyddTemp ="Mawrth";
			break;
			case "03": dyddTemp ="Mercher";
			break;
			case "04": dyddTemp ="Iau";
			break;
			case "05": dyddTemp ="Gwener";
			break;
			case "06": dyddTemp ="Sadwrn";
			break;
			case "07": dyddTemp ="Sul";
			break;
			default: dyddTemp = dydd;
		}
		dydd = dyddTemp;
		return dydd;
	},
	
	
	
	enwMis: function(mis) {
	 	
	 	var misTemp ='';
		var misLlawn = mis.slice(0,3);
		var misPrawf = misLlawn.toUpperCase();
		
		switch(misPrawf){
			case "JAN": misTemp ="Ionawr";
			break;
			case "FEB": misTemp ="Chwefror";
			break;
			case "MAR": misTemp ="Mawrth";
			break;
			case "APR": misTemp ="Ebrill";
			break;
			case "MAY": misTemp ="Mai";
			break;
			case "JUN": misTemp ="Mehefin";
			break;
			case "JUL": misTemp ="Gorffennaf";
			break;
			case "AUG": misTemp ="Awst";
			break;
			case "SEP": misTemp ="Medi";
			break;
			case "OCT": misTemp ="Hydref";
			break;
			case "NOV": misTemp ="Tachwedd";
			break;
			case "DEC": misTemp ="Rhagfyr";
			break;
			default: misTemp = mis;
		}
		mis = misTemp;
		return mis;
	}
};
