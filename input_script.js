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


function create_list(){
	let 
}

function display(){
	let x = document.getElementById("country").value
		return x
}

function update_map(code){
	console.log(code)
	let target = document.getElementById(code)
	target.style.fill = "green"

}	



window.addEventListener("load", main);


function main(){
	let selections_country = []
	let selections_code = []
	let country = new CountryCode();

	let selection = document.getElementById("store")
	let my_map_trigger = document.getElementById("done")


	 selection.addEventListener("click", function (){
	 	console.log('HERE')
	 	selections_code.push(display())
	 	selections_country.push(country.getName(display().toLowerCase()))
	 	document.getElementById("display").innerText= selections_country

	 })
	my_map_trigger.addEventListener("click", function(){
		console.log(selections_code)
		for (i = 0; i < selections_code.length; i++){
			console.log(selections_code[i])
		update_map(selections_code[i])
	}
	})

	
}