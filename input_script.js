const config = {
apiKey: "AIzaSyBjGBLVPxiEzET1mqtZebJgXwsbVQE_3Ck",
authDomain: "codeforgoodsite.firebaseapp.com",
databaseURL: "https://codeforgoodsite.firebaseio.com",
projectId: "codeforgoodsite",
storageBucket: "codeforgoodsite.appspot.com",
messagingSenderId: "824518102248"
};
firebase.initializeApp(config);

(function(){
	var countriesData =  {
  "United Arab Emirates": "AE",
  "Afghanistan": "AF",
  "Albania": "AL",
  "Armenia": "AM",
  "Angola": "AO",
  "Argentina": "AR",
  "Austria": "AT",
  "Australia": "AU",
  "Azerbaijan": "AZ",
  "Bosnia and Herzegovina": "BA",
  "Bangladesh": "BD",
  "Belgium": "BE",
  "Burkina Faso": "BF",
  "Bulgaria": "BG",
  "Burundi": "BI",
  "Benin": "BJ",
  "Brunei Darussalam": "BN",
  "Bolivia": "BO",
  "Brazil": "BR",
  "Bahamas": "BS",
  "Bhutan": "BT",
  "Botswana": "BW",
  "Belarus": "BY",
  "Belize": "BZ",
  "Canada": "CA",
  "Democratic Republic of Congo": "CD",
  "Central African Republic": "CF",
  "Republic of Congo": "CG",
  "Switzerland": "CH",
  "Côte d'Ivoire": "CI",
  "Chile": "CL",
  "Cameroon": "CM",
  "China": "CN",
  "Colombia": "CO",
  "Costa Rica": "CR",
  "Cuba": "CU",
  "Cyprus": "CY",
  "Czech Republic": "CZ",
  "Germany": "DE",
  "Djibouti": "DJ",
  "Denmark": "DK",
  "Dominican Republic": "DO",
  "Algeria": "DZ",
  "Ecuador": "EC",
  "Estonia": "EE",
  "Egypt": "EG",
  "Western Sahara": "EH",
  "Eritrea": "ER",
  "Spain": "ES",
  "Ethiopia": "ET",
  "Falkland Islands": "FK",
  "Finland": "FI",
  "Fiji": "FJ",
  "France": "FR",
  "Gabon": "GA",
  "United Kingdom": "GB",
  "Georgia": "GE",
  "French Guiana": "GF",
  "Ghana": "GH",
  "Greenland": "GL",
  "Gambia": "GM",
  "Guinea": "GN",
  "Equatorial Guinea": "GQ",
  "Greece": "GR",
  "Guatemala": "GT",
  "Guinea-Bissau": "GW",
  "Guyana": "GY",
  "Honduras": "HN",
  "Croatia": "HR",
  "Haiti": "HT",
  "Hungary": "HU",
  "Indonesia": "ID",
  "Ireland": "IE",
  "Israel": "IL",
  "India": "IN",
  "Iraq": "IQ",
  "Iran": "IR",
  "Iceland": "IS",
  "Italy": "IT",
  "Jamaica": "JM",
  "Jordan": "JO",
  "Japan": "JP",
  "Kenya": "KE",
  "Kyrgyzstan": "KG",
  "Cambodia": "KH",
  "North Korea": "KP",
  "South Korea": "KR",
  "Kosovo": "XK",
  "Kuwait": "KW",
  "Kazakhstan": "KZ",
  "Lao People's Democratic Republic": "LA",
  "Lebanon": "LB",
  "Sri Lanka": "LK",
  "Liberia": "LR",
  "Lesotho": "LS",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Latvia": "LV",
  "Libya": "LY",
  "Morocco": "MA",
  "Moldova": "MD",
  "Montenegro": "ME",
  "Madagascar": "MG",
  "Macedonia": "MK",
  "Mali": "ML",
  "Myanmar": "MM",
  "Mongolia": "MN",
  "Mauritania": "MR",
  "Malawi": "MW",
  "Mexico": "MX",
  "Malaysia": "MY",
  "Mozambique": "MZ",
  "Namibia": "NA",
  "New Caledonia": "NC",
  "Niger": "NE",
  "Nigeria": "NG",
  "Nicaragua": "NI",
  "Netherlands": "NL",
  "Norway": "NO",
  "Nepal": "NP",
  "New Zealand": "NZ",
  "Oman": "OM",
  "Panama": "PA",
  "Peru": "PE",
  "Papua New Guinea": "PG",
  "Philippines": "PH",
  "Poland": "PL",
  "Pakistan": "PK",
  "Puerto Rico": "PR",
  "Palestinian Territories": "PS",
  "Portugal": "PT",
  "Paraguay": "PY",
  "Qatar": "QA",
  "Romania": "RO",
  "Serbia": "RS",
  "Russia": "RU",
  "Rwanda": "RW",
  "Saudi Arabia": "SA",
  "Solomon Islands": "SB",
  "Sudan": "SD",
  "Sweden": "SE",
  "Slovenia": "SI",
  "Svalbard and Jan Mayen": "SJ",
  "Slovakia": "SK",
  "Sierra Leone": "SL",
  "Senegal": "SN",
  "Somalia": "SO",
  "Suriname": "SR",
  "South Sudan": "SS",
  "El Salvador": "SV",
  "Syria": "SY",
  "Swaziland": "SZ",
  "Chad": "TD",
  "French Southern and Antarctic Lands": "TF",
  "Togo": "TG",
  "Thailand": "TH",
  "Tajikistan": "TJ",
  "Timor-Leste": "TL",
  "Turkmenistan": "TM",
  "Tunisia": "TN",
  "Turkey": "TR",
  "Trinidad and Tobago": "TT",
  "Taiwan": "TW",
  "Tanzania": "TZ",
  "Ukraine": "UA",
  "Uganda": "UG",
  "United States": "US",
  "Uruguay": "UY",
  "Uzbekistan": "UZ",
  "Venezuela": "VE",
  "Vietnam": "VN",
  "Vanuatu": "VU",
  "Yemen": "YE",
  "South Africa": "ZA",
  "Zambia": "ZM",
  "Zimbabwe": "ZW"
};

	function CountryCode() {
		this.fromName = {};
		this.fromCode = {};

		var keys = Object.keys(countriesData);
		for (i=0; i < keys.length; i++) {
			var country = keys[i];
			var code = countriesData[country];
			var countryParts = country.split(/,\s+/);
			var name = "";

			for (ii=0; ii < countryParts.length; ii++) {
				name += countryParts[ii];
				this.fromCode[code.toUpperCase()] = name;
				this.fromName[name.toUpperCase()] = code;
				name += ', ';
			}
		}
	}

	CountryCode.prototype.getCode = function(name) {
		return this.fromName[name.toUpperCase()];
	};

	CountryCode.prototype.getName = function(code) {
		return this.fromCode[code.toUpperCase()];
	};


	window.CountryCode = CountryCode;

})();

function inlist(element, list){
	let result = false
 for(let i = 0 ; i < list.length; i++){
 	if (list[i] === element){
 		result = true
 		return result
 	}
 	return result
 }
}

function remove_ele(element){
	let dispose = document.getElementById(element)
	dispose.innerHTML = "";


}

function display(){
	let x = document.getElementById("country").value
		return x
}

function update_map(code){
	let target = document.getElementById(code)
	target.style.fill = "green"

}	

function edit_db(event, request){
	let database = firebase.database().ref().child(event);
	database.once('value').then(function(snapshot){
		let initialVal = snapshot.val();
		initialVal["count"]+=request.length;
		for (i=0; i<request.length; i++){
			initialVal["countries"][request[i]]++;
			}
		console.log(initialVal)
		return firebase.database().ref().child(event).update(initialVal);
	}, function(err){
		return ("Something went wrong")
	});

}



window.addEventListener("load", main);
	let selections_country = []
	let selections_code = []
	let country = new CountryCode();
function main(){


	let selection = document.getElementById("store")
	let my_map_trigger = document.getElementById("done")
	let clear_chosen = document.getElementById("clear")

	 selection.addEventListener("click", function (){
	 	if (!inlist(display(), selections_code) && display() !== "sup"){
	 		console.log(display())
	 	selections_code.push(display())
	 	selections_country.push(country.getName(display()))
	 	create_list(selections_country)
	 }

	 })

	 clear_chosen.addEventListener("click", function(){
	 	selections_code = []
	 	selections_country = []
	 	create_list(selections_country)
	 })

	my_map_trigger.addEventListener("click", function(){
		console.log(selections_code)
		edit_db("event5",selections_code)
	 	selections_code = []
	 	selections_country = []
	 	if(window.confirm("Are you sure you want to submit?")){
	 	create_list(selections_country)
	}

	})

	
}
function create_list(chosen){

	let myDiv = document.getElementById("displayed_country")
	let size  = myDiv.childElementCount
	if(size > 0){
		myDiv.innerHTML = "";
		}
	console.log(chosen)
	for (let i = 0; i < chosen.length; i++) {
	    let li = document.createElement("li");
	    let removal = document.createElement("button")
	    removal.id = chosen[i]
	    removal.innerText = "remove"
	    li.id = chosen[i];
	    li.innerText = chosen[i];
	    myDiv.appendChild(li);
	    li.appendChild(removal)
	    removal.addEventListener("click", function(){
	    	selections_country.splice(removal.id,1)
	    	selections_code.splice(country.getCode(removal.id), 1)
	    	create_list(selections_country)
	    })
}
}