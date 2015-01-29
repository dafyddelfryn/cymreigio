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
	
	rhifMis: function(mis) {
	 	
	 	var rhifMisTemp ='';
	 	var rhifMis ='';
	 	
	 	if (mis.length != 2)
	 	{
	 		rhifMis = "0"+mis;
	 	}
	 	else{
	 		rhifMis = mis;
	 	}
		
		switch(rhifMis){
			case "01": rhifMisTemp ="Ionawr";
			break;
			case "02": rhifMisTemp ="Chwefror";
			break;
			case "03": rhifMisTemp ="Mawrth";
			break;
			case "04": rhifMisTemp ="Ebrill";
			break;
			case "05": rhifMisTemp ="Mai";
			break;
			case "06": rhifMisTemp ="Mehefin";
			break;
			case "07": rhifMisTemp ="Gorffennaf";
			break;
			case "08": rhifMisTemp ="Awst";
			break;
			case "09": rhifMisTemp ="Medi";
			break;
			case "10": rhifMisTemp ="Hydref";
			break;
			case "11": rhifMisTemp ="Tachwedd";
			break;
			case "11": rhifMisTemp ="Rhagfyr";
			break;
			default: rhifMisTemp = mis;
		}
		mis = rhifMisTemp;
		return mis;
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
