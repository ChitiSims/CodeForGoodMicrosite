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



function select(){

let country =  ["--Select a country--","Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua And Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia, Plurinational State Of", "Bonaire, Sint Eustatius And Saba", "Bosnia And Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic Of The", "Cook Islands", "Costa Rica", "Côte D'ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Heard Island And Mcdonald Islands", "Holy See (vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran, Islamic Republic Of", "Iraq", "Ireland", "Isle Of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic Of", "Korea, Republic Of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, The Former Yugoslav Republic Of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States Of", "Moldova, Republic Of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State Of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension And Tristan Da Cunha", "Saint Kitts And Nevis", "Saint Lucia", "Saint Martin (french Part)", "Saint Pierre And Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (dutch Part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia And The South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard And Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province Of China", "Tajikistan", "Tanzania, United Republic Of", "Thailand", "Timor-leste", "Togo", "Tokelau", "Tonga", "Trinidad And Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela, Bolivarian Republic Of", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.s.", "Wallis And Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];

let myDiv = document.getElementById("yo")

//Create and append select list
let selectList = document.createElement("select");
selectList.id = "added_country";
myDiv.appendChild(selectList);

//Create and append the options
for (let i = 0; i < country.length; i++) {
    let option = document.createElement("option");
    option.value = country[i];
    option.text = country[i];
    selectList.appendChild(option);
}
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

	let add = document.getElementById('add-more')
	let selection = document.getElementById("store")
	let my_map_trigger = document.getElementById("done")




	add.addEventListener("click", function (){
		select()
	})

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